const router = require('express').Router()
const doctorController = require('../../controllers/doctorController')

router.route("/")
      .get(doctorController.findAll)
      .post(doctorController.create);

router.route("/:id")
      .get(doctorController.findById)
      .put(doctorController.update)
      .delete(doctorController.remove);

module.exports = router;