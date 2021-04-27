const mongoose = require("mongoose");
const { Schema } = mongoose;

const MutationSchema = new Schema({
    dna: { type: String, unique: true, required: true },
    hasMutation: { type: Boolean },
});

module.exports = mongoose.model("mutation", MutationSchema);