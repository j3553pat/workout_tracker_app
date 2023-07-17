const router = require("express").Router();

const caloriesRouter = require("./calories");
const exercisesRouter = require("./exercises");
const foodIntakeRouter = require("./foodIntake");
const usersRouter = require("./users");

router.use("/calories", caloriesRouter);
router.use("/exercises", exercisesRouter);
router.use("/foodIntake", foodIntakeRouter);
router.use("/users", usersRouter);

module.exports = router;
