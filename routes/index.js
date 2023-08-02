const router = require("express").Router();

const caloriesRouter = require("./calories");
const exercisesRouter = require("./exercises");
const foodIntakeRouter = require("./foodIntake");
const usersRouter = require("./users");
const authRouter = require("./auth");

router.use("/calories", caloriesRouter);
router.use("/exercises", exercisesRouter);
router.use("/foodIntake", foodIntakeRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);

module.exports = router;
