import Note from "./notes.validator";
import note from "./INote";

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
