import Note from '../models/note_model';


export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  return Note.findById(id).remove()
    .then((result) => {
      console.log('note deleted');
    })
    .catch((error) => {
      console.log('note deletion error');
    });
  // remember to return the mongoose function you use rather than just delete
};

export const createNote = (fields) => {
  // you know the drill. create a new Note mongoose object
  // return .save()
  const note = new Note(fields);
  return note.save()
    .then((result) => {
      console.log('note created');
    })
    .catch((error) => {
      console.log('note creation error');
    });
};

export const updateNote = (id, fields) => {
  return Note.findById(id)
    .then((note) => {
    // check out this classy way of updating only the fields necessary
      Object.keys(fields).forEach((k) => {
        note[k] = fields[k];
      });
      return note.save();
    });
};
