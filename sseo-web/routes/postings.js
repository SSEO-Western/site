const express = require('express');
const router = express.Router();

// Load code model
const Posting = require('../models/Postings');


router.route('/').get(function(req,res){
    Job.find(function(err,jobs){
        if(err){console.log("error occured")}
        else{res.json(jobs)}
    });
});

router.route('/:id').get(function(req,res){
    let id = req.params.id
    Job.findById(id,function(err,job){
        res.json(job);
    });
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

router.route('/update/:id').post(function(req,res){
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
module.exports = router;