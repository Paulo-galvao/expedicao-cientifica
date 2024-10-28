import mongoose from "mongoose";
import "dotenv/config";

const stringConnection = process.env.MONGODB

async function main() {
    try {
        await mongoose.connect(stringConnection);
        console.log("DataBase connected");
    } catch (error) {
        console.log(error.message);
    }
}

main();

export default mongoose;