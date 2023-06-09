const router = require("express").Router()
const logsController = require("../../controllers/healthlogContoller")


router.route("/")
       .get(logsController.findAll)
       .post(logsController.create);

router.route("/:id")
    .get(logsController.findById)
    .put(logsController.update)
    .delete(logsController.remove);

module.exports = router;