-- Mysql

CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  PRIMARY KEY (id)
);

INSERT INTO tasks (title, description) VALUES 
  ('task1', 'lo que sea'),
  ('task2', 'some description');

-- Postgresql

CREATE DATABASE tasksdb;

USE tasksdb;

CREATE TABLE tasks(
  id SERIAL NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  PRIMARY KEY (id)
);

INSERT INTO tasks (title, description) VALUES 
  ('task1', 'lo que sea'),
  ('task2', 'some description');
