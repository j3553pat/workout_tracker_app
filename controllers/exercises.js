const mysql = require("mysql2");
const pool = require("../sql/connections");
const { handleSQLError } = require("../sql/error");

const trackExercises = (req, res) => {
  pool.query("SELECT * FROM exercises LIMIT 1000", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getExercisesById = (req, res) => {
  let sql = "SELECT * FROM exercises WHERE user_id = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const addExercise = (req, res) => {
  let sql = "INSERT INTO exercises (`exercise_entry`, `min`, `exercise_sets`, `exercise_reps`) VALUES (?,?,?,?)";

  sql = mysql.format(sql, [req.body.exercise_entry, req.body.min, req.body.exercise_sets, req.body.exercise_reps]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

const updateExerciseEntry = (req, res) => {
  let sql =
    "UPDATE exercises SET `exercise_entry` = ?, `min` = ?, `exercise_sets` = ?, `exercise_reps` = ? WHERE id = ? ";
  sql = mysql.format(sql, [req.body.exercise_entry, req.body.min, req.body.exercise_sets, req.body.exercise_reps]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

const deleteExercise = (req, res) => {
  let sql = "DELETE FROM exercises WHERE exercise_entry = ?"
  sql = mysql.format(sql, [req.params.exercise_entry]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  });
}

module.exports = {
  trackExercises,
  getExercisesById,
  addExercise,
  updateExerciseEntry,
  deleteExercise
};