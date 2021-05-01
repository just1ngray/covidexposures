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
    start: number,

    /** millis since epoch GMT+0 exposure end time */
    end: number,

    /** the coordinates of the exposure location */
    coord: Coordinate,

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
        default: "",
        maxlength: 1024
    },
    address: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1024
    },
    start: {
        type: Number,
        min: 0,
        max: 4102459200000,
        required: true
    },
    end: {
        type: Number,
        min: 0,
        max: 4102459200000,
        required: true
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
        maxlength: 1024,
        trim: true
    }
});

export const ExposureModel = models.Exposure || model("Exposure", ExposureSchema);