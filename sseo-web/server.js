const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const PORT = 4000;
const router = express.Router();

//
app.use(cors());
app.use(bodyParser.json());




// routes
const postings = require('./routes/postings');
app.use('/models/postings', postings)


//let Job = require('./sseo-web/models/JobModel');
app.get('/', (req, res) => res.send('Server is up and running'));
mongoose.connect('uri here',
 {
     useNewUrlParser: true
});


const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})



app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

router.route('/add').post(function(req,res){
    let job = new Job(req.body);
    job.save()
        .then(todo => {
            res.status(200).json({'job': 'job added successfully'})
        })
        .catch(err=>{
            res.status(400).send('adding new job failed');
        });
});