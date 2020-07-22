
require('dotenv').config();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGO_URI
db.posting = require("./Postings")(mongoose);

module.exports = db;