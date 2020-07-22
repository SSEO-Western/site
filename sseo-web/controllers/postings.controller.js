const db = require("../models");
const Posting = db.posting;


// Create and Save a new posting
exports.create = (req, res) => {
     // Validate request
  if (!req.body.postingDescription) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Posting
  const posting = new Posting({
    postingDescription: req.body.postingDescription,
    postingType: req.body.postingType,
    postingPriority: req.body.postingPriority,
    postingCompleted: req.body.postingCompleted
  });

  // Save Tutorial in the database
  posting
    .save(posting)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Posting."
      });
    });
  
};

// Retrieve all postings
exports.findAll = (req, res) => {
    const postingDescription = req.query.postingDescription;
    var condition = postingDescription ? { postingDescription: { $regex: new RegExp(postingDescription), $options: "i" } } : {};
  
    Posting.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Find a single posting with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Posting.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found posting with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving posting with id=" + id });
      });
};

// Update a Posting by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Posting.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Posting with id=${id}`
            });
          } else res.send({ message: "Posting was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Posting with id=" + id
          });
        });
};

// Delete a Posting with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Posting.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete posting with id=${id}`
          });
        } else {
          res.send({
            message: "Posting was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete posting with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Posting.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Postings were deleted`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Postings."
      });
    });
};

// Find all published Tutorials
exports.findAllMedium = (req, res) => {
    Posting.find({ clubPriority: "Medium" })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}