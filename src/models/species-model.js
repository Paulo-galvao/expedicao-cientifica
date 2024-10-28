import conn from "../config/conn.js";

const Schema = conn.Schema;

const speciesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    discoveryLocation: {
        type: String,
        required: true
    },
    rarity: {
        type: Number,
        required: true
    },
    documented: {
        type: Boolean,
        required: true
    }
});

const Species = conn.model("Species", speciesSchema);
export default Species;