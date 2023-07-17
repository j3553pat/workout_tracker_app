const mysql2 = require("mysql2");
const pool = require("../sql/connections");
const { handleSQLError } = require("../sql/error");

const trackCalories = (req, res) => {
  pool.query("SELECT * FROM calories LIMIT 1000", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getcaloriesByUserId = (req, res) => {
  let sql = "SELECT * FROM calories WHERE user_id = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const createCalorieEntry = (req, res) => {
  let sql = "INSERT INTO calories (`calorie_tdee_entry`, `calories_burned_entry`, `calories_gained_entry`, `net_calorie_entry`) VALUES (?,?,?,?)";

  sql = mysql.format(sql, [req.body.calorie_tdee_entry, req.body.calories_burned_entry, req.body.calories_gained_entry, req.body.net_calorie_entry]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

const updateCalorieEntry = (req, res) => {
  let sql =
    "UPDATE calories SET `calorie_tdee_entry` = ?, `calories_burned_entry` = ?, `calories_gained_entry` = ?, `net_calorie_entry` = ? WHERE id = ? ";
  sql = mysql.format(sql, [calorie_tdee_entry, calories_burned_entry, calories_gained_entry, net_calorie_entry]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

const deleteCalorieEntry = (req, res) => {
  let sql = "DELETE FROM calories WHERE calorie_tdee_entry = ?"
  sql = mysql.format(sql, [req.params.calorie_tdee_entry]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  });
}

module.exports = {
  trackCalories,
  getcaloriesByUserId,
  createCalorieEntry,
  updateCalorieEntry,
  deleteCalorieEntry
};