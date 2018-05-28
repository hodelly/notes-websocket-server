import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field

const noteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
}, {
  toJSON: {
    virtuals: true,
  },
});

const NoteModel = mongoose.model('Note', noteSchema);

export default NoteModel;
