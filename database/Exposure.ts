import { Schema, model, Document, Types } from "mongoose";
import axios from "axios";

import keys from "../keys";

export interface Exposure extends Document {
    /** the _id of the Scraper who found this exposure */
    scraper: Types.ObjectId,

    /** of the exposure location */
    name: string,

    /** of the exposure location */
    address: string,

    /** millis since epoch GMT+0 exposure start time */
    epoch: number,

    /** millis of exposure window (epoch + width = exposure end time) */
    width: number,

    /** the longitudinal coordinate of the exposure location */
    long: number | null,

    /** the latitude coordinate of the exposure location */
    lat: number | null,

    /** any instructions from the source */
    instructions: string

    /** locates the address and fills long/lat values efficiently */
    locate: () => Promise<boolean>;
}

export const ExposureSchema = new Schema({
    scraper: {
        type: Types.ObjectId,
        ref: "Scraper",
        required: true
    },
    name: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    epoch: {
        type: Number,
        min: 0,
        required: true
    },
    width: {
        type: Number,
        min: 1,
        default: 8.64*10**7
    },
    long: {
        type: Number,
        default: null,
        index: true,
        min: -180,
        max: 180
    },
    lat: {
        type: Number,
        default: null,
        index: true,
        min: -90,
        max: 90
    },
    instructions: {
        type: String,
        default: "",
        trim: true
    }
});
ExposureSchema.index({
    name: 1,
    address: 1,
    epoch: 1,
    width: 1
}, { unique: true });

ExposureSchema.methods.locate = async function(): Promise<boolean> {
    const me = this as Exposure;
    if (me.long != null) return Promise.reject("Exposure already located");

    try {
        // first check if we've already located this address
        const dupAddr = await ExposureModel.findOne({ 
            address: me.address, 
            long: { $ne: null },
            lat: { $ne: null }
        });

        if (dupAddr) {
            me.long = dupAddr.long;
            me.lat = dupAddr.lat;

            await me.save();
            return false;
        }

        // we've never located this address - query google api
        const addr = encodeURIComponent(me.address);
        const { data } = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=${keys.google.geocode}`)

        me.long = data.results[0].geometry.location.lng;
        me.lat = data.results[0].geometry.location.lat;

        await me.save();
        return true;
    } catch (err) {
        // null island
        me.long = 0.0;
        me.lat = 0.0;
        await me.save();
        return Promise.reject(err);
    }
}

export const ExposureModel = model("Exposure", ExposureSchema);