const mysql2 = require("mysql2");
const pool = require("../sql/connections");
const { handleSQLError } = require("../sql/error");

const trackExercises = (req, res) => {
  pool.query("SELECT * FROM exercises LIMIT 1000", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  trackExercises,
};