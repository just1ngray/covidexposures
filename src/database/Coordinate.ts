import { Schema, Document, Types } from "mongoose";

export interface Coordinate extends Document {
    long: number,
    lat: number,
    _id: Types.ObjectId | string
}

export const CoordinateSchema = new Schema({
    long: {
        type: Number,
        default: null,
        min: -180,
        max: 180
    },
    lat: {
        type: Number,
        default: null,
        min: -90,
        max: 90
    }
});