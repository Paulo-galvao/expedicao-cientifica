import conn from "../config/conn.js";

const Schema = conn.Schema;

const explorerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fieldOfStudy: {
        type: String,
        required: true
    },
    expeditionsParticipated: {
        type: Number,
        required: true
    }
});

const Explorer = conn.model("Explorer", explorerSchema);
export default Explorer;