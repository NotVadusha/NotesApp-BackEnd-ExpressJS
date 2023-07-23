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

export default note;
