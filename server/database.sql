CREATE DATABASE perntodo;

CREATE TABLE health_todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE technical_todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE communication_todo (
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL
);


CREATE TABLE presentation_todo (
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL
);


CREATE TABLE physical_todo (
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL
);
