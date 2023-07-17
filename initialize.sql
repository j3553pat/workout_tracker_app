DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50),
  WT INT
);

INSERT INTO users
	(first_name, last_name, email, WT)

VALUES 
  ("James","Diggs","jdiggs@gmail.com", 254),
  ("Bob","Morgan","bmorgan@gmail.com", 204),
  ("Grace","Anderson","sbuck@gmail.com", 180),
  ("Tracy","Hernandez", "Tr4cyhdz@yahoo.com", 192);


DROP TABLE IF EXISTS calories;

CREATE TABLE calories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    calorie_tdee_entry INT,
    calories_burned_entry INT,
    calories_gained_entry INT,
    net_calorie_entry INT
);

INSERT INTO calories 
(user_id, calorie_tdee_entry, calories_burned_entry, calories_gained_entry, net_calorie_entry)

VALUES
(2, 2040, 650, 1800, 890),
(1, 2540, 720, 2000, 1260),
(3, 1800, 450, 1900, 350),
(4, 1920, 540, 1500, 960);

DROP TABLE IF EXISTS food_intake;
CREATE TABLE food_intake (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        USER_ID INT,
        FOREIGN KEY (user_id) REFERENCES users(id),
        food_entry VARCHAR(350),
        date_entry DATETIME
);

INSERT INTO food_intake 
(user_id, food_entry, date_entry)

VALUES 
(2, "Spaghetti", NOW()),
(2, "Hamburger & Fries", NOW()),
(2, "Ceaser Salad", NOW()),
(1, "Oat Milk", NOW());


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