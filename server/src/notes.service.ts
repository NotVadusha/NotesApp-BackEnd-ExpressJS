import NotesDB from "./database.model";
import INote from "./interfaces/INote";

class notesService {
  async create(note: INote) {
    return await NotesDB.create(note);
  }

  async getOne(id: String | number) {
    return await NotesDB.findById(id);
  }

  async getAll() {
    return await NotesDB.find();
  }

  async update(note: any, id: string) {
    return await NotesDB.findByIdAndUpdate(id, note, {
      new: true,
    });
  }

  async delete(id: String | number) {
    return await NotesDB.findByIdAndDelete(id);
  }
}

export default new notesService();
