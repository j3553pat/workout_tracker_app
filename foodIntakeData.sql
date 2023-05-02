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


