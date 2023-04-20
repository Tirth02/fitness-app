const router = require('express').Router()
const hospitalsController = require('../../controllers/hospitalController');

router.route("/")
      .get(hospitalsController.findAll)
      .post(hospitalsController.create);

router.route("/:id")
       .get(hospitalsController.findById)
       .put(hospitalsController.update)
       .delete(hospitalsController.remove);

module.exports = router;