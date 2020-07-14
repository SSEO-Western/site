const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const jobRoutes = express.Router();
const PORT = 4000

//let Job = require('./sseo-web/models/JobModel');


app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://dbEricKogut:Up9I3Xji05oAc9KH@sseocluster.k4wfx.mongodb.net/test?authSource=admin&replicaSet=atlas-pcpsp7-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
 {
     useNewUrlParser: true
});

const connection = mongoose.connection;

connection.on('connected', function(){
    console.log("MongoDB database connection established successfully");
});

jobRoutes.route('/').get(function(req,res){
    Job.find(function(err,jobs){
        if(err){console.log("error occured")}
        else{res.json(jobs)}
    });
});

jobRoutes.route('/:id').get(function(req,res){
    let id = req.params.id
    Job.findById(id,function(err,job){
        res.json(job);
    });
});

jobRoutes.route('/add').post(function(req,res){
    let job = new Job(req.body);
    job.save()
        .then(todo => {
            res.status(200).json({'job': 'job added successfully'})
        })
        .catch(err=>{
            res.status(400).send('adding new job failed');
        });
});

jobRoutes.route('/update/:id').post(function(req,res){
    Job.findById(req.params.id,function(err,job){
        if(!job)
        {
            res.status(404).send('data is not found')
        }
        else{
            job.job_description = req.body.job_description;
            job.job_responsible = req.body.job_responsible;
            job.job_priority = req.body.job_priority;
            job.job_completed = req.body.todo_completed;

            job.save().then(job=>{
                res.json('Job updated');
            })
            .catch(err=>{
                res.status(400).send("updated not possible")
            });
        }
    })
})

app.use('/jobs', jobRoutes);

app.listen(PORT, function(){
    console.log("Server is running on Port:" + PORT)
})

