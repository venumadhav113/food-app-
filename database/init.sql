CREATE DATABASE IF NOT EXISTS fooddb;
USE fooddb;

CREATE TABLE menu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price INT
);

INSERT INTO menu (name, price) VALUES
('Pizza', 250),
('Burger', 120),
('Biryani', 300);
