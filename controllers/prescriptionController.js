const db = require('../model')

module.exports = {
    findAll: function(req,res){
        db.Prescription
           .find(req.query)
           .then(dbModel => res.json(dbModel))
           .catch(err => res.status(422).json(err))
    },
    create: function(req,res){
        db.Prescription
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
    },
    findById: function(req,res){
        db.Prescription
           .findById(req.param.id)
           .then(dbModel => res.json(dbModel))
           .catch(err => res.status(422).json(err))
    },
    update: function(req,res){
        db.Prescription
          .findOneAndUpdate({_id: req.param.id},req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
    },
    remove: function(req,res)
    {
        db.Prescription
          .findById({_id: req.param.id})
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
    }

}