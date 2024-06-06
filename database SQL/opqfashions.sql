CREATE DATABASE opqfashions;
USE opqfashions;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(10) UNIQUE NOT NULL,
    pass varchar(255) UNIQUE NOT NULL
);
SELECT * FROM users;
INSERT INTO users VALUES (DEFAULT,"ravi","ravi@gmail.com",1234567890,'Ravi@123');
INSERT INTO users VALUES (DEFAULT,"rakesh","rakesh@gmail.com",2568967890,'Rakesh@123');
INSERT INTO users VALUES (DEFAULT,"akash","akash@gmail.com",5689567890,'akash@123');
