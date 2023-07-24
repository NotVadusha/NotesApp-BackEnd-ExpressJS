import Note from "./notes.validator";
import INote from "./interfaces/INote";

class notesService {
  async create(note: INote) {
    return await Note.create(note);
  }

  async getOne(id: String | number) {
    return await Note.findById(id);
  }

  async getAll() {
    return await Note.find();
  }

  async update(note: INote, id: string) {
    return await Note.findByIdAndUpdate(id, note, {
      new: true,
    });
  }

  async delete(id: String | number) {
    return await Note.findByIdAndDelete(id);
  }
}

export default new notesService();
