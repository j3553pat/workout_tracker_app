const express = require('express')
const caloriesController = require('../controllers/calories')
const router = express.Router();

router.get("/", caloriesController.trackCalories);

router.get("/:id", caloriesController.getcaloriesByUserId);

router.post("/", caloriesController.createCalorieEntry);

router.put("/:id", caloriesController.updateCalorieEntry);

router.put("/:calorie_tdee_entry", caloriesController.deleteCalorieEntry)

module.exports = router;