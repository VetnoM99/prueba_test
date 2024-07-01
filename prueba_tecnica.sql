drop database if exists db_prueba_tecnica;
create database if not exists db_prueba_tecnica;
use db_prueba_tecnica;
drop table if exists Articles;
create table Articles(
id int unsigned primary key not null auto_increment,
titular char(90),
contenido char(30)
);

INSERT INTO  Aricles (titular, contenido) VALUES 
('María', 'Gol de Argenina'),
('Juan', 'Mantener el entusiasmo'),
('Ana', 'no puedo perder'),
('Pedro', 'Herencia de los padres'),
('Laura', 'Lo se no tiene sentido');

