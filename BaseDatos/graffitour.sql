/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : graffitour

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-06-21 21:25:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cargo
-- ----------------------------
DROP TABLE IF EXISTS `cargo`;
CREATE TABLE `cargo` (
  `idCargo` int(11) NOT NULL AUTO_INCREMENT,
  `Nombrecargo` varchar(45) DEFAULT NULL,
  `Estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idCargo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cargo
-- ----------------------------

-- ----------------------------
-- Table structure for categoria
-- ----------------------------
DROP TABLE IF EXISTS `categoria`;
CREATE TABLE `categoria` (
  `IdCategoria` int(11) NOT NULL AUTO_INCREMENT,
  `NombreCategoria` varchar(50) NOT NULL,
  `Estado` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`IdCategoria`),
  UNIQUE KEY `NombreCategoria` (`NombreCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of categoria
-- ----------------------------
INSERT INTO `categoria` VALUES ('1', 'andres', '');
INSERT INTO `categoria` VALUES ('2', 'felipe', '');
INSERT INTO `categoria` VALUES ('5', 'andres2', '');
INSERT INTO `categoria` VALUES ('6', 'canop', '');
INSERT INTO `categoria` VALUES ('7', 'maria', '');
INSERT INTO `categoria` VALUES ('8', 'jhon', '');
INSERT INTO `categoria` VALUES ('9', 'capi', '');
INSERT INTO `categoria` VALUES ('10', 'sona', '');
INSERT INTO `categoria` VALUES ('11', 'janna', '');
INSERT INTO `categoria` VALUES ('12', 'algo', '\0');

-- ----------------------------
-- Table structure for noticias
-- ----------------------------
DROP TABLE IF EXISTS `noticias`;
CREATE TABLE `noticias` (
  `IdNoticias` int(11) NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(50) NOT NULL,
  `Descripcion` varchar(200) NOT NULL,
  `ImagenUrl` varchar(200) NOT NULL,
  `VideoUrl` varchar(200) NOT NULL,
  `Estado` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`IdNoticias`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of noticias
-- ----------------------------
INSERT INTO `noticias` VALUES ('2', 'hola', 'dsfm', '', '', '1');
INSERT INTO `noticias` VALUES ('3', 'hola mundo', 'cosa', 'dfsdfsd.jpg', 'https://www.youtube.com/watch?v=Hndv7JC2iD8', '1');
INSERT INTO `noticias` VALUES ('4', 'spe', 'bla bla bla', 'asistente/img/Noticas/skin.png', 'https://www.youtube.com/watch?v=FnmJKGASkrA', '1');
INSERT INTO `noticias` VALUES ('5', 'andres', 'dfsdfsdf', 'asistente/img/Noticas/serie.jpg', 'https://www.youtube.com/watch?v=QpnUD3MJLYo&index=3&list=WL', '1');
INSERT INTO `noticias` VALUES ('6', 'vaca', 'dfsdfsdf', 'asistente/img/Noticas/anime-republic-tallon4-57.jpg', 'https://www.youtube.com/watch?v=-XBHLJZ55B4', '1');
INSERT INTO `noticias` VALUES ('7', 'vaca', 'dfsdfsdf', 'asistente/img/Noticas/anime-republic-tallon4-57.jpg', 'https://www.youtube.com/watch?v=-XBHLJZ55B4', '1');
INSERT INTO `noticias` VALUES ('8', 'perro', 'zdfsdfsd', 'asistente/img/Noticas/palette5747b6f397808.png', 'https://www.youtube.com/watch?v=-XBHLJZ55B4', '1');
INSERT INTO `noticias` VALUES ('9', 'gato', 'sfdsdf', 'asistente/img/Noticas/palette5747b6a53fc46.png', 'https://www.youtube.com/watch?v=-XBHLJZ55B4', '1');
INSERT INTO `noticias` VALUES ('10', 'mujer hermosa', 'fdgsdfds', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'http://animeid.io/Ver/49009/sousei-no-onmyouji-2016/episodio-9/', '1');
INSERT INTO `noticias` VALUES ('11', 'gh', 'https://www.youtube.com/watch?v=JJkpQ9IPcBQ', 'asistente/img/Noticas/palette5747b6f397808.png', 'https://www.youtube.com/watch?v=JJkpQ9IPcBQ', '1');
INSERT INTO `noticias` VALUES ('12', 'fgdg', 'LastInsertId', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'DFGDF', '1');
INSERT INTO `noticias` VALUES ('13', 'last', 'last', 'asistente/img/Noticas/palette5747b6a53fc46.png', 'last', '1');
INSERT INTO `noticias` VALUES ('14', 'last2', 'last2', 'asistente/img/Noticas/palette5747b6a53fc46.png', 'last2', '1');
INSERT INTO `noticias` VALUES ('15', 'last3', 'last3', 'asistente/img/Noticas/palette5747b6a53fc46.png', 'last3', '1');
INSERT INTO `noticias` VALUES ('16', 'last4', 'last4', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'last4', '1');
INSERT INTO `noticias` VALUES ('17', 'last5', 'last5', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'last5', '1');
INSERT INTO `noticias` VALUES ('18', 'last5', 'last5', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'last5', '1');
INSERT INTO `noticias` VALUES ('19', 'last6', 'last6', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'last6', '1');
INSERT INTO `noticias` VALUES ('20', 'last7', 'last7', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'last7', '1');
INSERT INTO `noticias` VALUES ('21', 'last8', 'last8', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'last8', '1');
INSERT INTO `noticias` VALUES ('22', 'last8', 'last8', 'asistente/img/Noticas/palette5747b6f397808.png', 'last8', '1');

-- ----------------------------
-- Table structure for ofertas
-- ----------------------------
DROP TABLE IF EXISTS `ofertas`;
CREATE TABLE `ofertas` (
  `IDOFERTAS` int(11) NOT NULL AUTO_INCREMENT,
  `FECHAINGRESO` date NOT NULL,
  `FECHAFINAL` date DEFAULT NULL,
  PRIMARY KEY (`IDOFERTAS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ofertas
-- ----------------------------

-- ----------------------------
-- Table structure for ofertas_has_productos
-- ----------------------------
DROP TABLE IF EXISTS `ofertas_has_productos`;
CREATE TABLE `ofertas_has_productos` (
  `OFERTAS_IDOFERTAS` int(11) NOT NULL,
  `PRODUCTOS_IDPRODUCTOS` int(11) NOT NULL,
  `PRODUCTOS_OFERTAS_IDOFERTAS` int(11) NOT NULL,
  `valor` int(11) DEFAULT NULL,
  KEY `fk_OFERTAS_has_PRODUCTOS_PRODUCTOS1_idx` (`PRODUCTOS_IDPRODUCTOS`,`PRODUCTOS_OFERTAS_IDOFERTAS`),
  KEY `fk_OFERTAS_has_PRODUCTOS_OFERTAS1_idx` (`OFERTAS_IDOFERTAS`),
  CONSTRAINT `fk_OFERTAS_has_PRODUCTOS_OFERTAS1` FOREIGN KEY (`OFERTAS_IDOFERTAS`) REFERENCES `ofertas` (`IDOFERTAS`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_OFERTAS_has_PRODUCTOS_PRODUCTOS1` FOREIGN KEY (`PRODUCTOS_IDPRODUCTOS`) REFERENCES `productos` (`IDPRODUCTOS`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ofertas_has_productos
-- ----------------------------

-- ----------------------------
-- Table structure for persona
-- ----------------------------
DROP TABLE IF EXISTS `persona`;
CREATE TABLE `persona` (
  `IDUSUARIOS` int(11) NOT NULL AUTO_INCREMENT,
  `PRIMER_NOMBRE` varchar(45) NOT NULL,
  `SEGUNDO_NOMBRE` varchar(45) NOT NULL,
  `PRIMER_APELLIDO` varchar(45) NOT NULL,
  `SegundoApellido` varchar(45) DEFAULT NULL,
  `NUMERO_CONTACTO` int(11) NOT NULL,
  `EDAD` int(11) NOT NULL,
  `NumeroIdentificacion` varchar(50) NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `Estado` bit(1) DEFAULT b'1',
  `Constrasena` varchar(200) NOT NULL,
  PRIMARY KEY (`IDUSUARIOS`),
  UNIQUE KEY `NUMERO_IDENTIFICACIÓN_UNIQUE` (`NumeroIdentificacion`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of persona
-- ----------------------------
INSERT INTO `persona` VALUES ('1', 'andres', 'felipe ', 'cano ', 'piedrahita', '4969181', '18', '1036650331', '2016-04-15', '\0', '1036650331');
INSERT INTO `persona` VALUES ('2', 'megaman', 'zero', 'x', 'axl', '1234', '33', '123456789', '2016-04-01', '\0', '123456789');
INSERT INTO `persona` VALUES ('3', 'cristian', 'david', 'cosa', 'fea', '12345', '19', '987654321', '2016-04-07', '\0', '987654321');
INSERT INTO `persona` VALUES ('5', 'naruto', 'naruto', 'uzumaki', '0', '1234567', '22', '1234567', '1933-11-25', '', '1234567');
INSERT INTO `persona` VALUES ('6', 'z', 'z', 'z', 'z', '1', '1', '12', '2016-04-01', '', '123');
INSERT INTO `persona` VALUES ('7', 'y', 'y', 'y', 'y', '18', '15', '999', '2016-04-30', '', '999');
INSERT INTO `persona` VALUES ('8', 'alejandro', 'alejo', 'lopez', 'lopez', '18', '2147483647', '1036650333', '2016-05-07', '', '123');
INSERT INTO `persona` VALUES ('14', 'THOR ', 'THOR ', 'THOR ', 'THOR ', '22', '15', '15', '2016-06-18', '', 'cab3eeb9139e0c5d27bc51a426f8ae2b');
INSERT INTO `persona` VALUES ('15', 'samsumg', 'samsumg', 'samsumg', 'samsumg', '22', '222', '225641', '2016-06-11', '', 'e3ca0449fa2ea7701a7ac53fb719c51a');
INSERT INTO `persona` VALUES ('16', 'samsumg2', 'samsumg2', 'samsumg2', 'samsumg2', '22', '2', '22', '0000-00-00', '', '9fbf9bca5b1972bd7f4c2ed2c90217cc');
INSERT INTO `persona` VALUES ('18', 'yo', 'yo', 'yo', 'yo', '18', '1', '1', '2016-06-11', '', '6d0007e52f7afb7d5a0650b0ffb8a4d1');

-- ----------------------------
-- Table structure for persona_has_cargo
-- ----------------------------
DROP TABLE IF EXISTS `persona_has_cargo`;
CREATE TABLE `persona_has_cargo` (
  `Persona_IDUSUARIOS` int(11) NOT NULL,
  `Cargo_idCargo` int(11) NOT NULL,
  KEY `fk_Persona_has_Cargo_Cargo1_idx` (`Cargo_idCargo`),
  KEY `fk_Persona_has_Cargo_Persona1_idx` (`Persona_IDUSUARIOS`),
  CONSTRAINT `fk_Persona_has_Cargo_Cargo1` FOREIGN KEY (`Cargo_idCargo`) REFERENCES `cargo` (`idCargo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Persona_has_Cargo_Persona1` FOREIGN KEY (`Persona_IDUSUARIOS`) REFERENCES `persona` (`IDUSUARIOS`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of persona_has_cargo
-- ----------------------------

-- ----------------------------
-- Table structure for persona_has_tour
-- ----------------------------
DROP TABLE IF EXISTS `persona_has_tour`;
CREATE TABLE `persona_has_tour` (
  `Persona_IDUSUARIOS` int(11) NOT NULL,
  `TOUR_IDTOUR` int(11) NOT NULL,
  KEY `fk_Persona_has_TOUR_TOUR1_idx` (`TOUR_IDTOUR`),
  KEY `fk_Persona_has_TOUR_Persona1_idx` (`Persona_IDUSUARIOS`),
  CONSTRAINT `fk_Persona_has_TOUR_Persona1` FOREIGN KEY (`Persona_IDUSUARIOS`) REFERENCES `persona` (`IDUSUARIOS`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Persona_has_TOUR_TOUR1` FOREIGN KEY (`TOUR_IDTOUR`) REFERENCES `tour` (`IDTOUR`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of persona_has_tour
-- ----------------------------

-- ----------------------------
-- Table structure for productos
-- ----------------------------
DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `IDPRODUCTOS` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBREPRODUCTO` varchar(45) NOT NULL,
  `DESCRIPCION` text NOT NULL,
  `IMAGEN` varchar(250) NOT NULL,
  `ESTADO` bit(1) NOT NULL DEFAULT b'1',
  `Color` varchar(45) DEFAULT NULL,
  `Marca` varchar(45) DEFAULT NULL,
  `Precio` float NOT NULL,
  `IDCATEGORIA` int(11) NOT NULL,
  PRIMARY KEY (`IDPRODUCTOS`),
  UNIQUE KEY `NOMBREPRODUCTO_UNIQUE` (`NOMBREPRODUCTO`),
  KEY `fk_productos_categoria1_idx` (`IDCATEGORIA`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`IDCATEGORIA`) REFERENCES `categoria` (`IdCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of productos
-- ----------------------------
INSERT INTO `productos` VALUES ('1', 'mekato', 'papitas de limon', 'asistente/img/Noticas/dsafrsd.jpg', '', 'verde', 'frito leit', '500', '1');
INSERT INTO `productos` VALUES ('2', 'arpas', 'arpas', 'asistente/img/Noticas/IMG_20160605_152703.jpg', '', 'arpas', 'arpas', '25000', '7');
INSERT INTO `productos` VALUES ('3', 'algo', 'dfsdf', 'asistente/img/Noticas/palette5747b6d5a83e7.png', '', 'algo', 'algo', '12158', '8');
INSERT INTO `productos` VALUES ('4', 'algo2 ', 'algo2 ', 'asistente/img/Noticas/palette5747b6d5a83e7.png', '', 'algo2 ', 'xx', '12', '6');
INSERT INTO `productos` VALUES ('5', 'algo3', '545846546', 'asistente/img/Noticas/palette5747b6f397808.png', '', 'algo3', 'algo3', '15451', '5');
INSERT INTO `productos` VALUES ('6', 'algo4', '5216546dsfsdfsd', 'asistente/img/Noticas/palette5747b6d5a83e7.png', '', 'algo4', 'algo4', '15459', '7');
INSERT INTO `productos` VALUES ('7', 'algo5', 'algo5', 'asistente/img/Noticas/palette5747b6d5a83e7.png', '', 'algo5', 'algo5', '515489', '8');
INSERT INTO `productos` VALUES ('8', 'algo6', 'algo6', 'asistente/img/Noticas/palette5747b6a53fc46.png', '', 'algo6', 'algo6', '165446', '8');
INSERT INTO `productos` VALUES ('9', 'algo8', 'algo8', 'asistente/img/Noticas/palette5747b6a53fc46.png', '', 'algo8', 'algo8', '51564', '8');
INSERT INTO `productos` VALUES ('10', 'algo9', 'algo9', 'asistente/img/Noticas/palette5747b6f397808.png', '', 'algo9', 'algo9', '541964', '2');
INSERT INTO `productos` VALUES ('11', 'algo10', 'asds', 'asistente/img/Noticas/palette5747b6d5a83e7.png', '', 'algo10', 'algo10', '5000', '5');
INSERT INTO `productos` VALUES ('12', 'algo11', 'algo11', 'asistente/img/Noticas/palette5747b6a53fc46.png', '', 'algo11', 'algo11', '1454', '8');
INSERT INTO `productos` VALUES ('13', 'algo12', 'algo12', 'asistente/img/Noticas/palette5747b6d5a83e7.png', '', 'algo12', 'algo12', '485', '8');
INSERT INTO `productos` VALUES ('14', 'algo13', 'algo13', 'asistente/img/Noticas/palette5747b6a53fc46.png', '', 'algo13', 'algo13', '50000', '8');
INSERT INTO `productos` VALUES ('15', 'Eagleheart ', 'Eagleheart ', 'asistente/img/Noticas/palette5747b6d5a83e7.png', '', 'Eagleheart ', 'Eagleheart ', '554', '8');
INSERT INTO `productos` VALUES ('16', 'algo14', 'algo14', 'asistente/img/Noticas/palette5747b6a53fc46.png', '', 'algo14', 'algo14', '1415', '8');
INSERT INTO `productos` VALUES ('18', 'obito uchiha', 'obito uchiha', 'asistente/img/Noticas/a13281d12317c1e100327dd443af32c8.jpg', '', 'obito uchiha', 'obito uchiha', '500', '8');
INSERT INTO `productos` VALUES ('19', 'sena', 'sdfsdf', 'asistente/img/Noticas/13441912_10209627880274419_950981954_o.jpg', '', 'sena', 'sena', '145', '7');

-- ----------------------------
-- Table structure for rol
-- ----------------------------
DROP TABLE IF EXISTS `rol`;
CREATE TABLE `rol` (
  `IDROL` int(11) NOT NULL AUTO_INCREMENT,
  `TipoRol` varchar(45) NOT NULL,
  `Estado` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`IDROL`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rol
-- ----------------------------
INSERT INTO `rol` VALUES ('1', 'administrador', '1');
INSERT INTO `rol` VALUES ('2', 'guia', '1');
INSERT INTO `rol` VALUES ('3', 'traductor', '1');
INSERT INTO `rol` VALUES ('4', 'conductor', '1');
INSERT INTO `rol` VALUES ('5', 'tia gloria', '1');

-- ----------------------------
-- Table structure for rol_has_persona
-- ----------------------------
DROP TABLE IF EXISTS `rol_has_persona`;
CREATE TABLE `rol_has_persona` (
  `ROL_IDROL` int(11) NOT NULL,
  `Persona_IDUSUARIOS` int(11) NOT NULL,
  KEY `fk_ROL_has_Persona_Persona1_idx` (`Persona_IDUSUARIOS`),
  KEY `fk_ROL_has_Persona_ROL1_idx` (`ROL_IDROL`),
  CONSTRAINT `rol_has_persona_ibfk_1` FOREIGN KEY (`ROL_IDROL`) REFERENCES `rol` (`IDROL`) ON UPDATE CASCADE,
  CONSTRAINT `rol_has_persona_ibfk_2` FOREIGN KEY (`Persona_IDUSUARIOS`) REFERENCES `persona` (`IDUSUARIOS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rol_has_persona
-- ----------------------------

-- ----------------------------
-- Table structure for solicitud
-- ----------------------------
DROP TABLE IF EXISTS `solicitud`;
CREATE TABLE `solicitud` (
  `IdSolicutud` int(11) NOT NULL AUTO_INCREMENT,
  `PrimerNombre` varchar(50) NOT NULL,
  `SegundoNombre` varchar(60) DEFAULT NULL,
  `PrimerApellido` varchar(60) NOT NULL,
  `SegundoApellido` varchar(60) NOT NULL,
  `Email` varchar(70) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL,
  `CantidadPersonas` int(11) NOT NULL,
  `Estado` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`IdSolicutud`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of solicitud
-- ----------------------------
INSERT INTO `solicitud` VALUES ('1', 'andres', 'felipe', 'cano', 'piedrahita', 'afcano@gmail.com', '2016-11-25', '01:02:00', '1', '');
INSERT INTO `solicitud` VALUES ('2', 'sdasd', 'asdasd', 'asdasda', 'sdasd', 'dasdas', '2017-11-25', '12:10:00', '1', '');
INSERT INTO `solicitud` VALUES ('3', 'Primer', 'Primer', 'Primer', 'Primer', 'Primer@Primer.com', '2016-05-22', '12:01:00', '0', '');
INSERT INTO `solicitud` VALUES ('4', 'alejo', 'alejo', 'restrepo', 'restrepo', 'blablabla@gmail.com', '2016-05-22', '01:02:00', '0', '\0');
INSERT INTO `solicitud` VALUES ('5', 'sdfsdf', 'sdfsdf', 'fsdfsdf', 'fsdfsdf', 'sdfsdfsd', '2016-05-22', '12:02:00', '0', '');
INSERT INTO `solicitud` VALUES ('6', 'segundo', 'segundo', 'segundo', 'segundo', 'segundo', '2016-05-22', '12:12:00', '0', '');
INSERT INTO `solicitud` VALUES ('7', 'yu', 'yu', 'yu', 'yu', 'yu', '2016-05-22', '12:12:00', '0', '');
INSERT INTO `solicitud` VALUES ('8', 'yu', 'yu', 'yu', 'yu', 'yu', '2016-05-22', '12:12:00', '0', '');
INSERT INTO `solicitud` VALUES ('9', 'a', 'a', 'a', 'a', 'afcanop@gmail.com', '2016-05-22', '12:12:00', '0', '');
INSERT INTO `solicitud` VALUES ('10', 'b', 'b', 'b', 'b', 'afcanop@gmail.co', '2016-05-22', '12:12:00', '0', '');
INSERT INTO `solicitud` VALUES ('11', 'c', 'c', 'c', 'c', 'rree', '2016-05-08', '12:12:00', '0', '');
INSERT INTO `solicitud` VALUES ('12', 'd', 'd', 'd', 'd', 'd', '2016-05-22', '12:21:00', '0', '');
INSERT INTO `solicitud` VALUES ('13', 'd', 'd', 'd', 'd', 'd', '2016-05-22', '12:21:00', '0', '');
INSERT INTO `solicitud` VALUES ('14', 'szdsasd', 'szdsasd', 'asdas', 'asdas', 'asdasd', '2016-05-22', '11:11:00', '0', '');
INSERT INTO `solicitud` VALUES ('15', 'lol', 'lol', 'lol', 'lol', 'lol', '2016-05-22', '12:22:00', '0', '');
INSERT INTO `solicitud` VALUES ('16', 'sona', 'sona', 'sona', 'sona', 'sona', '2016-05-22', '12:12:00', '22', '');

-- ----------------------------
-- Table structure for tour
-- ----------------------------
DROP TABLE IF EXISTS `tour`;
CREATE TABLE `tour` (
  `IDTOUR` int(11) NOT NULL AUTO_INCREMENT,
  `FECHATOUR` date NOT NULL,
  `HoraTour` varchar(45) NOT NULL,
  `Solicitud_idSolicitud` int(11) NOT NULL,
  PRIMARY KEY (`IDTOUR`),
  KEY `fk_TOUR_Solicitud1_idx` (`Solicitud_idSolicitud`),
  CONSTRAINT `tour_ibfk_1` FOREIGN KEY (`Solicitud_idSolicitud`) REFERENCES `solicitud` (`IdSolicutud`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tour
-- ----------------------------

-- ----------------------------
-- Procedure structure for RU_ActualizarEstadoPersona
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_ActualizarEstadoPersona`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoPersona`(IN `_IDUSUARIOS` INT, IN `_Estado` INT)
    NO SQL
UPDATE  persona SET  Estado = _Estado WHERE IDUSUARIOS = _IDUSUARIOS
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_ActualizarEstadoProductos
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_ActualizarEstadoProductos`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoProductos`(IN `_IDPRODUCTOS` INT, IN `_ESTADO` INT)
    NO SQL
UPDATE `productos` SET `ESTADO`= _ESTADO WHERE `IDPRODUCTOS`= _IDPRODUCTOS
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_ActualizarEstadoRol
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_ActualizarEstadoRol`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoRol`(IN `_IDROL` INT, IN `_Estado` INT)
    NO SQL
UPDATE  rol SET  Estado = _Estado WHERE   
IDROL = _IDROL
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_ActualizarTipoRol
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_ActualizarTipoRol`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarTipoRol`(IN `_IDROL` INT, IN `_TipoRol` VARCHAR(50))
    NO SQL
UPDATE rol SET TipoRol = _TipoRol WHERE IDROL = _IDROL
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_ActualizarUsuario
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_ActualizarUsuario`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarUsuario`(IN `_IDUSUARIOS` INT, IN `_PRIMER_NOMBRE` VARCHAR(50), IN `_SEGUNDO_NOMBRE` VARCHAR(50), IN `_PRIMER_APELLIDO` VARCHAR(50), IN `_SegundoApellido` VARCHAR(50), IN `_NUMERO_CONTACTO` INT, IN `_EDAD` INT, IN `_NumeroIdentificacion` INT(60), IN `_FechaNacimiento` DATE, IN `_Constrasena` INT(50))
    NO SQL
UPDATE persona SET 
PRIMER_NOMBRE   = _PRIMER_NOMBRE ,
SEGUNDO_NOMBRE  = _SEGUNDO_NOMBRE,
PRIMER_APELLIDO = _PRIMER_APELLIDO,
SegundoApellido = _SegundoApellido,
NUMERO_CONTACTO = _NUMERO_CONTACTO,
EDAD            = _EDAD,
NumeroIdentificacion = _NumeroIdentificacion,
FechaNacimiento = _FechaNacimiento,
Constrasena = _Constrasena
WHERE IDUSUARIOS  = _IDUSUARIOS
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_CatidadSolicitudas
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_CatidadSolicitudas`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_CatidadSolicitudas`()
    NO SQL
SELECT COUNT(IdSolicutud)as CantidadPersonas FROM solicitud WHERE Estado = 1
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_EliminarPersonas
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_EliminarPersonas`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarPersonas`(IN `_IDUSUARIO` INT)
    NO SQL
DELETE FROM `persona` WHERE IDUSUARIOS = _IDUSUARIO
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_EliminarProductos
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_EliminarProductos`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarProductos`(IN `_IDPRODUCTOS` INT)
    NO SQL
DELETE FROM `productos` WHERE IDPRODUCTOS = _IDPRODUCTOS
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_listarCategorias
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_listarCategorias`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_listarCategorias`()
    NO SQL
SELECT `IdCategoria`, `NombreCategoria` FROM `categoria` 
WHERE `Estado`= 1
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_ListarNombreCategoria
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_ListarNombreCategoria`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarNombreCategoria`()
    NO SQL
SELECT IdCategoria, NombreCategoria from categoria WHERE Estado = 1
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_ListarNoticas
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_ListarNoticas`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarNoticas`()
    NO SQL
SELECT `IdNoticias`, `Titulo`, `Descripcion`, `ImagenUrl`, `VideoUrl`, `Estado` FROM `noticias` WHERE `Estado`= 1
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for Ru_ListarPersonaID
-- ----------------------------
DROP PROCEDURE IF EXISTS `Ru_ListarPersonaID`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Ru_ListarPersonaID`(IN `_IDUSUARIOS` INT)
    NO SQL
SELECT  PRIMER_NOMBRE, SEGUNDO_NOMBRE, PRIMER_APELLIDO, SegundoApellido, NUMERO_CONTACTO, EDAD, NumeroIdentificacion, FechaNacimiento,  Constrasena  FROM persona WHERE 
IDUSUARIOS = _IDUSUARIOS
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_ListarPersonas
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_ListarPersonas`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarPersonas`()
    NO SQL
SELECT `IDUSUARIOS`,
CONCAT(`PRIMER_NOMBRE`,' ',`SEGUNDO_NOMBRE`) as Nombre,
Concat(`PRIMER_APELLIDO`,' ',`SegundoApellido`) as Apellido, `NUMERO_CONTACTO`, `NumeroIdentificacion`, `FechaNacimiento`, `Estado` FROM `persona`  ORDER by    
IDUSUARIOS DESC
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_ListarProductos
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_ListarProductos`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarProductos`()
    NO SQL
SELECT P.`IDPRODUCTOS`, P.`NOMBREPRODUCTO`, P.`DESCRIPCION`, P.`IMAGEN`, P.`ESTADO`, P.`Color`, P.`Marca`, P.`Precio` , C.NombreCategoria FROM productos P JOIN categoria C WHERE  P.`IDCATEGORIA` = C.`IDCATEGORIA`
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_ListarRol
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_ListarRol`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarRol`()
    NO SQL
SELECT IDROL,TipoRol,Estado from  rol
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for Ru_ListarRolID
-- ----------------------------
DROP PROCEDURE IF EXISTS `Ru_ListarRolID`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Ru_ListarRolID`(IN `_IDROL` INT)
    NO SQL
SELECT IDROL ,TipoRol from rol WHERE IDROL = _IDROL
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_ListarSolicitudes
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_ListarSolicitudes`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarSolicitudes`()
    NO SQL
SELECT `IdSolicutud`, 
concat(`PrimerNombre`,' ',`SegundoNombre`) as Nombre, 
concat(`PrimerApellido`,' ',`SegundoApellido`) as Apellido,
`Email`, `Fecha`, `Hora`, `CantidadPersonas`, `Estado` FROM `solicitud`  ORDER by IdSolicutud DESC
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_LOGIN
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_LOGIN`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_LOGIN`(IN `_NumeroIdentificacion` VARCHAR(100))
    NO SQL
    DETERMINISTIC
SELECT 
NumeroIdentificacion,Constrasena,
concat(`PRIMER_NOMBRE`,' ',`SEGUNDO_NOMBRE`) as nombre
FROM persona

where NumeroIdentificacion = _NumeroIdentificacion AND
Estado = 1
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_OlvideContrasena
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_OlvideContrasena`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_OlvideContrasena`(IN `_Constrasena` VARCHAR(60), IN `_NumeroIdentificacion` VARCHAR(60))
    NO SQL
UPDATE persona SET Constrasena = _Constrasena
WHERE NumeroIdentificacion = _NumeroIdentificacion AND Estado = 1
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_RegistrarCategoria
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_RegistrarCategoria`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarCategoria`(IN `_NombreCategoria` VARCHAR(100))
    NO SQL
INSERT INTO `categoria`(`NombreCategoria`) VALUES (_NombreCategoria)
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_RegistrarNoticas
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_RegistrarNoticas`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarNoticas`(IN `_Titulo` VARCHAR(50), IN `_Descripcion` VARCHAR(250), IN `_ImagenUrl` VARCHAR(250), IN `_VideoUrl` VARCHAR(250))
    NO SQL
INSERT INTO `noticias`(`Titulo`, `Descripcion`, `ImagenUrl`, `VideoUrl`) VALUES (_Titulo,_Descripcion,_ImagenUrl,_VideoUrl)
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_RegistrarProductos
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_RegistrarProductos`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarProductos`(IN `_NOMBREPRODUCTO` VARCHAR(50), IN `_DESCRIPCION` TEXT, IN `_IMAGEN` VARCHAR(200), IN `_Color` VARCHAR(50), IN `_marca` VARCHAR(50), IN `_Precio` FLOAT, IN `_IDCATEGORIA` INT)
    NO SQL
INSERT INTO `productos`(`NOMBREPRODUCTO`, `DESCRIPCION`, `IMAGEN`, `Color`, `Marca`, `Precio`, IDCATEGORIA) VALUES (_NOMBREPRODUCTO,_DESCRIPCION,_IMAGEN,_Color,_marca,_Precio,_IDCATEGORIA)
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_RegistrarRol
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_RegistrarRol`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarRol`(IN `_TipoRol` VARCHAR(50))
    NO SQL
INSERT INTO rol (TipoRol) VALUE (_TipoRol)
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_RegistrarSolicitud
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_RegistrarSolicitud`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarSolicitud`(IN `_PrimerNombre` VARCHAR(100), IN `_SegundoNombre` VARCHAR(100), IN `_PrimerApellido` VARCHAR(100), IN `_SegundoApellido` VARCHAR(100), IN `_Email` VARCHAR(100), IN `_Fecha` DATE, IN `_Hora` TIME, IN `_CantidadPersonas` INT(100))
    NO SQL
INSERT INTO solicitud (PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, Email, Fecha, Hora, CantidadPersonas)
VALUES (
_PrimerNombre,
_SegundoNombre,
_PrimerApellido,
_SegundoApellido,
_Email,
_Fecha,
_Hora,
_CantidadPersonas)
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for RU_RegistrarUsuarios
-- ----------------------------
DROP PROCEDURE IF EXISTS `RU_RegistrarUsuarios`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarUsuarios`(IN `_PRIMER_NOMBRE` VARCHAR(50), IN `_SEGUNDO_NOMBRE` VARCHAR(50), IN `_PRIMER_APELLIDO` VARCHAR(50), IN `_SegundoApellido` VARCHAR(50), IN `_NUMERO_CONTACTO` INT, IN `_EDAD` INT, IN `_NumeroIdentificacion` VARCHAR(60), IN `_FechaNacimiento` DATE, IN `_Constrasena` VARCHAR(200))
    NO SQL
INSERT INTO persona (IDUSUARIOS,PRIMER_NOMBRE,SEGUNDO_NOMBRE,PRIMER_APELLIDO,SegundoApellido, NUMERO_CONTACTO,EDAD,NumeroIdentificacion,FechaNacimiento,Constrasena)
VALUES
(null,_PRIMER_NOMBRE,_SEGUNDO_NOMBRE,_PRIMER_APELLIDO,_SegundoApellido,_NUMERO_CONTACTO,_EDAD,_NumeroIdentificacion,_FechaNacimiento,_Constrasena)
;;
DELIMITER ;
