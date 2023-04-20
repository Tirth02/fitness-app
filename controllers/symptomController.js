const db = require('../model')

module.exports = {
    findAll: function(req,res){
        db.SymptomJournal
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function(req,res){
        db.SymptomJournal
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function(req,res){
        db.SymptomJournal
            .findById(req.param.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: function(req,res){
        db.SymptomJournal
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log('the update symptomJournal is not working in symptomscontroller.js error: ' + err));
    },
    remove: function(req,res){
        db.SymptomJournal
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log('the remove symptomJournal is not working in symptomscontoller.js error' + err));
    }

}