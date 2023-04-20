const router = require('express').Router()
const prescriptionController = require('../../controllers/prescriptionController')

router.route("/")
       .get(prescriptionController.findAll)
       .post(prescriptionController.create);

router.route("/:id")
        .get(prescriptionController.findById)
        .put(prescriptionController.update)
        .delete(prescriptionController.remove);
    
module.exports = router;