const db = require('../model')

module.exports = {
    findAll: function(req,res){
        db.Hospital
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function(req,res){
        db.Hospital
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function(req,res){
        db.Hospital
            .findById(req.param.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: function(req,res){
        db.Hospital
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log('the update Hospital is not working in symptomscontroller.js error: ' + err));
    },
    remove: function(req,res){
        db.Hospital
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log('the remove Hospital is not working in symptomscontoller.js error' + err));
    }

}