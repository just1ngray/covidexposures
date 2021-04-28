import { Schema, model, Document, models } from "mongoose";

export interface Account extends Document {
    /** verified email address through an oauth provider */
    email: string,

    /** first name through an oauth provider */
    name: string,

    /** maintains if the email is subscribed */
    isSubscribed: boolean
}

export const AccountSchema = new Schema({
    email: {
        type: String,
        match: /^.+@.+\..+$/,
        required: true,
        maxlength: 256,
        unique: true
    },
    name: {
        type: String,
        default: "",
        maxlength: 256
    },
    isSubscribed: {
        type: Boolean,
        default: true
    }
});

export const AccountModel = models.Account || model("Account", AccountSchema);