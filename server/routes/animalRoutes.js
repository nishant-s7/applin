const express = require("express");

const animalController = require("../controller/animalController");

const router = express.Router();

router.post("/addAnimal", animalController.addAnimal);
router.post("/getAnimal", animalController.getAnimal);
router.get("/getAnimals", animalController.getAnimals);

router.post("/addProduct", animalController.addProduct);

module.exports = router;
