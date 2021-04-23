import mongoose from "mongoose";

export async function connect() {
    return mongoose.connect("mongodb://localhost:27017/covidexposures", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        poolSize: 5
    })
        .then(() => {
            console.log("Connected to MongoDB");
            return true;
        })
        .catch((err) => {
            console.error("Could not connect to MongoDB: " + err);
            return false;
        });
}

export async function disconnect() {
    return mongoose.disconnect()
        .then(() => {
            console.log("Disconnected from MongoDB");
            return true;
        })
        .catch((err) => {
            console.error("Couldn't disconnect from MongoDB: " + err);
            return false;
        });
}