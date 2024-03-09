const express = require("express");

const animalController = require("../controller/animalController");

const router = express.Router();

router.post("/addAnimal", animalController.addAnimal);
router.post("/getAnimal", animalController.getAnimal);
router.post("/getAnimals", animalController.getAnimals);

router.post("/addProduct", animalController.addProduct);
router.post("/getProducts", animalController.getProducts);
router.post("/addVaccination", animalController.vaccinateAnimal);
router.post("/addBreeding", animalController.addBreedingInfo);

module.exports = router;
