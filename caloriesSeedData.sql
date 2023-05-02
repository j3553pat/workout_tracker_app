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