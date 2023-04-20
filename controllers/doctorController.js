const db = require('../model')

module.exports = {
    findAll: function(req,res){
        db.Doctor
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
    },
    create: function(req,res){
        db.Doctor
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
    },
    findById: function(req,res){
        db.Doctor   
          .findById(req.param.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
    },
    update: function(req,res){
        db.Doctor
          .findOneAndUpdate({_id: req.params.id}, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
    },
    remove: function(req,res){
        db.Doctor
        .findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}