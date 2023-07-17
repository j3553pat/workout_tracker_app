const express = require('express')
const caloriesController = require('../controllers/exercises')
const router = express.Router();

router.get("/", caloriesController.trackCalories);

router.get("/:id", caloriesController.getcaloriesByUserId);

router.post("/", caloriesController.createCalorieEntry);

router.put("/:id", caloriesController.updateCalorieEntry);

router.put("/:calorie_tdee_entry", caloriesController, caloriesController.deleteCalorieEntry)

module.exports = router;