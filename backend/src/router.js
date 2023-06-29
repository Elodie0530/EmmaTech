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
router.get("/brands", phoneControllers.getBrands);
router.get("/models", phoneControllers.getModel);
router.get("/rams", phoneControllers.getRAMs);
router.get("/memories", phoneControllers.getMemories);
router.get("/colors", phoneControllers.getColors);
module.exports = router;
