-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-06-2016 a las 02:53:42
-- Versión del servidor: 10.1.13-MariaDB
-- Versión de PHP: 7.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `graffitour`
--
CREATE DATABASE IF NOT EXISTS `graffitour` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `graffitour`;

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoPersona` (IN `_IDUSUARIOS` INT, IN `_Estado` INT)  NO SQL
UPDATE  persona SET  Estado = _Estado WHERE IDUSUARIOS = _IDUSUARIOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoRol` (IN `_IDROL` INT, IN `_Estado` INT)  NO SQL
UPDATE  rol SET  Estado = _Estado WHERE  	
IDROL = _IDROL$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarTipoRol` (IN `_IDROL` INT, IN `_TipoRol` VARCHAR(50))  NO SQL
UPDATE rol SET TipoRol = _TipoRol WHERE IDROL = _IDROL$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarUsuario` (IN `_IDUSUARIOS` INT, IN `_PRIMER_NOMBRE` VARCHAR(50), IN `_SEGUNDO_NOMBRE` VARCHAR(50), IN `_PRIMER_APELLIDO` VARCHAR(50), IN `_SegundoApellido` VARCHAR(50), IN `_NUMERO_CONTACTO` INT, IN `_EDAD` INT, IN `_NumeroIdentificacion` INT(60), IN `_FechaNacimiento` DATE, IN `_Constrasena` INT(50))  NO SQL
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
WHERE IDUSUARIOS  = _IDUSUARIOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_CatidadSolicitudas` ()  NO SQL
SELECT COUNT(IdSolicutud) FROM solicitud WHERE Estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_listarCategorias` ()  NO SQL
SELECT `IdCategoria`, `NombreCategoria` FROM `categoria` 
WHERE `Estado`= 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarNombreCategoria` ()  NO SQL
SELECT IdCategoria, NombreCategoria from categoria WHERE Estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarNoticas` ()  NO SQL
SELECT `IdNoticias`, `Titulo`, `Descripcion`, `ImagenUrl`, `VideoUrl` FROM `noticias` WHERE Estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Ru_ListarPersonaID` (IN `_IDUSUARIOS` INT)  NO SQL
SELECT  PRIMER_NOMBRE, SEGUNDO_NOMBRE, PRIMER_APELLIDO, SegundoApellido, NUMERO_CONTACTO, EDAD, NumeroIdentificacion, FechaNacimiento,  Constrasena  FROM persona WHERE 
IDUSUARIOS = _IDUSUARIOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarRol` ()  NO SQL
SELECT IDROL,TipoRol,Estado from  rol$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Ru_ListarRolID` (IN `_IDROL` INT)  NO SQL
SELECT IDROL ,TipoRol from rol WHERE IDROL = _IDROL$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarTodo` ()  NO SQL
select * from persona ORDER by  	
IDUSUARIOS DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_LOGIN` (IN `_NumeroIdentificacion` VARCHAR(100))  NO SQL
    DETERMINISTIC
SELECT 
NumeroIdentificacion,Constrasena,
concat(`PRIMER_NOMBRE`,' ',`SEGUNDO_NOMBRE`) as nombre
FROM persona

where NumeroIdentificacion = _NumeroIdentificacion AND
Estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_OlvideContrasena` (IN `_Constrasena` VARCHAR(60), IN `_NumeroIdentificacion` VARCHAR(60))  NO SQL
UPDATE persona SET Constrasena = _Constrasena
WHERE NumeroIdentificacion = _NumeroIdentificacion AND Estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarCategoria` (IN `_NombreCategoria` VARCHAR(100))  NO SQL
INSERT INTO `categoria`(`NombreCategoria`) VALUES (_NombreCategoria)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarNoticas` (IN `_Titulo` VARCHAR(50), IN `_Descripcion` VARCHAR(250), IN `_ImagenUrl` VARCHAR(250), IN `_VideoUrl` VARCHAR(250))  NO SQL
INSERT INTO `noticias`(`Titulo`, `Descripcion`, `ImagenUrl`, `VideoUrl`) VALUES (_Titulo,_Descripcion,_ImagenUrl,_VideoUrl)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarRol` (IN `_TipoRol` VARCHAR(50))  NO SQL
INSERT INTO rol (TipoRol) VALUE (_TipoRol)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarSolicitud` (IN `_PrimerNombre` VARCHAR(100), IN `_SegundoNombre` VARCHAR(100), IN `_PrimerApellido` VARCHAR(100), IN `_SegundoApellido` VARCHAR(100), IN `_Email` VARCHAR(100), IN `_Fecha` DATE, IN `_Hora` TIME, IN `_CantidadPersonas` INT(100))  NO SQL
INSERT INTO solicitud (PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, Email, Fecha, Hora, CantidadPersonas)
VALUES (
_PrimerNombre,
_SegundoNombre,
_PrimerApellido,
_SegundoApellido,
_Email,
_Fecha,
_Hora,
_CantidadPersonas)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarUsuarios` (IN `_PRIMER_NOMBRE` VARCHAR(50), IN `_SEGUNDO_NOMBRE` VARCHAR(50), IN `_PRIMER_APELLIDO` VARCHAR(50), IN `_SegundoApellido` VARCHAR(50), IN `_NUMERO_CONTACTO` INT, IN `_EDAD` INT, IN `_NumeroIdentificacion` VARCHAR(60), IN `_FechaNacimiento` DATE, IN `_Constrasena` VARCHAR(50))  NO SQL
INSERT INTO persona (IDUSUARIOS,PRIMER_NOMBRE,SEGUNDO_NOMBRE,PRIMER_APELLIDO,SegundoApellido,	NUMERO_CONTACTO,EDAD,NumeroIdentificacion,FechaNacimiento,Constrasena)
VALUES
(null,_PRIMER_NOMBRE,_SEGUNDO_NOMBRE,_PRIMER_APELLIDO,_SegundoApellido,_NUMERO_CONTACTO,_EDAD,_NumeroIdentificacion,_FechaNacimiento,_Constrasena)$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargo`
--

CREATE TABLE `cargo` (
  `idCargo` int(11) NOT NULL,
  `Nombrecargo` varchar(45) DEFAULT NULL,
  `Estado` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `IdCategoria` int(11) NOT NULL,
  `NombreCategoria` varchar(50) NOT NULL,
  `Estado` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`IdCategoria`, `NombreCategoria`, `Estado`) VALUES
(1, 'andres', b'1'),
(2, 'felipe', b'1'),
(5, 'andres2', b'1'),
(6, 'canop', b'1'),
(7, 'maria', b'1'),
(8, 'jhon', b'1'),
(9, 'capi', b'1'),
(10, 'sona', b'1'),
(11, 'janna', b'1'),
(12, 'algo', b'0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `IdNoticias` int(11) NOT NULL,
  `Titulo` varchar(50) NOT NULL,
  `Descripcion` varchar(200) NOT NULL,
  `ImagenUrl` varchar(200) NOT NULL,
  `VideoUrl` varchar(200) NOT NULL,
  `Estado` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`IdNoticias`, `Titulo`, `Descripcion`, `ImagenUrl`, `VideoUrl`, `Estado`) VALUES
(2, 'hola', 'dsfm', '', '', 1),
(3, 'hola mundo', 'cosa', 'dfsdfsd.jpg', 'https://www.youtube.com/watch?v=Hndv7JC2iD8', 1),
(4, 'spe', 'bla bla bla', 'asistente/img/Noticas/skin.png', 'https://www.youtube.com/watch?v=FnmJKGASkrA', 1),
(5, 'andres', 'dfsdfsdf', 'asistente/img/Noticas/serie.jpg', 'https://www.youtube.com/watch?v=QpnUD3MJLYo&index=3&list=WL', 1),
(6, 'vaca', 'dfsdfsdf', 'asistente/img/Noticas/anime-republic-tallon4-57.jpg', 'https://www.youtube.com/watch?v=-XBHLJZ55B4', 1),
(7, 'vaca', 'dfsdfsdf', 'asistente/img/Noticas/anime-republic-tallon4-57.jpg', 'https://www.youtube.com/watch?v=-XBHLJZ55B4', 1),
(8, 'perro', 'zdfsdfsd', 'asistente/img/Noticas/palette5747b6f397808.png', 'https://www.youtube.com/watch?v=-XBHLJZ55B4', 1),
(9, 'gato', 'sfdsdf', 'asistente/img/Noticas/palette5747b6a53fc46.png', 'https://www.youtube.com/watch?v=-XBHLJZ55B4', 1),
(10, 'mujer hermosa', 'fdgsdfds', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'http://animeid.io/Ver/49009/sousei-no-onmyouji-2016/episodio-9/', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertas`
--

CREATE TABLE `ofertas` (
  `IDOFERTAS` int(11) NOT NULL,
  `FECHAINGRESO` date NOT NULL,
  `FECHAFINAL` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertas_has_productos`
--

CREATE TABLE `ofertas_has_productos` (
  `OFERTAS_IDOFERTAS` int(11) NOT NULL,
  `PRODUCTOS_IDPRODUCTOS` int(11) NOT NULL,
  `PRODUCTOS_OFERTAS_IDOFERTAS` int(11) NOT NULL,
  `valor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `IDUSUARIOS` int(11) NOT NULL,
  `PRIMER_NOMBRE` varchar(45) NOT NULL,
  `SEGUNDO_NOMBRE` varchar(45) NOT NULL,
  `PRIMER_APELLIDO` varchar(45) NOT NULL,
  `SegundoApellido` varchar(45) DEFAULT NULL,
  `NUMERO_CONTACTO` int(11) NOT NULL,
  `EDAD` int(11) NOT NULL,
  `NumeroIdentificacion` varchar(50) NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `Estado` bit(1) DEFAULT b'1',
  `Constrasena` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`IDUSUARIOS`, `PRIMER_NOMBRE`, `SEGUNDO_NOMBRE`, `PRIMER_APELLIDO`, `SegundoApellido`, `NUMERO_CONTACTO`, `EDAD`, `NumeroIdentificacion`, `FechaNacimiento`, `Estado`, `Constrasena`) VALUES
(1, 'andres', 'felipe ', 'cano ', 'piedrahita', 4969181, 18, '1036650331', '2016-04-15', b'1', '1036650331'),
(2, 'megaman', 'zero', 'x', 'axl', 1234, 33, '123456789', '2016-04-01', b'1', '123456789'),
(3, 'cristian', 'david', 'cosa', 'fea', 12345, 19, '987654321', '2016-04-07', b'1', '987654321'),
(5, 'naruto', 'naruto', 'uzumaki', '0', 1234567, 22, '1234567', '1933-11-25', b'1', '1234567'),
(6, 'z', 'z', 'z', 'z', 1, 1, '12', '2016-04-01', b'1', '123'),
(7, 'y', 'y', 'y', 'y', 18, 15, '999', '2016-04-30', b'1', '999'),
(8, 'alejandro', 'alejo', 'lopez', 'lopez', 18, 2147483647, '1036650333', '2016-05-07', b'1', '123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona_has_cargo`
--

CREATE TABLE `persona_has_cargo` (
  `Persona_IDUSUARIOS` int(11) NOT NULL,
  `Cargo_idCargo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona_has_tour`
--

CREATE TABLE `persona_has_tour` (
  `Persona_IDUSUARIOS` int(11) NOT NULL,
  `TOUR_IDTOUR` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `IDPRODUCTOS` int(11) NOT NULL,
  `NOMBREPRODUCTO` varchar(45) NOT NULL,
  `DESCRIPCION` varchar(45) NOT NULL,
  `IMAGEN` varchar(45) NOT NULL,
  `ESTADO` bit(1) NOT NULL DEFAULT b'1',
  `Color` varchar(45) DEFAULT NULL,
  `Marca` varchar(45) DEFAULT NULL,
  `Precio` float NOT NULL,
  `productos_IDPRODUCTOS` int(11) NOT NULL,
  `categoria_IDCATEGORIA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `IDROL` int(11) NOT NULL,
  `TipoRol` varchar(45) NOT NULL,
  `Estado` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`IDROL`, `TipoRol`, `Estado`) VALUES
(1, 'administrador', 1),
(2, 'guia', 1),
(3, 'traductor', 1),
(4, 'conductor', 1),
(5, 'tia gloria', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_has_persona`
--

CREATE TABLE `rol_has_persona` (
  `ROL_IDROL` int(11) NOT NULL,
  `Persona_IDUSUARIOS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitud`
--

CREATE TABLE `solicitud` (
  `IdSolicutud` int(11) NOT NULL,
  `PrimerNombre` varchar(50) NOT NULL,
  `SegundoNombre` varchar(60) DEFAULT NULL,
  `PrimerApellido` varchar(60) NOT NULL,
  `SegundoApellido` varchar(60) NOT NULL,
  `Email` varchar(70) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL,
  `CantidadPersonas` int(11) NOT NULL,
  `Estado` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `solicitud`
--

INSERT INTO `solicitud` (`IdSolicutud`, `PrimerNombre`, `SegundoNombre`, `PrimerApellido`, `SegundoApellido`, `Email`, `Fecha`, `Hora`, `CantidadPersonas`, `Estado`) VALUES
(1, 'andres', 'felipe', 'cano', 'piedrahita', 'afcano@gmail.com', '2016-11-25', '01:02:00', 1, b'1'),
(2, 'sdasd', 'asdasd', 'asdasda', 'sdasd', 'dasdas', '2017-11-25', '12:10:00', 1, b'1'),
(3, 'Primer', 'Primer', 'Primer', 'Primer', 'Primer@Primer.com', '2016-05-22', '12:01:00', 0, b'1'),
(4, 'alejo', 'alejo', 'restrepo', 'restrepo', 'blablabla@gmail.com', '2016-05-22', '01:02:00', 0, b'0'),
(5, 'sdfsdf', 'sdfsdf', 'fsdfsdf', 'fsdfsdf', 'sdfsdfsd', '2016-05-22', '12:02:00', 0, b'1'),
(6, 'segundo', 'segundo', 'segundo', 'segundo', 'segundo', '2016-05-22', '12:12:00', 0, b'1'),
(7, 'yu', 'yu', 'yu', 'yu', 'yu', '2016-05-22', '12:12:00', 0, b'1'),
(8, 'yu', 'yu', 'yu', 'yu', 'yu', '2016-05-22', '12:12:00', 0, b'1'),
(9, 'a', 'a', 'a', 'a', 'afcanop@gmail.com', '2016-05-22', '12:12:00', 0, b'1'),
(10, 'b', 'b', 'b', 'b', 'afcanop@gmail.co', '2016-05-22', '12:12:00', 0, b'1'),
(11, 'c', 'c', 'c', 'c', 'rree', '2016-05-08', '12:12:00', 0, b'1'),
(12, 'd', 'd', 'd', 'd', 'd', '2016-05-22', '12:21:00', 0, b'1'),
(13, 'd', 'd', 'd', 'd', 'd', '2016-05-22', '12:21:00', 0, b'1'),
(14, 'szdsasd', 'szdsasd', 'asdas', 'asdas', 'asdasd', '2016-05-22', '11:11:00', 0, b'1'),
(15, 'lol', 'lol', 'lol', 'lol', 'lol', '2016-05-22', '12:22:00', 0, b'1'),
(16, 'sona', 'sona', 'sona', 'sona', 'sona', '2016-05-22', '12:12:00', 22, b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tour`
--

CREATE TABLE `tour` (
  `IDTOUR` int(11) NOT NULL,
  `FECHATOUR` date NOT NULL,
  `HoraTour` varchar(45) NOT NULL,
  `Solicitud_idSolicitud` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cargo`
--
ALTER TABLE `cargo`
  ADD PRIMARY KEY (`idCargo`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`IdCategoria`),
  ADD UNIQUE KEY `NombreCategoria` (`NombreCategoria`);

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`IdNoticias`);

--
-- Indices de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  ADD PRIMARY KEY (`IDOFERTAS`);

--
-- Indices de la tabla `ofertas_has_productos`
--
ALTER TABLE `ofertas_has_productos`
  ADD KEY `fk_OFERTAS_has_PRODUCTOS_PRODUCTOS1_idx` (`PRODUCTOS_IDPRODUCTOS`,`PRODUCTOS_OFERTAS_IDOFERTAS`),
  ADD KEY `fk_OFERTAS_has_PRODUCTOS_OFERTAS1_idx` (`OFERTAS_IDOFERTAS`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`IDUSUARIOS`),
  ADD UNIQUE KEY `NUMERO_IDENTIFICACIÓN_UNIQUE` (`NumeroIdentificacion`);

--
-- Indices de la tabla `persona_has_cargo`
--
ALTER TABLE `persona_has_cargo`
  ADD KEY `fk_Persona_has_Cargo_Cargo1_idx` (`Cargo_idCargo`),
  ADD KEY `fk_Persona_has_Cargo_Persona1_idx` (`Persona_IDUSUARIOS`);

--
-- Indices de la tabla `persona_has_tour`
--
ALTER TABLE `persona_has_tour`
  ADD KEY `fk_Persona_has_TOUR_TOUR1_idx` (`TOUR_IDTOUR`),
  ADD KEY `fk_Persona_has_TOUR_Persona1_idx` (`Persona_IDUSUARIOS`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`IDPRODUCTOS`),
  ADD UNIQUE KEY `NOMBREPRODUCTO_UNIQUE` (`NOMBREPRODUCTO`),
  ADD KEY `fk_productos_categoria1_idx` (`categoria_IDCATEGORIA`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`IDROL`);

--
-- Indices de la tabla `rol_has_persona`
--
ALTER TABLE `rol_has_persona`
  ADD KEY `fk_ROL_has_Persona_Persona1_idx` (`Persona_IDUSUARIOS`),
  ADD KEY `fk_ROL_has_Persona_ROL1_idx` (`ROL_IDROL`);

--
-- Indices de la tabla `solicitud`
--
ALTER TABLE `solicitud`
  ADD PRIMARY KEY (`IdSolicutud`);

--
-- Indices de la tabla `tour`
--
ALTER TABLE `tour`
  ADD PRIMARY KEY (`IDTOUR`),
  ADD KEY `fk_TOUR_Solicitud1_idx` (`Solicitud_idSolicitud`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cargo`
--
ALTER TABLE `cargo`
  MODIFY `idCargo` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `IdCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `IdNoticias` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  MODIFY `IDOFERTAS` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `IDUSUARIOS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `IDPRODUCTOS` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `IDROL` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `solicitud`
--
ALTER TABLE `solicitud`
  MODIFY `IdSolicutud` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT de la tabla `tour`
--
ALTER TABLE `tour`
  MODIFY `IDTOUR` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ofertas_has_productos`
--
ALTER TABLE `ofertas_has_productos`
  ADD CONSTRAINT `fk_OFERTAS_has_PRODUCTOS_OFERTAS1` FOREIGN KEY (`OFERTAS_IDOFERTAS`) REFERENCES `ofertas` (`IDOFERTAS`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_OFERTAS_has_PRODUCTOS_PRODUCTOS1` FOREIGN KEY (`PRODUCTOS_IDPRODUCTOS`) REFERENCES `productos` (`IDPRODUCTOS`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `persona_has_cargo`
--
ALTER TABLE `persona_has_cargo`
  ADD CONSTRAINT `fk_Persona_has_Cargo_Cargo1` FOREIGN KEY (`Cargo_idCargo`) REFERENCES `cargo` (`idCargo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Persona_has_Cargo_Persona1` FOREIGN KEY (`Persona_IDUSUARIOS`) REFERENCES `persona` (`IDUSUARIOS`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `persona_has_tour`
--
ALTER TABLE `persona_has_tour`
  ADD CONSTRAINT `fk_Persona_has_TOUR_Persona1` FOREIGN KEY (`Persona_IDUSUARIOS`) REFERENCES `persona` (`IDUSUARIOS`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Persona_has_TOUR_TOUR1` FOREIGN KEY (`TOUR_IDTOUR`) REFERENCES `tour` (`IDTOUR`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_IDCATEGORIA`) REFERENCES `categoria` (`IdCategoria`);

--
-- Filtros para la tabla `rol_has_persona`
--
ALTER TABLE `rol_has_persona`
  ADD CONSTRAINT `rol_has_persona_ibfk_1` FOREIGN KEY (`ROL_IDROL`) REFERENCES `rol` (`IDROL`) ON UPDATE CASCADE,
  ADD CONSTRAINT `rol_has_persona_ibfk_2` FOREIGN KEY (`Persona_IDUSUARIOS`) REFERENCES `persona` (`IDUSUARIOS`);

--
-- Filtros para la tabla `tour`
--
ALTER TABLE `tour`
  ADD CONSTRAINT `tour_ibfk_1` FOREIGN KEY (`Solicitud_idSolicitud`) REFERENCES `solicitud` (`IdSolicutud`) ON UPDATE CASCADE;
--
-- Base de datos: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(11) NOT NULL,
  `dbase` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `user` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `query` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_length` text COLLATE utf8_bin,
  `col_collation` varchar(64) COLLATE utf8_bin NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) COLLATE utf8_bin DEFAULT '',
  `col_default` text COLLATE utf8_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `column_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `settings_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

--
-- Volcado de datos para la tabla `pma__designer_settings`
--

INSERT INTO `pma__designer_settings` (`username`, `settings_data`) VALUES
('root', '{"angular_direct":"direct","relation_lines":"true","snap_to_grid":"off"}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `export_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `template_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `template_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sqlquery` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `item_type` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

--
-- Volcado de datos para la tabla `pma__pdf_pages`
--

INSERT INTO `pma__pdf_pages` (`db_name`, `page_nr`, `page_descr`) VALUES
('graffitour', 1, 'lol');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `tables` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Volcado de datos para la tabla `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{"db":"graffitour","table":"categoria"},{"db":"graffitour","table":"productos"},{"db":"graffitour","table":"noticias"},{"db":"graffitour","table":"ofertas"},{"db":"graffitour","table":"persona"},{"db":"graffitour","table":"solicitud"},{"db":"graffitour","table":"rol"},{"db":"graffitour","table":"Solicitud"},{"db":"graffitour","table":"Categoria"},{"db":"graffitour","table":"rol_has_persona"}]');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `master_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_db` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_table` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `foreign_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `search_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT '0',
  `x` float UNSIGNED NOT NULL DEFAULT '0',
  `y` float UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `display_field` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `prefs` text COLLATE utf8_bin NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

--
-- Volcado de datos para la tabla `pma__table_uiprefs`
--

INSERT INTO `pma__table_uiprefs` (`username`, `db_name`, `table_name`, `prefs`, `last_update`) VALUES
('root', 'graffitour', 'persona', '{"sorted_col":"`persona`.`IDUSUARIOS`  DESC","CREATE_TIME":"2016-04-29 22:51:08","col_visib":["1","1","1","1","1","1","1","1","1","1","1"]}', '2016-05-03 23:42:35'),
('root', 'graffitour', 'rol', '{"sorted_col":"`rol`.`TipoRol` ASC"}', '2016-05-08 02:34:14'),
('root', 'graffitour', 'solicitud', '{"sorted_col":"`solicitud`.`IdSolicutud` ASC"}', '2016-05-23 00:36:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `table_name` varchar(64) COLLATE utf8_bin NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text COLLATE utf8_bin NOT NULL,
  `schema_sql` text COLLATE utf8_bin,
  `data_sql` longtext COLLATE utf8_bin,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') COLLATE utf8_bin DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `config_data` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Volcado de datos para la tabla `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2016-04-27 21:24:10', '{"lang":"es","collation_connection":"utf8mb4_unicode_ci"}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL,
  `tab` varchar(64) COLLATE utf8_bin NOT NULL,
  `allowed` enum('Y','N') COLLATE utf8_bin NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) COLLATE utf8_bin NOT NULL,
  `usergroup` varchar(64) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indices de la tabla `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indices de la tabla `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indices de la tabla `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indices de la tabla `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indices de la tabla `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indices de la tabla `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indices de la tabla `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indices de la tabla `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indices de la tabla `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indices de la tabla `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indices de la tabla `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indices de la tabla `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indices de la tabla `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;--
-- Base de datos: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
