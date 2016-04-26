-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-04-2016 a las 22:03:23
-- Versión del servidor: 5.6.16
-- Versión de PHP: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `graffitour`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarRol`(IN `_idRol` INT, IN `_NombreRol,` VARCHAR(100), IN `_Despripcion` VARCHAR(100))
    NO SQL
UPDATE rol SET
NombreRol = _NombreRol,
Despripcion = _Despripcion
WHERE idRol= _idRol$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarRoles`()
    NO SQL
SELECT idRol,NombreRol,FECHA_REGISTRO, Despripcion FROM rol ORDER by  idRol DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarTodo`()
    NO SQL
SELECT 
ID,
PRIMER_NOMBRE,
SEGUNDO_NOMBRE,
PRIMER_APELLIDO,
SEGUNDO_APELLIDO,
EDAD,
NUMERO_CONTACTO,
NUMERO_CEDULA,
FECHA_NACIMIENTO
FROM usuarios
ORDER BY ID DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_LOGIN`(IN `_numero_cedula` VARCHAR(100))
    NO SQL
select ID, numero_cedula,contrasena  from usuarios where numero_cedula = _numero_cedula$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_REGISTRAR`(IN `_PRIMER_NOMBRE` VARCHAR(20), IN `_SEGUNDO_NOMBRE ` VARCHAR(20), IN `_PRIMER_APELLIDO` VARCHAR(20), IN `_SEGUNDO_APELLIDO` VARCHAR(20), IN `_EDAD ` INT(20), IN `_NUMERO_CONTACTO` INT(20), IN `_FECHA_NACIMIENTO` VARCHAR(20), IN `_CONTRASENA` VARCHAR(20), IN `_TipoPersona` VARCHAR(20))
    NO SQL
INSERT INTO usuarios (
ID,
PRIMER_NOMBRE,
SEGUNDO_NOMBRE,  
PRIMER_APELLIDO,
SEGUNDO_APELLIDO,
EDAD,
NUMERO_CONTACTO,
FECHA_NACIMIENTO,
CONTRASENA,
TipoPersona 
)VALUES(
_PRIMER_NOMBRE,
_SEGUNDO_NOMBRE, 
_PRIMER_APELLIDO,
_SEGUNDO_APELLIDO,
_EDAD,
_NUMERO_CONTACTO,
_FECHA_NACIMIENTO,
_CONTRASENA,
_TipoPersona 
)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarROl`(IN `_nombreROl` VARCHAR(100), IN `_Despripcion` VARCHAR(100), IN `_Fecha` DATE)
    NO SQL
INSERT into 
rol (NombreRol,Despripcion,FECHA_REGISTRO)
VALUES (_nombreROl,_Despripcion,_Fecha)$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE IF NOT EXISTS `categorias` (
  `idCategorias` int(11) NOT NULL,
  PRIMARY KEY (`idCategorias`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE IF NOT EXISTS `rol` (
  `idRol` int(11) NOT NULL AUTO_INCREMENT,
  `NombreRol` varchar(45) NOT NULL,
  `Despripcion` varchar(45) NOT NULL,
  `FECHA_REGISTRO` date NOT NULL,
  PRIMARY KEY (`idRol`),
  UNIQUE KEY `NombreRol_UNIQUE` (`NombreRol`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`idRol`, `NombreRol`, `Despripcion`, `FECHA_REGISTRO`) VALUES
(1, 'Administrador', 'Administrador', '2016-04-11'),
(2, 'Guia', 'Guia los Tour', '2016-04-11'),
(3, 'Traductor', 'Traductor de un Guia', '2016-04-11'),
(4, 'Conductor', 'conductor de un tour', '2016-04-11'),
(5, 'medico', 'paramedico del tour', '2016-04-11'),
(6, 'mazamorra', 'persona que vende dulces', '0000-00-00'),
(7, 'cosas', '1231', '1993-11-25'),
(8, 'andres', '2016-04-13', '0000-00-00'),
(9, 'MARIA', '2016-04-11', '0000-00-00'),
(10, 'SSDFGASD', '2016-03-28', '0000-00-00'),
(12, 'CELUAR', '2016-04-11', '0000-00-00'),
(13, 'PINTURA', '2016-04-11', '0000-00-00'),
(14, 'mariana', '2016-04-12', '0000-00-00'),
(16, 'manicurista', '5454', '2016-04-12'),
(17, 'afcanop', 'afcanop', '0000-00-00'),
(18, 'sistemas', 'cosascosas', '1993-11-25'),
(19, 'blablabla', '2016-04-12', '0000-00-00'),
(21, 'ladelos tintios', '2016-04-12', '0000-00-00'),
(22, 'aseo', '123456798', '2016-04-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PRIMER_NOMBRE` varchar(15) NOT NULL,
  `SEGUNDO_NOMBRE` varchar(15) NOT NULL,
  `PRIMER_APELLIDO` varchar(15) NOT NULL,
  `SEGUNDO_APELLIDO` varchar(15) NOT NULL,
  `EDAD` int(15) NOT NULL,
  `NUMERO_CONTACTO` int(30) NOT NULL,
  `NUMERO_CEDULA` int(30) NOT NULL,
  `FECHA_NACIMIENTO` varchar(45) NOT NULL,
  `CONTRASENA` varchar(15) NOT NULL,
  `Estado` bit(1) NOT NULL,
  `Rol_idRol` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_usuarios_Rol_idx` (`Rol_idRol`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `PRIMER_NOMBRE`, `SEGUNDO_NOMBRE`, `PRIMER_APELLIDO`, `SEGUNDO_APELLIDO`, `EDAD`, `NUMERO_CONTACTO`, `NUMERO_CEDULA`, `FECHA_NACIMIENTO`, `CONTRASENA`, `Estado`, `Rol_idRol`) VALUES
(1, 'andres', 'felipe', 'cano', 'piedrahita', 22, 2147483645, 1036650331, '25/11/93', '123', b'0', 0),
(2, 'qqqqqqqqq', 'qqqqqqqqqqqqq', 'qqqqqqqqqqqqqqq', 'qqqqqqqqqqqqqqq', 18, 2147483647, 5527417, '2016-04-15', '159', b'0', 0),
(3, 'qqqqqqqqq', 'qqqqqqqqqqqqq', 'qqqqqqqqqqqqqqq', 'qqqqqqqqqqqqqqq', 18, 2147483647, 5527417, '2016-04-15', '159', b'0', 0),
(4, 'qqqqqqqqq', 'qqqqqqqqqqqqq', 'qqqqqqqqqqqqqqq', 'qqqqqqqqqqqqqqq', 18, 2147483647, 5527417, '2016-04-15', '159', b'0', 0),
(5, 'carlos', 'mario', 'blablabla', 'blablabla', 18, 301, 1, '2016-04-06', '123456789', b'0', 0),
(6, 'carlos', 'mario', 'blablabla', 'blablabla', 18, 301, 1, '2016-04-06', '123456789', b'0', 0),
(7, 'carlos', 'mario', 'blablabla', 'blablabla', 18, 301, 1, '2016-04-06', '123456789', b'0', 0),
(8, 'carlos', 'mario', 'blablabla', 'blablabla', 18, 301, 1, '2016-04-06', '123456789', b'0', 0),
(9, 'ANDRES', 'FELIPE', 'ASFMKSD', 'sadknckdn', 18, 1, 1, '2016-04-01', 'asdas', b'0', 0),
(10, 'ANDRES', 'FELIPE', 'ASFMKSD', 'sadknckdn', 18, 1, 1, '2016-04-01', 'asdas', b'0', 0),
(11, 'cano', 'FELIPE', 'ASFMKSD', 'sadknckdn', 18, 1, 1, '2016-04-01', '124', b'0', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
