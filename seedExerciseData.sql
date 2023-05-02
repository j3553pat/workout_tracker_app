 DROP TABLE IF EXISTS exercises;

CREATE TABLE exercises (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    exercise_entry VARCHAR(350),
    min INT,
    exercise_sets INT,
    exercise_reps INT
);

INSERT INTO exercises 
(user_id, exercise_entry, min, exercise_sets, exercise_reps)

VALUES 
(2,"tricep pulldowns", 8, 4, 12),
(2, "close-grip benchpress", 12, 5, 15),
(2, "bicep curls", 10, 4, 12),
(2, "spider curls", 10, 4, 12);