import { Schema, model, Document, Types } from "mongoose";

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

export const ExposureModel = model("Exposure", ExposureSchema);