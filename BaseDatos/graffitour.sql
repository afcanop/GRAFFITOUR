-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-05-2016 a las 02:48:48
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

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarRol` (IN `_TipoRol` VARCHAR(50))  NO SQL
INSERT INTO rol (TipoRol) VALUE (_TipoRol)$$

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `IdNoticias` int(11) NOT NULL,
  `Titulo` int(11) NOT NULL,
  `ImagenUrl` varchar(200) NOT NULL,
  `VideoUrl` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(1, 'andres', 'felipe ', 'cano ', 'piedrahita', 4969181, 18, '1036650331', '2016-04-15', b'1', '12345'),
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
  `TipoCalsado` varchar(45) DEFAULT NULL,
  `Color` varchar(45) DEFAULT NULL,
  `Marca` varchar(45) DEFAULT NULL,
  `TiempoSecado` date DEFAULT NULL,
  `Calidad` varchar(45) DEFAULT NULL,
  `Rendimiento` varchar(45) DEFAULT NULL,
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
(5, 'chaf3', 1);

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
  `NombreRepresentante` varchar(50) NOT NULL,
  `ApellidoSolicitante` varchar(60) NOT NULL,
  `Email` varchar(70) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL,
  `CantidadPersonas` int(11) NOT NULL DEFAULT '1',
  `Estado` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  MODIFY `IdCategoria` int(11) NOT NULL AUTO_INCREMENT;
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
  MODIFY `IdSolicutud` int(11) NOT NULL AUTO_INCREMENT;
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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
