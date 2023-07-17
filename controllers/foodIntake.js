const mysql2 = require("mysql2");
const pool = require("../sql/connections");
const { handleSQLError } = require("../sql/error");

const trackFoodIntake = (req, res) => {
  pool.query("SELECT * FROM food_intake LIMIT 1000", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getfoodIntakeById = (req, res) => {
  let sql = "SELECT * FROM food_intake WHERE user_id = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const createfoodIntakeEntry = (req, res) => {
  let sql = "INSERT INTO food_intake (`food_entry`, `date_entry` VALUES (?,?)";

  sql = mysql.format(sql, [req.body.food_entry, req.body.date_entry]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

const updateFoodIntake = (req, res) => {
  let sql =
    "UPDATE food_intake SET `food_entry` = ?, `date_entry` = ? WHERE id = ? ";
  sql = mysql.format(sql, [food_entry, date_entry]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

const deleteFoodIntakeEntry = (req, res) => {
  let sql = "DELETE FROM food_intake WHERE food_entry = ?"
  sql = mysql.format(sql, [req.params.food_entry]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${results.affectedRows} entry` });
  });
}

module.exports = {
  trackFoodIntake,
  getfoodIntakeById,
  createfoodIntakeEntry,
  updateFoodIntake,
  deleteFoodIntakeEntry
};