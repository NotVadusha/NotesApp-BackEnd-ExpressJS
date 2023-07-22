import Note from "./notes.validator";

interface note {
  _id: String;
  title: String;
  content?: String;
  is_archived: Boolean;
  is_completed: Boolean;
  created: Date;
  is_updated: Date | null;
  category: String;
}

class notesService {
  async create(note: note) {
    return await Note.create(note);
  }

  async getOne(id: String | number) {
    if (!id) {
      throw new Error("Not found");
    }
    return await Note.findById(id);
  }

  async getAll() {
    return await Note.find();
  }

  async update(note: note) {
    if (!note._id) {
      throw new Error("Not found");
    }
    return await Note.findByIdAndUpdate(note._id, note, {
      new: true,
    });
  }

  async delete(id: String | number) {
    if (!id) {
      throw new Error("Not found");
    }
    return await Note.findByIdAndDelete(id);
  }
}

export default new notesService();
