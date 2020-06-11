const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let Job = new Schema(
    {
      job_description:{
          type: String
      },
      job_responsible:{
          type: String
      },
      job_priority: {
          type: String
      },
      job_completed: {
          type: Boolean
      }
      
    }
);

module.exports = mongoose.model('Job',Job);