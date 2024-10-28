import conn from "../config/conn.js";

const Schema = conn.Schema;

const expeditionSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    participants: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Explorer"
    }],
    speciesFound: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Species"
    }]
});

const Expedition = conn.model("Expedition", expeditionSchema);
export default Expedition;