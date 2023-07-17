const express = require('express')
const foodIntakeController = require('../controllers/foodIntake')
const router = express.Router();

router.get("/", foodIntakeController.trackFoodIntake);
router.get("/:id", foodIntakeController.getfoodIntakeById);
router.post("/", foodIntakeController.createfoodIntakeEntry);
router.delete("/:id", foodIntakeController.deleteFoodIntakeEntry);
router.put("/:food_entry", foodIntakeController.updateFoodIntake)

module.exports = router;