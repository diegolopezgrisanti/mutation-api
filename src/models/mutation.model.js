const mongoose = require("mongoose");
const { Schema } = mongoose;

const MutationSchema = new Schema({
    dna: { type: String, required: true },
    hasMutation: { type: Boolean },
});

module.exports = mongoose.model("mutation", MutationSchema);