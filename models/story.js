const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    genre: { type: String, required: true},
    plot: { type: String, required: true },
    conflict: { type: String, required: true },
    resolution: { type: String, required: true },
    character: { type: String, required: true },
    setting: { type: String, required: true },
    // author : { type: Schema.Types.ObjectId, ref: "User", required: true },
    // comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
});

module.exports = mongoose.model("Story", CommentSchema);
