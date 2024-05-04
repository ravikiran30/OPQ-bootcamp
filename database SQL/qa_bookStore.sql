CREATE DATABASE qa_bookStore;
USE qa_bookStore;
DROP DATABASE qa_bookstore;
CREATE TABLE Customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(10) UNIQUE NOT NULL
);

CREATE TABLE books (
  book_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author_id INT NOT NULL,
  publisher_id INT NOT NULL,
  publication_date DATE NOT NULL,
  genre_id INT NOT NULL,
  price DECIMAL(6, 2) NOT NULL
);
ALTER TABLE books
ADD FOREIGN KEY (author_id) REFERENCES authors(author_id);
ALTER TABLE books
ADD FOREIGN KEY (publisher_id) REFERENCES publisher(publisher_id);
ALTER TABLE books
ADD FOREIGN KEY (genre_id) REFERENCES Genres(genre_id);


CREATE TABLE authors (
  author_id INT AUTO_INCREMENT PRIMARY KEY,
  author_name VARCHAR(255) NOT NULL
);

CREATE TABLE Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    total_amount DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);
CREATE TABLE Genres (
    genre_id INT  AUTO_INCREMENT PRIMARY KEY,
    genre_name VARCHAR(100)
);

CREATE TABLE BookGenres (
    book_id INT,
    genre_id INT,
    FOREIGN KEY (book_id) REFERENCES books(book_id),
    FOREIGN KEY (genre_id) REFERENCES Genres(genre_id)
);
CREATE TABLE transactions (
  transaction_id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  payment_amount DECIMAL(8, 2) NOT NULL,
  payment_date DATE NOT NULL,
  payment_method VARCHAR(100) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

CREATE TABLE inventory (
	book_id INT,
    quantity INT NOT NULL,
	FOREIGN KEY (book_id) REFERENCES books(book_id)
);

CREATE TABLE publisher (
	publisher_id INT AUTO_INCREMENT PRIMARY KEY,
    publisher_name VARCHAR(100) NOT NULL
);


-- Insertion 
SELECT * FROM Customers;
INSERT INTO Customers VALUES (DEFAULT,"ravi","ravi@gmail.com",1234567890);
INSERT INTO Customers VALUES (DEFAULT,"rakesh","rakesh@gmail.com",2568967890);
INSERT INTO Customers VALUES (DEFAULT,"akash","akash@gmail.com",5689567890);
INSERT INTO Customers VALUES (DEFAULT,"kumar","kumar@gmail.com",3654967890);
INSERT INTO Customers VALUES (DEFAULT,"sanjay","sanjay@gmail.com",4568767890);

SELECT * FROM authors;
INSERT INTO authors VALUES(DEFAULT,"RK Narayan");
INSERT INTO authors VALUES(DEFAULT,"Amit");
INSERT INTO authors VALUES(DEFAULT,"Ramdev");
INSERT INTO authors VALUES(DEFAULT,"Arun");

SELECT *FROM Genres;
INSERT INTO Genres VALUES(DEFAULT,"Travel");
INSERT INTO Genres VALUES(DEFAULT,"Drama");
INSERT INTO Genres VALUES(DEFAULT,"Horror");


SELECT * FROM publisher;
INSERT INTO publisher VALUES(DEFAULT,"APK publication");
INSERT INTO publisher VALUES(DEFAULT,"Rupa publication");
INSERT INTO publisher VALUES(DEFAULT,"Mysore publication");


SELECT * FROM books;
INSERT INTO books VALUES(DEFAULT,"The Guide",1,3,"2019-10-01",1,205);
INSERT INTO books VALUES(DEFAULT,"Ghosts in the silent hills",2,2,"2021-09-01",3,399);
INSERT INTO books VALUES(DEFAULT,"God of small Things",3,3,"2010-03-11",2,599);
INSERT INTO books VALUES(DEFAULT,"That Night",4,1,"2015-06-25",3,699);


SELECT * FROM BookGenres;
INSERT INTO BookGenres VALUES(1,1);
INSERT INTO BookGenres VALUES(2,3);
INSERT INTO BookGenres VALUES(3,2);
INSERT INTO BookGenres VALUES(4,3);


SELECT * FROM inventory;
INSERT INTO inventory VALUES(1,12);
INSERT INTO inventory VALUES(3,5);


SELECT * FROM Orders;
INSERT INTO Orders VALUES(DEFAULT,2,"2024-01-30",710);
INSERT INTO Orders VALUES(DEFAULT,3,"2024-02-15",650);
INSERT INTO Orders VALUES(DEFAULT,1,"2024-03-25",500);
INSERT INTO Orders VALUES(DEFAULT,2,"2024-02-20",300);
INSERT INTO Orders VALUES(DEFAULT,4,"2024-02-20",450);
INSERT INTO Orders VALUES(DEFAULT,5,"2024-03-30",520);
INSERT INTO Orders VALUES(DEFAULT,5,"2024-04-15",420);


SELECT * FROM transactions;
-- DELETE FROM transactions where transaction_id=2;
INSERT INTO transactions VALUES(DEFAULT,1,710,"2024-01-30","cash");
INSERT INTO transactions VALUES(DEFAULT,2,650,"2024-02-15","gpay");
INSERT INTO transactions VALUES(DEFAULT,3,500,"2024-03-25","gpay");
INSERT INTO transactions VALUES(DEFAULT,4,300,"2024-02-20","cash");
INSERT INTO transactions VALUES(DEFAULT,5,450,"2024-02-20","gpay");
INSERT INTO transactions VALUES(DEFAULT,6,520,"2024-03-30","cash");


-- customer names who paid the amount through gpay
SELECT C.customer_name
FROM Customers C 
JOIN Orders O
ON C.customer_id=O.customer_id
JOIN transactions T
ON O.order_id=T.order_id
WHERE T.payment_method="gpay";

-- customer names who ordered less than amount 500 
SELECT C.customer_name
FROM Customers C
LEFT JOIN orders O
ON C.customer_id=O.customer_id
WHERE O.total_amount<500;













