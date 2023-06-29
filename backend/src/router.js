const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const phoneControllers = require("./controllers/phoneControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/phones", phoneControllers.getAllPhones);

router.post("/phones", phoneControllers.addPhone);

module.exports = router;
