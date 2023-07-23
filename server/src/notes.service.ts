import Note from "./notes.validator";
import note from "./INote";

class notesService {
  async create(note: note) {
    return await Note.create(note);
  }

  async getOne(id: String | number) {
    return await Note.findById(id);
  }

  async getAll() {
    return await Note.find();
  }

  async update(note: note) {
    return await Note.findByIdAndUpdate(note._id, note, {
      new: true,
    });
  }

  async delete(id: String | number) {
    return await Note.findByIdAndDelete(id);
  }
}

export default new notesService();
