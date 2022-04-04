const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  event: {
    type: Schema.Types.ObjectId,
    ref: 'events'
  },

  // Array of Comments in that thread
  comments: [
    {
      body: {
        type: String,
        required: true
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ]
});

module.exports = Thread = mongoose.model('Thread', ThreadSchema);