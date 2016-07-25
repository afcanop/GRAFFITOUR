-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-07-2016 a las 06:53:22
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
CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoCategoria` (IN `_IdCategoria` INT, IN `_Estado` INT)  NO SQL
UPDATE `categoria` SET `Estado`= _Estado WHERE IdCategoria=_IdCategoria$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoMarca` (IN `_IdMarca` INT, IN `_Estado` INT)  NO SQL
UPDATE `marca` SET `Estado`=_Estado  WHERE IdMarca = _IdMarca$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoPersona` (IN `_IDUSUARIOS` INT, IN `_Estado` INT)  NO SQL
UPDATE  persona SET  Estado = _Estado WHERE IDUSUARIOS = _IDUSUARIOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoProductos` (IN `_IDPRODUCTOS` INT, IN `_ESTADO` INT)  NO SQL
UPDATE `productos` SET `ESTADO`= _ESTADO WHERE `IDPRODUCTOS`= _IDPRODUCTOS$$

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

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActulizarNombreCategoria` (IN `_IdCategoria` INT, IN `_NombreCategoria` VARCHAR(700))  NO SQL
UPDATE `categoria` SET `NombreCategoria`=_NombreCategoria  WHERE `IdCategoria`= _IdCategoria$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActulizarNombreMarca` (IN `_IdMarca` INT, IN `_NombreMarca` VARCHAR(100))  NO SQL
UPDATE `marca` SET NombreMarca = _NombreMarca WHERE `IdMarca`= _IdMarca$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_CatidadSolicitudas` ()  NO SQL
SELECT COUNT(IdSolicitud)as CantidadPersonas FROM solicitud WHERE Estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarCategoria` (IN `_IdCategoria` INT)  NO SQL
DELETE FROM `categoria` WHERE IdCategoria =_IdCategoria$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarMarca` (IN `_IdMarca` INT)  NO SQL
DELETE FROM `marca` WHERE `IdMarca` = _IdMarca$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarPersonas` (IN `_IDUSUARIO` INT)  NO SQL
DELETE FROM `persona` WHERE IDUSUARIOS = _IDUSUARIO$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarProductos` (IN `_IDPRODUCTOS` INT)  NO SQL
DELETE FROM `productos` WHERE IDPRODUCTOS = _IDPRODUCTOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarRol` (IN `_IDROL` INT)  NO SQL
DELETE FROM `rol` WHERE `IDROL`= _IDROL$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListaColores` ()  NO SQL
SELECT `IDcolor`, `Nombrecolor` FROM `color`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarCategoriaID` (IN `_IdCategoria` INT)  NO SQL
SELECT `IdCategoria`, `NombreCategoria`, `Estado` FROM `categoria` WHERE IdCategoria = _IdCategoria$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_listarCategorias` ()  NO SQL
SELECT `IdCategoria`, `NombreCategoria` FROM `categoria` 
WHERE `Estado`= 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_listarCategoriasTodas` ()  NO SQL
SELECT `IdCategoria`, `NombreCategoria`, `Estado` FROM `categoria` ORDER BY IdCategoria DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarMarca` ()  NO SQL
SELECT `IdMarca`, `NombreMarca`, `Estado` FROM `marca` ORDER by IdMarca DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarMarcaID` (IN `_IdMarca` INT)  NO SQL
SELECT `IdMarca`, `NombreMarca` FROM `marca` WHERE `IdMarca` = _IdMarca$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarNombreCategoria` ()  NO SQL
SELECT IdCategoria, NombreCategoria from categoria WHERE Estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarNoticas` ()  NO SQL
SELECT `IdNoticias`, `Titulo`, `Descripcion`, `ImagenUrl`, `VideoUrl`, `Estado` FROM `noticias` WHERE `Estado`= 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Ru_ListarPersonaID` (IN `_IDUSUARIOS` INT)  NO SQL
SELECT  PRIMER_NOMBRE, SEGUNDO_NOMBRE, PRIMER_APELLIDO, SegundoApellido, NUMERO_CONTACTO, EDAD, NumeroIdentificacion, FechaNacimiento,  Constrasena  FROM persona WHERE 
IDUSUARIOS = _IDUSUARIOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarPersonas` ()  NO SQL
SELECT `IDUSUARIOS`,
CONCAT(`PRIMER_NOMBRE`,' ',`SEGUNDO_NOMBRE`) as Nombre,
Concat(`PRIMER_APELLIDO`,' ',`SegundoApellido`) as Apellido, `NUMERO_CONTACTO`, `NumeroIdentificacion`, `FechaNacimiento`, `Estado` FROM `persona`  ORDER by    
IDUSUARIOS DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarProductos` ()  NO SQL
SELECT P.`IDPRODUCTOS`, P.`NOMBREPRODUCTO`, P.`DESCRIPCION`, P.`IMAGEN`, P.`ESTADO`, P.`Color`, P.`Marca`, P.`Precio` , C.NombreCategoria FROM productos P JOIN categoria C WHERE  P.`IDCATEGORIA` = C.`IDCATEGORIA`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarProductosID` (IN `_IDPRODUCTOS` INT)  NO SQL
SELECT P.`IDPRODUCTOS`, P.`NOMBREPRODUCTO`, P.`DESCRIPCION`, P.`IMAGEN`, P.`ESTADO`, P.`Color`, P.`Marca`, P.`Precio` , C.NombreCategoria FROM productos P JOIN categoria C WHERE  P.`IDCATEGORIA` = C.`IDCATEGORIA` 
and  p.IDPRODUCTOS = _IDPRODUCTOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarRol` ()  NO SQL
SELECT IDROL,TipoRol,Estado from  rol$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Ru_ListarRolID` (IN `_IDROL` INT)  NO SQL
SELECT IDROL ,TipoRol from rol WHERE IDROL = _IDROL$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarSolicitudes` ()  NO SQL
SELECT `IdSolicitud`, 
concat(`PrimerNombre`,' ',`SegundoNombre`) as Nombre, 
concat(`PrimerApellido`,' ',`SegundoApellido`) as Apellido,
`Email`, `Fecha`, `Hora`, `CantidadPersonas`, `Estado` FROM `solicitud`  ORDER by IdSolicitud DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarSolicitudesActivas` ()  NO SQL
SELECT
  `IdSolicitud`,
  CONCAT(
    `PrimerNombre`,
    ' ',
    `SegundoNombre`
  ) AS nombre,
  CONCAT(
    `PrimerApellido`,
    ' ',
    `SegundoApellido`


  ) AS apellido,
  `Email`,
  `Fecha`,
  `Hora`,
  `CantidadPersonas`
FROM
  solicitud
WHERE
  Estado = 1
ORDER BY 
  IdSolicitud DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarUltimIdProducto` ()  select MAX(IDPRODUCTOS) as id from productos$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarULtimoIdPersona` ()  NO SQL
SELECT MAX(IDUSUARIOS) as id FROM `persona`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_LOGIN` (IN `_NumeroIdentificacion` VARCHAR(100))  NO SQL
    DETERMINISTIC
SELECT
  DISTINCT P.IDUSUARIOS AS codigo ,
  P.NumeroIdentificacion,
  concat(P.PRIMER_NOMBRE,' ',P.SEGUNDO_NOMBRE) as nombre,
  P.NumeroIdentificacion,
  P.Constrasena,
  RP.ROL_IDROL
FROM
  persona P
 JOIN  rol_has_persona RP ON P.Estado = 1 AND RP.ROL_IDROL = 1
AND P.NumeroIdentificacion = _NumeroIdentificacion$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_OlvideContrasena` (IN `_Constrasena` VARCHAR(60), IN `_NumeroIdentificacion` VARCHAR(60))  NO SQL
UPDATE persona SET Constrasena = _Constrasena
WHERE NumeroIdentificacion = _NumeroIdentificacion AND Estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarCategoria` (IN `_NombreCategoria` VARCHAR(100))  NO SQL
INSERT INTO `categoria`(`NombreCategoria`) VALUES (_NombreCategoria)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarColor_has_producto` (IN `_IDColor` INT, IN `_IDPRODUCTO` INT)  NO SQL
INSERT INTO `color_has_producto`(`IDColor`, `IDPRODUCTO`) VALUES (_IDColor,_IDPRODUCTO)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarMarca` (IN `_NombreMarca` VARCHAR(100))  NO SQL
INSERT into marca (nombreMarca) VALUES (_NombreMarca)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarMarca_has_producto` (IN `_IdMarca` INT, IN `_IDPRODUCTO` INT)  NO SQL
INSERT INTO `marca_has_producto`(`IdMarca`, `IDPRODUCTO`) VALUES (_IdMarca,_IDPRODUCTO)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarNoticas` (IN `_Titulo` VARCHAR(50), IN `_Descripcion` VARCHAR(250), IN `_ImagenUrl` VARCHAR(250), IN `_VideoUrl` VARCHAR(250))  NO SQL
INSERT INTO `noticias`(`Titulo`, `Descripcion`, `ImagenUrl`, `VideoUrl`) VALUES (_Titulo,_Descripcion,_ImagenUrl,_VideoUrl)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarOferta` (IN `_Valor` DECIMAL, IN `_FECHAINICIO` DATE, IN `_FECHAFINAL` DATE, IN `_FECHAREGISTRO` DATE)  INSERT INTO `ofertas`( `Valor`, `FECHAINICIO`, `FECHAFINAL`, `FECHAREGISTRO`) VALUES (_Valor,_FECHAINICIO,_FECHAFINAL,_FECHAREGISTRO)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarProductos` (IN `_NOMBREPRODUCTO` VARCHAR(100), IN `_DESCRIPCION` TEXT, IN `_IMAGEN` VARCHAR(300), IN `_Precio` DECIMAL, IN `_IDCATEGORIA` INT)  NO SQL
INSERT INTO `productos`(NOMBREPRODUCTO, `DESCRIPCION`, `IMAGEN`, `Precio`, `IDCATEGORIA`) VALUES (_NOMBREPRODUCTO,_DESCRIPCION,_IMAGEN,_Precio,_IDCATEGORIA)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarRol` (IN `_TipoRol` VARCHAR(50))  NO SQL
INSERT INTO rol (TipoRol) VALUE (_TipoRol)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarRol_has_Persona` (IN `IDROL` INT, IN `IDUSUARIOS` INT)  NO SQL
INSERT INTO `rol_has_persona`(`ROL_IDROL`, `Persona_IDUSUARIOS`) VALUES (IDROL,IDUSUARIOS)$$

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

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarUsuarios` (IN `_PRIMER_NOMBRE` VARCHAR(50), IN `_SEGUNDO_NOMBRE` VARCHAR(50), IN `_PRIMER_APELLIDO` VARCHAR(50), IN `_SegundoApellido` VARCHAR(50), IN `_NUMERO_CONTACTO` INT, IN `_EDAD` INT, IN `_NumeroIdentificacion` VARCHAR(60), IN `_FechaNacimiento` DATE, IN `_Constrasena` VARCHAR(200))  NO SQL
INSERT INTO persona (IDUSUARIOS,PRIMER_NOMBRE,SEGUNDO_NOMBRE,PRIMER_APELLIDO,SegundoApellido, NUMERO_CONTACTO,EDAD,NumeroIdentificacion,FechaNacimiento,Constrasena)
VALUES
(null,_PRIMER_NOMBRE,_SEGUNDO_NOMBRE,_PRIMER_APELLIDO,_SegundoApellido,_NUMERO_CONTACTO,_EDAD,_NumeroIdentificacion,_FechaNacimiento,_Constrasena)$$

DELIMITER ;

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
(1, 'cano', b'1'),
(2, 'felipe', b'1'),
(5, 'andres2', b'1'),
(6, 'canop', b'1'),
(7, 'maria', b'1'),
(8, 'jhon', b'1'),
(9, 'capi', b'1'),
(10, 'sona', b'1'),
(11, 'janna', b'1'),
(12, 'algo', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `color`
--

CREATE TABLE `color` (
  `IDcolor` int(11) NOT NULL,
  `Nombrecolor` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `color`
--

INSERT INTO `color` (`IDcolor`, `Nombrecolor`) VALUES
(3, 'amarillo'),
(2, 'azul'),
(11, 'azul claro'),
(10, 'azul oscuro'),
(5, 'blanco'),
(16, 'café'),
(17, 'café claro'),
(18, 'café oscuro'),
(26, 'dorado'),
(6, 'gris'),
(7, 'gris claro'),
(9, 'gris oscuro'),
(19, 'morado'),
(20, 'morado claro'),
(21, 'morado oscuro'),
(22, 'naranja'),
(23, 'naranja claro'),
(24, 'naranja oscuro'),
(4, 'negro'),
(25, 'plateado'),
(1, 'rojo'),
(12, 'rosado'),
(13, 'varde'),
(14, 'varde claro'),
(15, 'varde oscuro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `color_has_producto`
--

CREATE TABLE `color_has_producto` (
  `IDColor` int(11) DEFAULT NULL,
  `IDPRODUCTO` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `color_has_producto`
--

INSERT INTO `color_has_producto` (`IDColor`, `IDPRODUCTO`) VALUES
(2, 43),
(11, 43),
(2, 45),
(11, 45),
(2, 49),
(2, 49),
(2, 51),
(2, 52),
(2, 53),
(2, 54),
(2, 55),
(2, 56),
(2, 57),
(16, 58),
(16, 58),
(16, 60),
(16, 60),
(16, 62),
(16, 63),
(16, 63),
(16, 65),
(16, 66),
(16, 67),
(16, 68),
(2, 69),
(11, 69),
(10, 69);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `IdMarca` int(11) NOT NULL,
  `NombreMarca` varchar(70) NOT NULL,
  `Estado` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`IdMarca`, `NombreMarca`, `Estado`) VALUES
(3, 'ANDRES', b'0'),
(4, 'BRAMA', b'1'),
(5, 'megaman', b'1'),
(6, 'rexona', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca_has_producto`
--

CREATE TABLE `marca_has_producto` (
  `IdMarca` int(11) NOT NULL,
  `IDPRODUCTO` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `marca_has_producto`
--

INSERT INTO `marca_has_producto` (`IdMarca`, `IDPRODUCTO`) VALUES
(6, 2),
(6, 56),
(6, 57),
(5, 58),
(5, 58),
(5, 60),
(5, 60),
(5, 62),
(5, 63),
(5, 63),
(5, 65),
(5, 66),
(5, 67),
(5, 68),
(5, 69);

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
(10, 'mujer hermosa', 'fdgsdfds', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'http://animeid.io/Ver/49009/sousei-no-onmyouji-2016/episodio-9/', 1),
(11, 'gh', 'https://www.youtube.com/watch?v=JJkpQ9IPcBQ', 'asistente/img/Noticas/palette5747b6f397808.png', 'https://www.youtube.com/watch?v=JJkpQ9IPcBQ', 1),
(12, 'fgdg', 'LastInsertId', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'DFGDF', 1),
(13, 'last', 'last', 'asistente/img/Noticas/palette5747b6a53fc46.png', 'last', 1),
(14, 'last2', 'last2', 'asistente/img/Noticas/palette5747b6a53fc46.png', 'last2', 1),
(15, 'last3', 'last3', 'asistente/img/Noticas/palette5747b6a53fc46.png', 'last3', 1),
(16, 'last4', 'last4', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'last4', 1),
(17, 'last5', 'last5', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'last5', 1),
(18, 'last5', 'last5', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'last5', 1),
(19, 'last6', 'last6', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'last6', 1),
(20, 'last7', 'last7', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'last7', 1),
(21, 'last8', 'last8', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'last8', 1),
(22, 'last8', 'last8', 'asistente/img/Noticas/palette5747b6f397808.png', 'last8', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertas`
--

CREATE TABLE `ofertas` (
  `IDOFERTAS` int(11) NOT NULL,
  `Valor` decimal(18,2) NOT NULL,
  `FECHAINICIO` datetime NOT NULL,
  `FECHAFINAL` date DEFAULT NULL,
  `FECHAREGISTRO` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ofertas`
--

INSERT INTO `ofertas` (`IDOFERTAS`, `Valor`, `FECHAINICIO`, `FECHAFINAL`, `FECHAREGISTRO`) VALUES
(1, '26.00', '2016-11-25 00:00:00', '2016-11-25', '2016-11-25'),
(2, '26.00', '2016-11-25 00:00:00', '2016-11-25', '2016-11-25'),
(3, '2.00', '2016-11-27 00:00:00', '2016-11-27', '2016-11-27'),
(4, '2.00', '2016-11-27 00:00:00', '2016-11-27', '2016-11-27'),
(5, '2.00', '2016-11-27 00:00:00', '2016-11-27', '2016-11-27');

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
  `Constrasena` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`IDUSUARIOS`, `PRIMER_NOMBRE`, `SEGUNDO_NOMBRE`, `PRIMER_APELLIDO`, `SegundoApellido`, `NUMERO_CONTACTO`, `EDAD`, `NumeroIdentificacion`, `FechaNacimiento`, `Estado`, `Constrasena`) VALUES
(1, 'andres', 'felipe ', 'cano ', 'piedrahita', 4969181, 18, '1036650331', '2016-04-15', b'0', '1036650331'),
(2, 'megaman', 'zero', 'x', 'axl', 1234, 33, '123456789', '2016-04-01', b'0', '123456789'),
(3, 'cristian', 'david', 'cosa', 'fea', 12345, 19, '987654321', '2016-04-07', b'0', '987654321'),
(5, 'naruto', 'naruto', 'uzumaki', '0', 1234567, 22, '1234567', '1933-11-25', b'1', '1234567'),
(6, 'z', 'z', 'z', 'z', 1, 1, '12', '2016-04-01', b'1', '123'),
(7, 'y', 'y', 'y', 'y', 18, 15, '999', '2016-04-30', b'1', '999'),
(8, 'alejandro', 'alejo', 'lopez', 'lopez', 18, 2147483647, '1036650333', '2016-05-07', b'1', '123'),
(14, 'THOR ', 'THOR ', 'THOR ', 'THOR ', 22, 15, '15', '2016-06-18', b'1', 'cab3eeb9139e0c5d27bc51a426f8ae2b'),
(15, 'samsumg', 'samsumg', 'samsumg', 'samsumg', 22, 222, '225641', '2016-06-11', b'1', 'e3ca0449fa2ea7701a7ac53fb719c51a'),
(16, 'samsumg2', 'samsumg2', 'samsumg2', 'samsumg2', 22, 2, '22', '0000-00-00', b'1', '9fbf9bca5b1972bd7f4c2ed2c90217cc'),
(18, 'yo', 'yo', 'yo', 'yo', 18, 1, '1', '2016-06-11', b'1', '6d0007e52f7afb7d5a0650b0ffb8a4d1'),
(19, '', '', 'epm', 'epm', 18, 301636, '12345789', '2016-07-04', b'1', 'ac8be4aee61f5f6e21b8c5afffb52939'),
(25, 'txt', 'txt', 'txt', '1', 1, 1, '16', '2016-07-04', b'1', 'c7824f3d4d5f7b2f22d034758c1e9454'),
(27, 'txt2', 'txt2', 'txt2', 'txt2', 4969181, 50, '10365', '2016-07-04', b'1', 'bba6cc344c429b8e8aa5bd87cb04bac8'),
(28, 'Rnc', 'Rnc', 'Rnc', 'Rnc', 301636, 50, '963', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70'),
(31, 'Rnc', 'Rnc', 'Rnc', 'Rnc', 301636, 50, '963852740', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70'),
(32, 'Rnc', 'Rnc', 'Rnc', 'Rnc', 301636, 50, '6', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70'),
(33, 'Rnc', 'Rnc', 'Rnc', 'Rnc', 301636, 50, '8', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70'),
(37, 'mauro', 'mauro', 'mauro', 'mauro', 8, 8, '9', '2016-07-05', b'1', 'c4ca4238a0b923820dcc509a6f75849b'),
(38, 'andres ', 'felipe', 'cano', 'piedrahita', 4969181, 21, '1036650332', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70'),
(41, 'andres', 'felipe', 'cano', 'piedrahita', 4969181, 21, '100', '2016-07-05', b'1', 'c20ad4d76fe97759aa27a0c99bff6710'),
(43, 'andres', 'felipe', 'cano', 'piedrahita', 4969181, 21, '101', '2016-07-05', b'1', 'c20ad4d76fe97759aa27a0c99bff6710'),
(44, 'an', 'an', 'an', 'an', 18, 18, '500', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70'),
(47, 'an', 'an', 'an', 'an', 18, 18, '501', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70'),
(48, 'an', 'an', 'an', 'an', 18, 18, '502', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70'),
(49, 'an', 'an', 'an', 'an', 18, 18, '499', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70'),
(51, 'an', 'an', 'an', 'an', 18, 18, '1000', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70'),
(52, 'as', 'as', 'as', 'as', 123456789, 18, '2016', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70'),
(56, 'as', 'as', 'as', 'as', 123456789, 18, '2019', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70'),
(57, 'novaventa', 'novaventa', 'fdgfdmauro', 'mauro', 1818, 18, '655', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70'),
(58, 'mauro', 'mauro', 'mauro', 'mauro', 1, 18, '569874123', '2016-07-05', b'1', '0cc175b9c0f1b6a831c399e269772661'),
(59, 'FEO', 'FEO', 'FEO', 'FEO', 71, 28, '147', '2016-07-12', b'1', '202cb962ac59075b964b07152d234b70'),
(61, 'FEO', 'FEO', 'FEO', 'FEO', 71, 28, '157', '2016-07-12', b'1', '202cb962ac59075b964b07152d234b70'),
(63, 'FEO', 'FEO', 'FEO', 'FEO', 71, 28, '269', '2016-07-12', b'1', '202cb962ac59075b964b07152d234b70'),
(64, 'FEO', 'FEO', 'FEO', 'FEO', 71, 28, '273', '2016-07-12', b'1', '202cb962ac59075b964b07152d234b70'),
(65, 'Montenegro', 'Montenegro', 'Montenegro', 'Montenegro', 301636674, 18, '2154', '2016-07-10', b'1', 'zz79xEAPzpz5YGwIZTj+zsNyX6qmEGV4YKGqns0q8m4='),
(66, 'oscar', 'oscar', 'oscar', 'oscar', 80, 18, '156', '2016-07-11', b'0', 'QdGgilOUpFLb/HTkZLJYp6OhqDZ5p6Esin9mFad/fhs='),
(70, 'Oscar2', 'Oscar2', 'Oscar2', 'Oscar2', 12516, 18, '5458185496', '2016-07-11', b'1', 'AxksrRN+OW/3nsCgWsIpSqkJ4gY0e5HITWAsD5TWOIo='),
(71, 'wifi', 'wifi', 'wifi', 'wifi', 301636, 18, '1234567532', '2016-07-21', b'1', 'PEPU6ARnYxyk2s8yh6VC87Dw7hy3I/owDbghF9F4ky0='),
(72, '', '', '', NULL, 0, 0, '', '0000-00-00', b'1', ''),
(73, 'EPIC', 'EPIC', 'EPIC', 'EPIC', 301638, 19, '17', '2016-07-21', b'1', 'ySqK/Hugc7FmRZoq8iMnLWPP9kkdvV4TmQ+i594ndNg='),
(74, 'DIEGO PAPI <3', 'DIEGO PAPI <3', 'DIEGO PAPI <3', 'DIEGO PAPI <3', 123, 18, '9611', '2016-07-21', b'1', 'pmzrLDcr79UYkYj6Mydf4gkcGnvb+VtLyT9jtoLpZEA=');

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
  `DESCRIPCION` text NOT NULL,
  `IMAGEN` varchar(250) NOT NULL,
  `ESTADO` bit(1) NOT NULL DEFAULT b'1',
  `Precio` float NOT NULL,
  `IDCATEGORIA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`IDPRODUCTOS`, `NOMBREPRODUCTO`, `DESCRIPCION`, `IMAGEN`, `ESTADO`, `Precio`, `IDCATEGORIA`) VALUES
(1, 'mekato', 'papitas de limon', 'asistente/img/Noticas/dsafrsd.jpg', b'1', 500, 1),
(2, 'arpas', 'arpas', 'asistente/img/Noticas/IMG_20160605_152703.jpg', b'1', 25000, 7),
(3, 'algo', 'dfsdf', 'asistente/img/Noticas/palette5747b6d5a83e7.png', b'1', 12158, 8),
(4, 'algo2 ', 'algo2 ', 'asistente/img/Noticas/palette5747b6d5a83e7.png', b'1', 12, 6),
(5, 'algo3', '545846546', 'asistente/img/Noticas/palette5747b6f397808.png', b'1', 15451, 5),
(6, 'algo4', '5216546dsfsdfsd', 'asistente/img/Noticas/palette5747b6d5a83e7.png', b'1', 15459, 7),
(7, 'algo5', 'algo5', 'asistente/img/Noticas/palette5747b6d5a83e7.png', b'1', 515489, 8),
(8, 'algo6', 'algo6', 'asistente/img/Noticas/palette5747b6a53fc46.png', b'1', 165446, 8),
(9, 'algo8', 'algo8', 'asistente/img/Noticas/palette5747b6a53fc46.png', b'1', 51564, 8),
(10, 'algo9', 'algo9', 'asistente/img/Noticas/palette5747b6f397808.png', b'1', 541964, 2),
(11, 'algo10', 'asds', 'asistente/img/Noticas/palette5747b6d5a83e7.png', b'1', 5000, 5),
(12, 'algo11', 'algo11', 'asistente/img/Noticas/palette5747b6a53fc46.png', b'1', 1454, 8),
(13, 'algo12', 'algo12', 'asistente/img/Noticas/palette5747b6d5a83e7.png', b'1', 485, 8),
(14, 'algo13', 'algo13', 'asistente/img/Noticas/palette5747b6a53fc46.png', b'1', 50000, 8),
(15, 'Eagleheart ', 'Eagleheart ', 'asistente/img/Noticas/palette5747b6d5a83e7.png', b'1', 554, 8),
(16, 'algo14', 'algo14', 'asistente/img/Noticas/palette5747b6a53fc46.png', b'1', 1415, 8),
(18, 'obito uchiha', 'obito uchiha', 'asistente/img/Noticas/a13281d12317c1e100327dd443af32c8.jpg', b'1', 500, 8),
(19, 'sena', 'sdfsdf', 'asistente/img/Noticas/13441912_10209627880274419_950981954_o.jpg', b'1', 145, 7),
(20, 'planta', 'planta planta', 'planta', b'1', 500, 1),
(22, 'planta2', '', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 2, 1),
(26, 'planta3', '', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 2, 1),
(27, 'planta4', 'planta4', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(29, 'planta5', 'planta4', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(30, 'planta6', 'planta4', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(32, 'planta7', 'planta4', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(34, 'planta8', 'planta4', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(35, 'planta9', 'planta4', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(37, 'planta10', 'planta4', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(39, 'planta11', 'planta4', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(40, 'planta12', 'planta4', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(41, 'planta13', 'planta13', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 2),
(43, 'planta14', 'planta13', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 2),
(45, 'planta15', 'planta13', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 2),
(46, 'planta16', 'planta16', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(47, 'planta17', 'planta16', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(48, 'planta18', 'planta16', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(49, 'planta19', 'planta16', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(51, 'planta20', 'planta16', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(52, 'planta21', 'planta16', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(53, 'planta22', 'planta16', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(54, 'planta23', 'planta16', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(55, 'planta24', 'planta16', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(56, 'planta25', 'planta16', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(57, 'planta26', 'planta16', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(58, 'planta27', 'veryMP', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(60, 'planta28', 'veryMP', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(62, 'planta29', 'veryMP', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(63, 'planta30', 'veryMP', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(65, 'planta31', 'veryMP', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(66, 'planta32', 'veryMP', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(67, 'planta33', 'veryMP', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(68, 'planta34', 'veryMP', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(69, 'sueño', 'sueño', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 13, 9);

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
(1, 'administrador', 0),
(2, 'guia', 1),
(3, 'traductor', 1),
(4, 'conductor', 1),
(5, 'tia gloria', 1),
(6, 'Odontologo', 1),
(7, 'Odontologo', 1),
(8, 'padre', 1),
(9, 'padre', 1),
(11, 'ana', 0),
(12, 'madara', 1),
(13, 'gafas', 1),
(14, 'maria', 1),
(15, 'antioquia', 1),
(16, 'League of Legends', 1),
(17, 'sona', 1),
(18, 'bot', 1),
(19, 'medellin', 1),
(20, 'samsung', 1),
(21, 'celular', 1),
(22, 'anime', 1),
(23, 'jquery', 1),
(24, 'otaku', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol_has_persona`
--

CREATE TABLE `rol_has_persona` (
  `ROL_IDROL` int(11) NOT NULL,
  `Persona_IDUSUARIOS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `rol_has_persona`
--

INSERT INTO `rol_has_persona` (`ROL_IDROL`, `Persona_IDUSUARIOS`) VALUES
(1, 1),
(2, 2),
(3, 3),
(5, 5),
(5, 5),
(6, 6),
(1, 58),
(1, 59),
(1, 61),
(1, 63),
(1, 64),
(1, 65),
(1, 66),
(1, 70),
(1, 71),
(2, 71),
(3, 71),
(6, 71),
(1, 73),
(2, 73),
(3, 73),
(6, 73),
(1, 74),
(2, 74),
(3, 74);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitud`
--

CREATE TABLE `solicitud` (
  `IdSolicitud` int(11) NOT NULL,
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

INSERT INTO `solicitud` (`IdSolicitud`, `PrimerNombre`, `SegundoNombre`, `PrimerApellido`, `SegundoApellido`, `Email`, `Fecha`, `Hora`, `CantidadPersonas`, `Estado`) VALUES
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
(16, 'sona', 'sona', 'sona', 'sona', 'sona', '2016-05-22', '12:12:00', 22, b'1'),
(17, 'adsi900245', 'adsi900245', 'adsi900245', 'adsi900245', 'adsi900245@adsi900245.com', '2016-07-23', '01:30:00', 25, b'1');

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
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`IdCategoria`),
  ADD UNIQUE KEY `NombreCategoria` (`NombreCategoria`);

--
-- Indices de la tabla `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`IDcolor`),
  ADD UNIQUE KEY `nombrecolor` (`Nombrecolor`) USING BTREE;

--
-- Indices de la tabla `color_has_producto`
--
ALTER TABLE `color_has_producto`
  ADD KEY `produc` (`IDPRODUCTO`),
  ADD KEY `colorP` (`IDColor`) USING BTREE;

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`IdMarca`),
  ADD UNIQUE KEY `NombreMarca` (`NombreMarca`);

--
-- Indices de la tabla `marca_has_producto`
--
ALTER TABLE `marca_has_producto`
  ADD KEY `MARCA` (`IdMarca`),
  ADD KEY `PRODUCTOS` (`IDPRODUCTO`);

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
  ADD KEY `fk_productos_categoria1_idx` (`IDCATEGORIA`);

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
  ADD PRIMARY KEY (`IdSolicitud`);

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
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `IdCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT de la tabla `color`
--
ALTER TABLE `color`
  MODIFY `IDcolor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `IdMarca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `IdNoticias` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  MODIFY `IDOFERTAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `IDUSUARIOS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `IDPRODUCTOS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `IDROL` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT de la tabla `solicitud`
--
ALTER TABLE `solicitud`
  MODIFY `IdSolicitud` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT de la tabla `tour`
--
ALTER TABLE `tour`
  MODIFY `IDTOUR` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `color_has_producto`
--
ALTER TABLE `color_has_producto`
  ADD CONSTRAINT `colorP` FOREIGN KEY (`IDColor`) REFERENCES `color` (`IDcolor`),
  ADD CONSTRAINT `produc` FOREIGN KEY (`IDPRODUCTO`) REFERENCES `productos` (`IDPRODUCTOS`);

--
-- Filtros para la tabla `marca_has_producto`
--
ALTER TABLE `marca_has_producto`
  ADD CONSTRAINT `MARCA` FOREIGN KEY (`IdMarca`) REFERENCES `marca` (`IdMarca`),
  ADD CONSTRAINT `PRODUCTOS` FOREIGN KEY (`IDPRODUCTO`) REFERENCES `productos` (`IDPRODUCTOS`);

--
-- Filtros para la tabla `ofertas_has_productos`
--
ALTER TABLE `ofertas_has_productos`
  ADD CONSTRAINT `fk_OFERTAS_has_PRODUCTOS_OFERTAS1` FOREIGN KEY (`OFERTAS_IDOFERTAS`) REFERENCES `ofertas` (`IDOFERTAS`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_OFERTAS_has_PRODUCTOS_PRODUCTOS1` FOREIGN KEY (`PRODUCTOS_IDPRODUCTOS`) REFERENCES `productos` (`IDPRODUCTOS`) ON DELETE NO ACTION ON UPDATE NO ACTION;

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
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`IDCATEGORIA`) REFERENCES `categoria` (`IdCategoria`);

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
  ADD CONSTRAINT `tour_ibfk_1` FOREIGN KEY (`Solicitud_idSolicitud`) REFERENCES `solicitud` (`IdSolicitud`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
