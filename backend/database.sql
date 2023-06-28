create table `categoryPrice` (
id int(11) unsigned primary key not null AUTO_INCREMENT,
category varchar(80) not null unique
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO categoryPrice (category) VALUES 
("HC"), 
("C"),
("B"),
("A"),
("Premium");   

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

INSERT INTO phone (brand, model, ram, memory, color, charger, cable, categoryPrice_id, state_id) VALUES 
("samsung", "galaxy 5", "2 Go", "16 Go", "bleu", true, false, 1, 3);

