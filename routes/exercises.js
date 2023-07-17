const express = require('express')
const exerciseController = require('../controllers/exercises')
const router = express.Router();

router.get("/list", exerciseController.trackExercises);

router.get("/:id", exerciseController.getExercisesById);

router.post("/", exerciseController.addExercise);

router.delete("/:id", exerciseController.deleteExercise);

router.put("/:exercise_entry", exerciseController.updateExerciseEntry)

module.exports = router;