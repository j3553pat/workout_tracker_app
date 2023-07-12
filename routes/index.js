const router = require("express").Router();

const employeesRouter = require("./employees");
const departmentsRouter = require("./departments");
const salariesRouter = require("./salaries");
const titlesRouter = require("./titles");

router.use("/employees", employeesRouter);
router.use("/departments", departmentsRouter);
router.use("/salaries", salariesRouter);
router.use("/titles", titlesRouter);

module.exports = router;