const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const PostingSchema = new Schema(
    {
      postingDescription: String,
      postingType: String,
      postingPriority: String,
      postingCompleted:  Boolean,
    }
);

module.exports = mongoose.model('postings',PostingSchema);