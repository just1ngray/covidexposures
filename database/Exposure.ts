import { Schema, model, Document, Types, models } from "mongoose";

import { Scraper } from "./Scraper";
import { Coordinate, CoordinateSchema } from "./Coordinate";

export interface Exposure extends Document {
    /** the _id of the Scraper who found this exposure */
    scraper: Types.ObjectId & Scraper,

    /** of the exposure location */
    name: string,

    /** of the exposure location */
    address: string,

    /** millis since epoch GMT+0 exposure start time */
    epoch: number,

    /** millis of exposure window (epoch + width = exposure end time) */
    width: number,

    /** the coordinates of the exposure location */
    coord: Coordinate,

    /** any instructions from the source */
    instructions: string
}

export const ExposureSchema = new Schema({
    scraper: {
        type: Types.ObjectId,
        ref: "Scraper",
        required: true,
        default: null
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
    coord: {
        type: CoordinateSchema,
        default: {
            long: null,
            lat: null
        }
    },
    instructions: {
        type: String,
        default: "",
        trim: true
    }
});

export const ExposureModel = models.Exposure || model("Exposure", ExposureSchema);