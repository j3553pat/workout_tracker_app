const express = require('express')
const caloriesController = require('../controllers/calories')
const router = express.Router();

router.get("/trackingCalories", caloriesController.trackCalories);

router.get("/:id", caloriesController.getcaloriesByUserId);

router.post("/", caloriesController.createCalorieEntry);

router.put("/:id", caloriesController.updateCalorieEntry);

router.delete("/:id", caloriesController.deleteCalorieEntry)

module.exports = router;