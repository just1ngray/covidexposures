import { Schema, model, Document, Types, models } from "mongoose";

import { Account } from "./Account";
import { Coordinate, CoordinateSchema } from "./Coordinate";
import { Exposure } from "./Exposure";

export interface Subscription extends Document {
    /** the account associated with this subscription */
    account: Types.ObjectId & Account,

    /** the center of the location */
    coord: Coordinate,

    /** the radius of the exposure area in metres */
    radius: number,

    /** epoch millis when the subscription starts */
    start: number,

    /** epoch millis when the subscription ends */
    end: number,

    /** any assigned exposures found to match this subscription */
    exposures: [Types.ObjectId & Exposure],

    /** the bounds of the coord & radius */
    bounds: {
        sw: { long: number, lat: number },
        ne: { long: number, lat: number }
    },

    /** the index for auto-removal: when was this document created */
    createdAt: any
}

export const SubscriptionSchema = new Schema({
    account: {
        type: Types.ObjectId,
        ref: "Account",
        required: true
    },
    coord: {
        type: CoordinateSchema,
        required: true
    },
    radius: {
        type: Number,
        min: 1,
        max: 4456,
        required: true
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
    exposures: {
        type: [{
            type: Types.ObjectId,
            ref: "Exposure"
        }],
        default: []
    },
    bounds: {
        sw: { long: Number, lat: Number },
        ne: { long: Number, lat: Number }
    },
    createdAt: {
        type: Date,
        expires: 60*60*24*30, // 30 days
        default: Date.now
    }
});

export const SubscriptionModel = models.Subscription || model("Subscription", SubscriptionSchema);