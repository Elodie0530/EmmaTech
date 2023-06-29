create table `categoryPrice` (
id int(11) unsigned primary key not null AUTO_INCREMENT,
category varchar(80) not null unique,
min_values int(11) not null,
max_values int(11) not null
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO categoryPrice (category, min_values, max_values) VALUES 
("HC", 0, 0 ), 
("C", 90, 165),
("B", 165, 255),
("A", 255, 375),
("Premium", 375, 1500);   

create table `state_phone` (
id int(11) unsigned primary key not null AUTO_INCREMENT,
state varchar(80) not null unique

)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO state_phone (state) VALUES 
("DEEE"),
 ("Réparable"), 
 ("Bloqué"), 
 ("Reconditionnable"), 
 ("Reconditionner");

create table `phone` (
  id int(11) unsigned primary key not null AUTO_INCREMENT,
  brand varchar(80) not null,
  model varchar(80) not null,
  os varchar(80) not null,
  ram varchar(80) not null,
  memory varchar(80) not null,
  color varchar(80) not null,
  charger boolean not null,
  cable boolean not null,

categoryPrice_id int unsigned not null,
  CONSTRAINT fk_category_id
  FOREIGN KEY (categoryPrice_id)
  REFERENCES categoryPrice(id),

state_id int unsigned not null,
  CONSTRAINT fk_state_id
  FOREIGN KEY (state_id)
  REFERENCES state_phone(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO phone (brand, model, os, ram, memory, color, charger, cable, categoryPrice_id, state_id) VALUES 
("samsung", "galaxy 5", "android", "2 Go", "16 Go", "bleu", true, false, 1, 3),
("apple", "iPhone 12", "iOS", "16 Go", "64 Go", "gris", true, true, 5, 4),
("nokia", " G 11", "android", "4 GB", "32 GB", "blanc glacé", true, true, 3, 4),
("google", "pixel 3", "android", "4 Go", "128 Go", "rose", false, false, 2, 1),
("samsung", "galaxy S21", "android", "6 Go", "128 Go", "noir", true, false, 2, 4),
("samsung", "galaxy A54 ", "android", "8 Go", "128 Go", "noir", true, true, 5, 4),
("apple", "iPhone 6", "iOS", "16 Go", "32 Go", "noir", true, true, 5, 4);