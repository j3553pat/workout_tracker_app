DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50),
  WT INT,
);

INSERT INTO users
	(first_name, last_name, email, WT)

VALUES 
  ("James","Diggs","jdiggs@gmail.com", 254),
  ("Bob","Morgan","bmorgan@gmail.com", 204),
  ("Grace","Anderson","sbuck@gmail.com", 180),
  ("Tracy","Hernandez", "Tr4cyhdz@yahoo.com", 192);
