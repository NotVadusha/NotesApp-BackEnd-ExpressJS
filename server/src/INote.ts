interface INote {
  _id: String;
  title: String;
  content?: String;
  is_archived: Boolean;
  is_completed: Boolean;
  created: Date;
  is_updated: Date;
  category: String;
}

export default INote;
