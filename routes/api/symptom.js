const router = require('express').Router()
const symptomsController = require('../../controllers/symptomController');

router.route("/")
      .get(symptomsController.findAll)
      .post(symptomsController.create);

router.route("/:id")
       .get(symptomsController.findById)
       .put(symptomsController.update)
       .delete(symptomsController.remove);

module.exports = router;