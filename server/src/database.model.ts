import mongoose from "mongoose";

const noteRequest = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
  is_archived: { type: Boolean, required: true },
  is_completed: { type: Boolean, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
  category: { type: String, required: true },
});

export default mongoose.model("Note", noteRequest);
