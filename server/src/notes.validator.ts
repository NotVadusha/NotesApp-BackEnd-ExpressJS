import mongoose from "mongoose";

const noteRequest = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
  is_archived: { type: Boolean, required: true },
  is_completed: { type: Boolean, required: true },
  created: { type: Date, required: true },
  is_updated: { type: Date, required: true },
  category: { type: String, required: true },
});

export default mongoose.model("Post", noteRequest);
