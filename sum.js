// function sum(a, b) {
//     return a + b;
// }
// module.exports = sum;


// / Games.ts
import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  name: String,
  releaseDate: String,
  platform: String,
  genre: String,
  description: String,
  players: String,
  type: String,
  // created: { type: Date, default: Date.now },
});

export default mongoose.model('Game', schema);
