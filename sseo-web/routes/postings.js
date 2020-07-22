module.exports= app => {
    const postings = require("../controllers/postings.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", postings.create);
  
    // Retrieve all Tutorials
    router.get("/", postings.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", postings.findAllMedium);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", postings.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", postings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", postings.delete);
  
    // Create a new Tutorial
    router.delete("/", postings.deleteAll);
  
    app.use('/api/postings', router);
  };