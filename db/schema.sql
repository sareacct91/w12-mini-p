DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;
USE movie_db;

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  movie_name VARCHAR(100) NOT NULL
);

CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  movie_id INT NOT NULL,
  review TEXT NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES movies(id)
    ON DELETE CASCADE
);