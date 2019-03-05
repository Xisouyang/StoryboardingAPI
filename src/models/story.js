const mongoose = require("mongoose");
const { Schema } = mongoose;

const StorySchema = new Schema({
    genre: { type: String, required: true},
    plot: { type: String, required: true },
    conflict: { type: String, required: true },
    resolution: { type: String, required: true },
    character: { type: String, required: true },
    setting: { type: String, required: true },
    author : { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Story", StorySchema);
