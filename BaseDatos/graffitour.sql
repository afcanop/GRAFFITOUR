-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-11-2016 a las 03:26:17
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 7.0.9

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
CREATE DEFINER=`root`@`localhost` PROCEDURE `ListaAgenda` ()  SELECT 
DISTINCT 
concat("solicitud numero "," ", pt.TOUR_IDTOUR," ","personas relacionadas con este tour ", p.PRIMER_NOMBRE," ",p.SEGUNDO_NOMBRE,"   ",p.PRIMER_APELLIDO," ",p.SegundoApellido) as title, 
t.FECHATOUR as fecha, 
t.HoraTour as hora, 
ADDDATE(t.HoraTour,INTERVAL 4 hour) as HoraFinal 
FROM persona_has_tour pt 
JOIN tour t JOIN persona p 
WHERE TOUR_IDTOUR = IDTOUR 
AND pt.Persona_IDUSUARIOS = p.IDUSUARIOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoCategoria` (IN `_IdCategoria` INT, IN `_Estado` INT)  NO SQL
UPDATE `categoria` SET `Estado`= _Estado WHERE IdCategoria=_IdCategoria$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoMarca` (IN `_IdMarca` INT, IN `_Estado` INT)  NO SQL
UPDATE `marca` SET `Estado`=_Estado  WHERE IdMarca = _IdMarca$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoNoticia` (IN `_IdNoticias` INT, IN `_Estado` INT)  NO SQL
UPDATE `noticias` SET `Estado`= _Estado WHERE `IdNoticias`= _IdNoticias$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoOfertas` (IN `_FECHAFINAL` DATE)  NO SQL
UPDATE ofertas SET Estado = 0 WHERE FECHAFINAL = _FECHAFINAL$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoOfertasPorId` (IN `_IDOFERTAS` INT, IN `_Estado` INT)  NO SQL
UPDATE ofertas o SET o.Estado = _Estado WHERE o.IDOFERTAS = _IDOFERTAS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoPersona` (IN `_IDUSUARIOS` INT, IN `_Estado` INT)  NO SQL
UPDATE  persona SET  Estado = _Estado WHERE IDUSUARIOS = _IDUSUARIOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoProductos` (IN `_IDPRODUCTOS` INT, IN `_ESTADO` INT)  NO SQL
UPDATE `productos` SET `ESTADO`= _ESTADO WHERE `IDPRODUCTOS`= _IDPRODUCTOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoRol` (IN `_IDROL` INT, IN `_Estado` INT)  NO SQL
UPDATE  rol SET  Estado = _Estado WHERE   
IDROL = _IDROL$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoSolicitud` (IN `_IdSolicitud` INT, IN `_Estado` INT)  NO SQL
UPDATE `solicitud` SET  `Estado`= _Estado WHERE `IdSolicitud`= _IdSolicitud$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoViaje` (IN `_IDUSUARIOS` INT, IN `_EstadoViaje` INT)  NO SQL
UPDATE `persona` SET EstadoViaje = _EstadoViaje  WHERE IDUSUARIOS = _IDUSUARIOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarEstadoViajeActivo` ()  NO SQL
update persona  set EstadoViaje = 1 WHERE EstadoViaje = 0$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarFechaHoraSolicitud` (IN `_IdSolicitud` INT, IN `_Fecha` DATE, IN `_Hora` TIME)  NO SQL
UPDATE solicitud s set s.Fecha = _Fecha,s.Hora = _Hora where s.IdSolicitud = _IdSolicitud$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarProducto` (IN `_IDPRODUCTO` INT, IN `_NOMBREPRODUCTO` VARCHAR(45), IN `_DESCRIPCION` TEXT, IN `_IMAGEN` VARCHAR(250), IN `_Precio` FLOAT)  NO SQL
UPDATE `productos` SET `NOMBREPRODUCTO`= _NOMBREPRODUCTO,`DESCRIPCION`= _DESCRIPCION,`IMAGEN`= _IMAGEN,`Precio`= _Precio WHERE IDPRODUCTOS= _IDPRODUCTO$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarTipoRol` (IN `_IDROL` INT, IN `_TipoRol` VARCHAR(50))  NO SQL
UPDATE rol SET TipoRol = _TipoRol WHERE IDROL = _IDROL$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarUsuario` (IN `_IDUSUARIOS` INT, IN `_PRIMER_NOMBRE` VARCHAR(50), IN `_SEGUNDO_NOMBRE` VARCHAR(50), IN `_PRIMER_APELLIDO` VARCHAR(50), IN `_SegundoApellido` VARCHAR(50), IN `_NUMERO_CONTACTO` INT, IN `_Constrasena` VARCHAR(200))  NO SQL
UPDATE persona SET 
PRIMER_NOMBRE   = _PRIMER_NOMBRE ,
SEGUNDO_NOMBRE  = _SEGUNDO_NOMBRE,
PRIMER_APELLIDO = _PRIMER_APELLIDO,
SegundoApellido = _SegundoApellido,
NUMERO_CONTACTO = _NUMERO_CONTACTO,
Constrasena = _Constrasena
WHERE IDUSUARIOS  = _IDUSUARIOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActualizarValorOferta` (IN `_IDOFERTAS` INT, IN `_valor` INT)  NO SQL
UPDATE ofertas o set o.Valor = _valor where  o.IDOFERTAS = _IDOFERTAS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActulizarNombreCategoria` (IN `_IdCategoria` INT, IN `_NombreCategoria` VARCHAR(700))  NO SQL
UPDATE `categoria` SET `NombreCategoria`=_NombreCategoria  WHERE `IdCategoria`= _IdCategoria$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ActulizarNombreMarca` (IN `_IdMarca` INT, IN `_NombreMarca` VARCHAR(100))  NO SQL
UPDATE `marca` SET NombreMarca = _NombreMarca WHERE `IdMarca`= _IdMarca$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_CatidadSolicitudas` ()  NO SQL
SELECT COUNT(IdSolicitud)as CantidadPersonas FROM solicitud WHERE Estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ContraseñaActual` (IN `_IDUSUARIOS` INT)  SELECT Constrasena from persona WHERE IDUSUARIOS = _IDUSUARIOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarCategoria` (IN `_IdCategoria` INT)  NO SQL
DELETE FROM `categoria` WHERE IdCategoria =_IdCategoria$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarColor_has_producto` (IN `_IDPRODUCTO` INT)  NO SQL
DELETE FROM `color_has_producto` WHERE `IDPRODUCTO`= _IDPRODUCTO$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarMarca` (IN `_IdMarca` INT)  NO SQL
DELETE FROM `marca` WHERE `IdMarca` = _IdMarca$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarPersonas` (IN `_IDUSUARIO` INT)  NO SQL
DELETE FROM `persona` WHERE IDUSUARIOS = _IDUSUARIO$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarProductos` (IN `_IDPRODUCTOS` INT)  NO SQL
DELETE FROM `productos` WHERE IDPRODUCTOS = _IDPRODUCTOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarRol` (IN `_IDROL` INT)  NO SQL
DELETE FROM `rol` WHERE `IDROL`= _IDROL$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarRol_has_persona_porPersona` (IN `_Persona_IDUSUARIOS` INT)  DELETE FROM `rol_has_persona` WHERE `Persona_IDUSUARIOS` = _Persona_IDUSUARIOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminarRol_has_persona_porRol` (IN `_ROL_IDROL` INT)  DELETE FROM `rol_has_persona` WHERE ROL_IDROL = _ROL_IDROL$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminiarMarca_has_productoPorMarca` (IN `_IdMarca` INT)  NO SQL
DELETE FROM `marca_has_producto` WHERE `IdMarca` = _IdMarca$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_EliminiarNoticias` (IN `_IdNoticias` INT)  NO SQL
DELETE FROM `noticias` WHERE `IdNoticias` = _IdNoticias$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_InformeEntreFechas` (IN `_FechaInicio` DATE, IN `_FechaFinal` DATE)  NO SQL
SELECT
  P.IDUSUARIOS,
  P.PRIMER_NOMBRE,
  R.TipoRol,
  PT.FechaRegistro,
  PT.HoraRegistro
FROM
  persona_has_tour PT
JOIN persona P
JOIN rol_has_persona RP
JOIN rol R
WHERE
PT.Persona_IDUSUARIOS = P.IDUSUARIOS
AND RP.Persona_IDUSUARIOS = P.IDUSUARIOS
AND RP.ROL_IDROL = R.IDROL
AND PT.FechaRegistro BETWEEN _FechaInicio
AND _FechaFinal$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListaColores` ()  NO SQL
SELECT `IDcolor`, `Nombrecolor` FROM `color`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarCategoriaID` (IN `_IdCategoria` INT)  NO SQL
SELECT `IdCategoria`, `NombreCategoria`, `Estado` FROM `categoria` WHERE IdCategoria = _IdCategoria$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_listarCategorias` ()  NO SQL
SELECT `IdCategoria`, `NombreCategoria` FROM `categoria` 
WHERE `Estado`= 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_listarCategoriasTodas` ()  NO SQL
SELECT `IdCategoria`, `NombreCategoria`, `Estado` FROM `categoria` ORDER BY IdCategoria DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarFechaHoraSolicitud` (IN `_IdSolicitud` INT)  NO SQL
SELECT s.IdSolicitud, s.Fecha, s.Hora from solicitud s WHERE s.IdSolicitud = _IdSolicitud$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_listarGuias` ()  SELECT 
DISTINCT
  P.IDUSUARIOS AS codigo,
  concat(P.PRIMER_NOMBRE,' ',P.SEGUNDO_NOMBRE,' ',P.PRIMER_APELLIDO,'',P.SegundoApellido) as nombre
FROM
  persona P
JOIN rol_has_persona RP
JOIN rol r ON RP.Persona_IDUSUARIOS = P.IDUSUARIOS
AND RP.ROL_IDROL = r.IDROL
AND RP.ROL_IDROL = 2
AND P.Estado = 1
AND P.EstadoViaje <> 0$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_listarImagenProducto` (IN `_IDPRODUCTOS` INT)  NO SQL
SELECT `IMAGEN` FROM `productos` WHERE `IDPRODUCTOS` = _IDPRODUCTOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarMarca` ()  NO SQL
SELECT `IdMarca`, `NombreMarca`, `Estado` FROM `marca` ORDER by IdMarca DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarMarcaActivas` ()  NO SQL
SELECT IdMarca, NombreMarca FROM marca WHERE Estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarMarcaID` (IN `_IdMarca` INT)  NO SQL
SELECT `IdMarca`, `NombreMarca` FROM `marca` WHERE `IdMarca` = _IdMarca$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarNombreCategoria` ()  NO SQL
SELECT IdCategoria, NombreCategoria from categoria WHERE Estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarNoticas` ()  NO SQL
SELECT `IdNoticias`, `Titulo`, `Descripcion`, `ImagenUrl`, `VideoUrl`, `Estado` FROM `noticias` ORDER BY IdNoticias DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarOfertas` ()  NO SQL
SELECT 
o.IDOFERTAS,
o.Valor,
o.FECHAINICIO,
o.FECHAFINAL,
o.FECHAREGISTRO,
o.Estado,
GROUP_CONCAT(p.NOMBREPRODUCTO SEPARATOR ', ') as NOMBREPRODUCTO
FROM
ofertas o
JOIN ofertas_has_productos op  ON op.OFERTAS_IDOFERTAS = o.IDOFERTAS
JOIN productos p  on op.PRODUCTOS_IDPRODUCTOS = p.IDPRODUCTOS
GROUP BY o.IDOFERTAS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarOfertasID` ()  select IDOFERTAS,Valor from ofertas WHERE Estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarOfertasParamodificar` (IN `_IDOFERTAS` INT)  NO SQL
SELECT o.IDOFERTAS,o.Valor from ofertas o WHERE IDOFERTAS= _IDOFERTAS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarOtrosRoles` ()  SELECT 
DISTINCT
  P.IDUSUARIOS AS codigo,
  concat(P.PRIMER_NOMBRE,' ',P.SEGUNDO_NOMBRE,' ',P.PRIMER_APELLIDO,'',P.SegundoApellido) as nombre
FROM
  persona P
JOIN rol_has_persona RP
JOIN rol r ON RP.Persona_IDUSUARIOS = P.IDUSUARIOS
AND RP.ROL_IDROL = r.IDROL
AND RP.ROL_IDROL <> 1
AND RP.ROL_IDROL <> 2
AND RP.ROL_IDROL <> 3
AND P.Estado = 1
AND P.EstadoViaje <> 0$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Ru_ListarPersonaID` (IN `_IDUSUARIOS` INT)  NO SQL
SELECT  PRIMER_NOMBRE, SEGUNDO_NOMBRE, PRIMER_APELLIDO, SegundoApellido, NUMERO_CONTACTO, NumeroIdentificacion, FechaNacimiento,  Constrasena  FROM persona WHERE 
IDUSUARIOS = _IDUSUARIOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarPersonas` ()  NO SQL
SELECT `IDUSUARIOS`,
CONCAT(`PRIMER_NOMBRE`,' ',`SEGUNDO_NOMBRE`) as Nombre,
Concat(`PRIMER_APELLIDO`,' ',`SegundoApellido`) as Apellido, `NUMERO_CONTACTO`, `NumeroIdentificacion`, `FechaNacimiento`, `Estado` FROM `persona`  ORDER by    
IDUSUARIOS DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarProductos` ()  NO SQL
SELECT
  P.`IDPRODUCTOS`,
  P.`NOMBREPRODUCTO`,
  P.`DESCRIPCION`,
  P.`IMAGEN`,
  P.`Precio`,
  CA.NombreCategoria,
  M.NombreMarca,
  P.`ESTADO`,
  O.IDOFERTAS,
  O.Valor,
  O.Estado AS estadooferta,
    GROUP_CONCAT(CO.Nombrecolor SEPARATOR ', ') as Nombrecolor,
  GROUP_CONCAT(CO.Nombrecolor SEPARATOR ', ') as los_colores
FROM
  productos P
LEFT JOIN categoria CA ON P.`IDCATEGORIA` = CA.`IDCATEGORIA`
LEFT JOIN color_has_producto CP ON P.IDPRODUCTOS = CP.IDPRODUCTO
LEFT JOIN color CO ON CP.IDColor = CO.IDcolor
LEFT JOIN marca_has_producto MP ON P.IDPRODUCTOS = MP.IDPRODUCTO 
LEFT JOIN marca M ON MP.IdMarca = M.IdMarca
LEFT JOIN ofertas_has_productos PO ON PO.PRODUCTOS_IDPRODUCTOS = P.IDPRODUCTOS
LEFT JOIN ofertas O ON PO.OFERTAS_IDOFERTAS = O.IDOFERTAS

GROUP BY p.IDPRODUCTOS
ORDER BY
  p.IDPRODUCTOS DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarProductosID` (IN `_IDPRODUCTOS` INT)  NO SQL
SELECT
  P.IDPRODUCTOS,P.NOMBREPRODUCTO,
P.DESCRIPCION,
P.IMAGEN,
P.Precio,
  C.NombreCategoria
FROM
  productos P
JOIN categoria C
 WHERE
  P.`IDCATEGORIA` = C.`IDCATEGORIA`
AND p.IDPRODUCTOS = _IDPRODUCTOS$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarProductosPorID` ()  SELECT IDPRODUCTOS, NOMBREPRODUCTO from productos WHERE ESTADO = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarProductosPublicos` ()  NO SQL
SELECT
  P.`IDPRODUCTOS`,
  P.`NOMBREPRODUCTO`,
  P.`DESCRIPCION`,
  P.`IMAGEN`,
  P.`Precio`,
  CA.NombreCategoria,
  M.NombreMarca,
  P.`ESTADO`,
  O.IDOFERTAS,
  O.Valor,
  O.Estado AS estadooferta,
    GROUP_CONCAT(CO.Nombrecolor SEPARATOR ', ') as Nombrecolor,
  GROUP_CONCAT(CO.Nombrecolor SEPARATOR ', ') as los_colores
FROM
  productos P
LEFT JOIN categoria CA ON P.`IDCATEGORIA` = CA.`IDCATEGORIA`
LEFT JOIN color_has_producto CP ON P.IDPRODUCTOS = CP.IDPRODUCTO
LEFT JOIN color CO ON CP.IDColor = CO.IDcolor
LEFT JOIN marca_has_producto MP ON P.IDPRODUCTOS = MP.IDPRODUCTO 
LEFT JOIN marca M ON MP.IdMarca = M.IdMarca
LEFT JOIN ofertas_has_productos PO ON PO.PRODUCTOS_IDPRODUCTOS = P.IDPRODUCTOS
LEFT JOIN ofertas O ON PO.OFERTAS_IDOFERTAS = O.IDOFERTAS
where
 P.ESTADO = 1 
and M.Estado = 1
GROUP BY p.IDPRODUCTOS
ORDER BY
  p.IDPRODUCTOS DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarRol` ()  NO SQL
SELECT IDROL,TipoRol,Estado from  rol$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarRolesActivos` ()  SELECT IDROL,TipoRol  from  rol where Estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `Ru_ListarRolID` (IN `_IDROL` INT)  NO SQL
SELECT IDROL ,TipoRol from rol WHERE IDROL = _IDROL$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarSolicitudes` ()  NO SQL
SELECT
  `IdSolicitud`,
  concat(
    s.`PrimerNombre`,
    ' ',
    s.`SegundoNombre`
  ) AS Nombre,
  concat(
    s.`PrimerApellido`,
    ' ',
    s.`SegundoApellido`
  ) AS Apellido,
  s.`Email`,
  s.`Fecha`,
  s.`Hora`,
  s.`CantidadPersonas`,
  t.IDTOUR
FROM
  solicitud s
JOIN tour t
WHERE
s.IdSolicitud = t.Solicitud_idSolicitud
ORDER BY
  IdSolicitud DESC$$

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

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarSolicitudID` (IN `_IdSolicitud` INT)  NO SQL
SELECT `Fecha`, `Hora` ,IdSolicitud FROM solicitud WHERE IdSolicitud =_IdSolicitud$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarTraductores` ()  SELECT 
DISTINCT
  P.IDUSUARIOS AS codigo,
  concat(P.PRIMER_NOMBRE,' ',P.SEGUNDO_NOMBRE,' ',P.PRIMER_APELLIDO,'',P.SegundoApellido) as nombre
FROM
  persona P
JOIN rol_has_persona RP
JOIN rol r ON RP.Persona_IDUSUARIOS = P.IDUSUARIOS
AND RP.ROL_IDROL = r.IDROL
AND RP.ROL_IDROL = 3
AND P.Estado = 1
AND P.EstadoViaje <> 0$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarUltimIdProducto` ()  select MAX(IDPRODUCTOS) as id from productos$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarULtimoIdPersona` ()  NO SQL
SELECT MAX(IDUSUARIOS) as id FROM `persona`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ListarUltimoIdTour` ()  SELECT MAX(IDTOUR)AS ID FROM tour$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_LOGIN` (IN `_NumeroIdentificacion` VARCHAR(100))  NO SQL
    DETERMINISTIC
SELECT 
DISTINCT
  P.IDUSUARIOS AS codigo,
  concat(P.PRIMER_NOMBRE,' ',P.SEGUNDO_NOMBRE,' ',P.PRIMER_APELLIDO,'',P.SegundoApellido) as nombre,
  Constrasena
FROM
  persona P
JOIN rol_has_persona RP
JOIN rol r ON RP.Persona_IDUSUARIOS = P.IDUSUARIOS
AND RP.ROL_IDROL = r.IDROL
AND RP.ROL_IDROL = 1
AND P.Estado = 1
AND P.NumeroIdentificacion = _NumeroIdentificacion$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_OlvideContrasena` (IN `_Constrasena` VARCHAR(60), IN `_NumeroIdentificacion` VARCHAR(60))  NO SQL
UPDATE persona SET Constrasena = _Constrasena
WHERE NumeroIdentificacion = _NumeroIdentificacion AND Estado = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ProductosAsocidos` (IN `_idCategoria` INT)  NO SQL
select p.IDPRODUCTOS, p.NOMBREPRODUCTO,p.ESTADO from productos p where p.IDCATEGORIA = _idCategoria$$

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

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarOfertas_has_productos` (IN `_OFERTAS_IDOFERTAS` INT, IN `_PRODUCTOS_IDPRODUCTOS` INT)  NO SQL
INSERT INTO `ofertas_has_productos`(`OFERTAS_IDOFERTAS`, `PRODUCTOS_IDPRODUCTOS`) VALUES (_OFERTAS_IDOFERTAS,_PRODUCTOS_IDPRODUCTOS)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarPersona_has_tour` (IN `_Persona_IDUSUARIOS` INT, IN `_TOUR_IDTOUR` INT, IN `_FechaRegistro` DATE, IN `_HoraRegistro` TIME)  NO SQL
INSERT INTO `persona_has_tour`(`Persona_IDUSUARIOS`, `TOUR_IDTOUR`, `FechaRegistro`, `HoraRegistro`) VALUES (_Persona_IDUSUARIOS,_TOUR_IDTOUR,_FechaRegistro,_HoraRegistro)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarProductos` (IN `_NOMBREPRODUCTO` VARCHAR(100), IN `_DESCRIPCION` TEXT, IN `_IMAGEN` VARCHAR(300), IN `_Precio` DECIMAL, IN `_IDCATEGORIA` INT)  NO SQL
INSERT INTO `productos`(NOMBREPRODUCTO, `DESCRIPCION`, `IMAGEN`, `Precio`, `IDCATEGORIA`) VALUES (_NOMBREPRODUCTO,_DESCRIPCION,_IMAGEN,_Precio,_IDCATEGORIA)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarRol` (IN `_TipoRol` VARCHAR(50))  NO SQL
INSERT INTO rol (TipoRol) VALUE (_TipoRol)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarRol_has_Persona` (IN `IDROL` INT, IN `IDUSUARIOS` INT)  NO SQL
INSERT INTO `rol_has_persona`(`ROL_IDROL`, `Persona_IDUSUARIOS`) VALUES (IDROL,IDUSUARIOS)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarSolicitud` (IN `_PrimerNombre` VARCHAR(100), IN `_SegundoNombre` VARCHAR(100), IN `_PrimerApellido` VARCHAR(100), IN `_SegundoApellido` VARCHAR(100), IN `_Email` VARCHAR(100), IN `_Fecha` DATE, IN `_Hora` TIME, IN `_NumeroContacto` VARCHAR(100), IN `_CantidadPersonas` INT(100))  NO SQL
INSERT INTO solicitud (PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, Email, Fecha, Hora,NumeroContacto, CantidadPersonas)
VALUES (
_PrimerNombre,
_SegundoNombre,
_PrimerApellido,
_SegundoApellido,
_Email,
_Fecha,
_Hora,
_NumeroContacto,   
_CantidadPersonas)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistrarUsuarios` (IN `_PRIMER_NOMBRE` VARCHAR(50), IN `_SEGUNDO_NOMBRE` VARCHAR(50), IN `_PRIMER_APELLIDO` VARCHAR(50), IN `_SegundoApellido` VARCHAR(50), IN `_NUMERO_CONTACTO` INT, IN `_NumeroIdentificacion` VARCHAR(60), IN `_FechaNacimiento` DATE, IN `_Constrasena` VARCHAR(200))  NO SQL
INSERT INTO persona (IDUSUARIOS,PRIMER_NOMBRE,SEGUNDO_NOMBRE,PRIMER_APELLIDO,SegundoApellido, NUMERO_CONTACTO,NumeroIdentificacion,FechaNacimiento,Constrasena)
VALUES
(null,_PRIMER_NOMBRE,_SEGUNDO_NOMBRE,_PRIMER_APELLIDO,_SegundoApellido,_NUMERO_CONTACTO,_NumeroIdentificacion,_FechaNacimiento,_Constrasena)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_RegistroTour` (IN `_FECHATOUR` DATE, IN `_HoraTour` TIME, IN `_Solicitud_idSolicitud` INT)  NO SQL
INSERT INTO `tour`(`FECHATOUR`, `HoraTour`, `Solicitud_idSolicitud`) VALUES(_FECHATOUR,_HoraTour,_Solicitud_idSolicitud)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ReportePorAnio` (IN `ANIO` VARCHAR(4))  NO SQL
SELECT 
 COUNT(T.IDTOUR)AS CantidadTour, 
 SUM(S.CantidadPersonas) AS TotalAsistentes
 FROM
  tour T 
  join 
  solicitud S 
  WHERE 
  
  LEFT(FECHATOUR,4) = ANIO
  and
  S.Estado = 0

  AND
  T.Solicitud_idSolicitud = S.IdSolicitud$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RU_ReportePorMes` (IN `AnioMes` VARCHAR(7))  NO SQL
SELECT 
 COUNT(T.IDTOUR)AS CantidadTour, 
 SUM(S.CantidadPersonas) AS TotalAsistentes
 FROM
  tour T 
  join 
  solicitud S 
  WHERE 
  
  LEFT(T.FECHATOUR,7) = AnioMes
  and
  S.Estado = 0
  AND
  T.Solicitud_idSolicitud = S.IdSolicitud$$

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
(1, 'Aerosol', b'1'),
(2, 'calzado', b'1'),
(5, 'camiseta', b'1'),
(6, 'Camisa', b'1'),
(7, 'buso', b'1'),
(8, 'gorra', b'1'),
(9, 'bota', b'1'),
(10, 'blusa', b'1'),
(11, 'aerosol Premiun', b'1'),
(14, 'de la  casa ', b'1'),
(15, 'maya', b'1');

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
(13, 'Verde'),
(14, 'Verde claro'),
(15, 'Verde oscuro');

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
(2, 72),
(3, 94),
(3, 95),
(3, 96),
(3, 97),
(3, 98),
(3, 99),
(3, 100),
(2, 100),
(3, 100),
(2, 100),
(3, 100),
(2, 100),
(11, 100),
(2, 100),
(11, 100),
(2, 103),
(3, 104),
(3, 105),
(2, 105),
(3, 106),
(2, 106);

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
(5, 'Graffitour4', b'1'),
(7, 'Graffitour2', b'1'),
(8, 'graffitour3', b'1');

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
(5, 89),
(5, 91),
(5, 93),
(5, 100),
(5, 100),
(5, 100),
(7, 100),
(7, 100),
(5, 103),
(5, 104),
(7, 105),
(5, 106);

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
(3, 'casa kolacho', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/anime-republic-tallon4-57.jpg', 'https://www.youtube.com/watch?v=Hndv7JC2iD8', 1),
(4, 'En memoria a', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/anime-republic-tallon4-57.jpg', 'https://www.youtube.com/watch?v=FnmJKGASkrA', 1),
(5, 'Kolacho', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/anime-republic-tallon4-57.jpg', 'https://youtu.be/QWpuK_ikuSg', 1),
(6, 'murales que hablan', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/anime-republic-tallon4-57.jpg', 'https://www.youtube.com/watch?v=-XBHLJZ55B4', 1),
(7, 'En la noche', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/anime-republic-tallon4-57.jpg', 'https://www.youtube.com/watch?v=-XBHLJZ55B4', 1),
(8, 'En memoria a', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/palette5747b6f397808.png', 'https://www.youtube.com/watch?v=-XBHLJZ55B4', 1),
(9, 'En memoria a', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/palette5747b6a53fc46.png', 'https://www.youtube.com/watch?v=-XBHLJZ55B4', 1),
(10, 'mujer hermosa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'http://animeid.io/Ver/49009/sousei-no-onmyouji-2016/episodio-9/', 1),
(11, 'canada en un graffitour', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/palette5747b6f397808.png', 'https://www.youtube.com/watch?v=JJkpQ9IPcBQ', 1),
(12, 'murales que hablan', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'https://www.youtube.com/watch?v=V8urkSZXljE', 1),
(13, 'medellìn c13', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/palette5747b6a53fc46.png', 'https://www.youtube.com/watch?v=V8urkSZXljE', 1),
(14, 'mujer hermosa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/palette5747b6a53fc46.png', 'https://www.youtube.com/watch?v=V8urkSZXljE', 1),
(15, 'mujer hermosa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/palette5747b6a53fc46.png', 'https://www.youtube.com/watch?v=V8urkSZXljE', 1),
(16, 'mujer hermosa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'https://www.youtube.com/watch?v=V8urkSZXljE', 1),
(17, 'mujer hermosa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a', 'asistente/img/Noticas/palette5747b6d5a83e7.png', 'https://www.youtube.com/watch?v=V8urkSZXljE', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertas`
--

CREATE TABLE `ofertas` (
  `IDOFERTAS` int(11) NOT NULL,
  `Valor` int(18) NOT NULL,
  `FECHAINICIO` date NOT NULL,
  `FECHAFINAL` date DEFAULT NULL,
  `FECHAREGISTRO` date NOT NULL,
  `Estado` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ofertas`
--

INSERT INTO `ofertas` (`IDOFERTAS`, `Valor`, `FECHAINICIO`, `FECHAFINAL`, `FECHAREGISTRO`, `Estado`) VALUES
(1, 26, '2016-11-25', '2016-11-25', '2016-11-25', b'0'),
(2, 26, '2016-11-25', '2016-11-25', '2016-11-25', b'0'),
(3, 3, '2016-11-27', '2016-11-27', '2016-11-27', b'1'),
(4, 2, '2016-11-27', '2016-11-27', '2016-11-27', b'0'),
(5, 2, '2016-11-27', '2016-11-27', '2016-11-27', b'1'),
(6, 12, '2016-08-09', '2016-08-18', '2016-08-10', b'0'),
(7, 25, '2016-08-09', '2016-08-18', '2016-08-10', b'1'),
(8, 25, '2016-08-09', '2016-08-18', '2016-08-10', b'1'),
(9, 15, '2016-08-09', '2016-08-17', '2016-08-10', b'1'),
(10, 50, '2016-08-23', '2016-08-25', '2016-08-23', b'1'),
(11, 23, '2016-08-23', '2016-08-24', '2016-08-23', b'0'),
(12, 8, '2016-09-04', '2016-09-05', '2016-09-05', b'0'),
(13, 0, '1969-12-31', '1969-12-31', '2016-09-05', b'1'),
(14, 5, '2016-10-30', '2016-10-02', '2016-10-30', b'0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertas_has_productos`
--

CREATE TABLE `ofertas_has_productos` (
  `OFERTAS_IDOFERTAS` int(11) NOT NULL,
  `PRODUCTOS_IDPRODUCTOS` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `ofertas_has_productos`
--

INSERT INTO `ofertas_has_productos` (`OFERTAS_IDOFERTAS`, `PRODUCTOS_IDPRODUCTOS`) VALUES
(10, 106),
(10, 16),
(10, 22),
(10, 19),
(10, 18),
(10, 49),
(10, 53),
(10, 20),
(5, 4),
(3, 4),
(10, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `IDUSUARIOS` int(11) NOT NULL,
  `PRIMER_NOMBRE` varchar(45) NOT NULL,
  `SEGUNDO_NOMBRE` varchar(45) DEFAULT NULL,
  `PRIMER_APELLIDO` varchar(45) NOT NULL,
  `SegundoApellido` varchar(45) NOT NULL,
  `NUMERO_CONTACTO` int(11) NOT NULL,
  `NumeroIdentificacion` varchar(50) NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `Estado` bit(1) DEFAULT b'1',
  `Constrasena` varchar(300) NOT NULL,
  `EstadoViaje` bit(1) DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`IDUSUARIOS`, `PRIMER_NOMBRE`, `SEGUNDO_NOMBRE`, `PRIMER_APELLIDO`, `SegundoApellido`, `NUMERO_CONTACTO`, `NumeroIdentificacion`, `FechaNacimiento`, `Estado`, `Constrasena`, `EstadoViaje`) VALUES
(1, 'andres', 'felipe ', 'cano ', 'piedrahita', 4969181, '1036650331', '2016-04-15', b'0', '1036650331', b'1'),
(2, 'megaman', 'zero', 'x', 'axl', 1234, '123456789', '2016-04-01', b'0', '123456789', b'1'),
(3, 'cristian', 'david', 'cosa', 'fea', 12345, '987654321', '2016-04-07', b'0', '987654321', b'1'),
(5, 'naruto', 'naruto', 'uzumaki', '0', 1234567, '1234567', '1933-11-25', b'1', '1234567', b'1'),
(6, 'z', 'z', 'z', 'z', 1, '12', '2016-04-01', b'1', '123', b'1'),
(7, 'y', 'y', 'y', 'y', 18, '999', '2016-04-30', b'1', '999', b'1'),
(8, 'alejandro', 'alejo', 'lopez', 'lopez', 18, '1036650333', '2016-05-07', b'1', 'SNPhJBvaJkuLhGyKwZqcaTyWlMqAVAjlxb+kyir2Xlo=', b'1'),
(14, 'THOR ', 'THOR ', 'THOR ', 'THOR ', 22, '15', '2016-06-18', b'1', 'cab3eeb9139e0c5d27bc51a426f8ae2b', b'1'),
(15, 'samsumg', 'samsumg', 'samsumg', 'samsumg', 22, '225641', '2016-06-11', b'1', 'e3ca0449fa2ea7701a7ac53fb719c51a', b'1'),
(16, 'samsumg2', 'samsumg2', 'samsumg2', 'samsumg2', 22, '22', '0000-00-00', b'1', '9fbf9bca5b1972bd7f4c2ed2c90217cc', b'1'),
(18, 'yo', 'yo', 'yo', 'yo', 18, '1', '2016-06-11', b'1', '6d0007e52f7afb7d5a0650b0ffb8a4d1', b'1'),
(19, '', '', 'epm', 'epm', 18, '12345789', '2016-07-04', b'1', 'ac8be4aee61f5f6e21b8c5afffb52939', b'1'),
(25, 'txt', 'txt', 'txt', '1', 1, '16', '2016-07-04', b'1', 'c7824f3d4d5f7b2f22d034758c1e9454', b'1'),
(27, 'txt2', 'txt2', 'txt2', 'txt2', 4969181, '10365', '2016-07-04', b'1', 'bba6cc344c429b8e8aa5bd87cb04bac8', b'1'),
(28, 'Rnc', 'Rnc', 'Rnc', 'Rnc', 301636, '963', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(31, 'Rnc', 'Rnc', 'Rnc', 'Rnc', 301636, '963852740', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(32, 'Rnc', 'Rnc', 'Rnc', 'Rnc', 301636, '6', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(33, 'Rnc', 'Rnc', 'Rnc', 'Rnc', 301636, '8', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(37, 'mauro', 'mauro', 'mauro', 'mauro', 8, '9', '2016-07-05', b'1', 'c4ca4238a0b923820dcc509a6f75849b', b'1'),
(38, 'andres ', 'felipe', 'cano', 'piedrahita', 4969181, '1036650332', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(41, 'andres', 'felipe', 'cano', 'piedrahita', 4969181, '100', '2016-07-05', b'1', 'c20ad4d76fe97759aa27a0c99bff6710', b'1'),
(43, 'andres', 'felipe', 'cano', 'piedrahita', 4969181, '101', '2016-07-05', b'1', 'c20ad4d76fe97759aa27a0c99bff6710', b'1'),
(44, 'an', 'an', 'an', 'an', 18, '500', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(47, 'an', 'an', 'an', 'an', 18, '501', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(48, 'an', 'an', 'an', 'an', 18, '502', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(49, 'an', 'an', 'an', 'an', 18, '499', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(51, 'an', 'an', 'an', 'an', 18, '1000', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(52, 'as', 'as', 'as', 'as', 123456789, '2016', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(56, 'as', 'as', 'as', 'as', 123456789, '2019', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(57, 'novaventa', 'novaventa', 'fdgfdmauro', 'mauro', 1818, '655', '2016-07-05', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(58, 'mauro', 'mauro', 'mauro', 'mauro', 1, '569874123', '2016-07-05', b'1', '0cc175b9c0f1b6a831c399e269772661', b'1'),
(59, 'FEO', 'FEO', 'FEO', 'FEO', 71, '147', '2016-07-12', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(61, 'FEO', 'FEO', 'FEO', 'FEO', 71, '157', '2016-07-12', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(63, 'FEO', 'FEO', 'FEO', 'FEO', 71, '269', '2016-07-12', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(64, 'FEO', 'FEO', 'FEO', 'FEO', 71, '273', '2016-07-12', b'1', '202cb962ac59075b964b07152d234b70', b'1'),
(65, 'Montenegro', 'Montenegro', 'Montenegro', 'Montenegro', 301636674, '2154', '2016-07-10', b'1', 'zz79xEAPzpz5YGwIZTj+zsNyX6qmEGV4YKGqns0q8m4=', b'1'),
(66, 'oscar', 'oscar', 'oscar', 'oscar', 80, '156', '2016-07-11', b'0', 'QdGgilOUpFLb/HTkZLJYp6OhqDZ5p6Esin9mFad/fhs=', b'1'),
(70, 'andres', 'felipe', 'cano', 'piedrahita', 125167, '5458185496', '2016-07-11', b'1', 'AxksrRN+OW/3nsCgWsIpSqkJ4gY0e5HITWAsD5TWOIo=', b'1'),
(71, 'jose', 'andres', 'Díaz', 'Pérez ', 301636, '1234567532', '2016-07-21', b'1', 'PEPU6ARnYxyk2s8yh6VC87Dw7hy3I/owDbghF9F4ky0=', b'1'),
(73, 'EPIC', 'EPIC', 'EPIC', 'EPIC', 301638, '17', '2016-07-21', b'1', 'ySqK/Hugc7FmRZoq8iMnLWPP9kkdvV4TmQ+i594ndNg=', b'1'),
(74, 'doris', '', 'Rodríguez', 'Rodríguez', 123, '9611', '2016-07-21', b'1', 'pmzrLDcr79UYkYj6Mydf4gkcGnvb+VtLyT9jtoLpZEA=', b'1'),
(75, 'OLAFO', 'OLAFO', 'OLAFO', 'OLAFO', 32158, '1516', '2016-07-31', b'1', 'CRXXvip1f4nKoroE8sZRGSZi4bswiWZGkPcoIiJSfNU=', b'1'),
(77, 'Alejandro', '', 'Quintero ', 'Cardona', 2147483647, '1020482235', '2016-09-01', b'1', 'J5ZSp9eA2CdO1khFMt8KC9Rwge1x5V5OYG3/quJ+x4U=', b'1'),
(78, '', '', '', '', 2147483647, '', '0000-00-00', b'0', 'ewC3xqYNqBf2ZOHnFE/NQHxrWmLlnZhH4LoywMKaeYg=', b'1'),
(79, 'queen', 'queen', 'queen', 'queen', 1321, '1234564', '0000-00-00', b'0', 'jMdTYaObWqbLDAXsC0IaHTMDger9enfn/RtI+6K7gdk=', b'1'),
(80, 'ad', 'ad', 'ad', 'ad', 103, '103', '2016-09-09', b'0', 'GaO53Wt4kbZkGDOPqcoHb9mHdS8sEwz2ER/BL16MDl4=', b'1'),
(81, 'totto', 'totto', 'totto', 'totto', 11234, '1111110', '2016-09-12', b'1', 'aIPm45slW1CxBybCcxPQ4b2GEglIgCixwEBOenUfGRc=', b'1'),
(82, 'totto2', 'totto', 'totto2', 'totto', 123456789, '123', '2012-02-01', b'1', 'YO5kx9WZya4O5mb60bzDVNJbvhqpXa2XIDC1q320J/I=', b'1'),
(83, 'Roles', 'Roles', 'Roles', 'Roles', 1234, '1234', '2011-07-14', b'1', '71zlP037rqErM7zuc4m4cDeJOVOMm6yFQnj8YyqiH/o=', b'1'),
(125, 'hectorin', 'hectorin', 'hectorin', 'hectorin', 235, '230423', '1997-01-01', b'1', 'ARgKu01vJeNoJKPOW11NYhx3JMFzChzNu+g7Kg5VCc0=', b'1'),
(129, 'planta', '', 'lol', 'lol', 321, '321', '1997-12-31', b'1', 'Pu4DXTkMQz5Zc8yeR24Ih7mQEu2C2TTy0d3fZ34FybQ=', b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona_has_tour`
--

CREATE TABLE `persona_has_tour` (
  `Persona_IDUSUARIOS` int(11) NOT NULL,
  `TOUR_IDTOUR` int(11) NOT NULL,
  `FechaRegistro` date NOT NULL,
  `HoraRegistro` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `persona_has_tour`
--

INSERT INTO `persona_has_tour` (`Persona_IDUSUARIOS`, `TOUR_IDTOUR`, `FechaRegistro`, `HoraRegistro`) VALUES
(71, 20, '2016-08-23', '12:39:12'),
(71, 20, '2016-08-23', '12:39:12'),
(71, 20, '2016-08-23', '12:39:12'),
(75, 20, '2016-08-23', '12:39:12'),
(49, 9, '2016-08-25', '05:00:00'),
(49, 9, '2016-08-25', '05:00:00'),
(8, 7, '2016-08-24', '07:00:00'),
(8, 7, '2016-08-24', '07:00:00'),
(71, 21, '2016-08-31', '08:20:52'),
(71, 21, '2016-08-31', '08:20:52'),
(71, 21, '2016-08-31', '08:20:52'),
(5, 21, '2016-08-31', '08:20:52'),
(71, 22, '2016-10-09', '18:48:51'),
(73, 22, '2016-10-09', '18:48:51'),
(77, 22, '2016-10-09', '18:48:51'),
(81, 22, '2016-10-09', '18:48:51'),
(71, 22, '2016-10-09', '18:48:51'),
(73, 22, '2016-10-09', '18:48:51'),
(77, 22, '2016-10-09', '18:48:51'),
(81, 22, '2016-10-09', '18:48:51'),
(71, 22, '2016-10-09', '18:48:51'),
(73, 22, '2016-10-09', '18:48:51'),
(77, 22, '2016-10-09', '18:48:51'),
(81, 22, '2016-10-09', '18:48:51'),
(75, 22, '2016-10-09', '18:48:51'),
(6, 22, '2016-10-09', '18:48:51'),
(77, 22, '2016-10-09', '18:48:51'),
(71, 23, '2016-10-09', '18:48:53'),
(73, 23, '2016-10-09', '18:48:53'),
(77, 23, '2016-10-09', '18:48:53'),
(81, 23, '2016-10-09', '18:48:53'),
(71, 23, '2016-10-09', '18:48:53'),
(73, 23, '2016-10-09', '18:48:53'),
(77, 23, '2016-10-09', '18:48:53'),
(81, 23, '2016-10-09', '18:48:53'),
(71, 23, '2016-10-09', '18:48:53'),
(73, 23, '2016-10-09', '18:48:53'),
(77, 23, '2016-10-09', '18:48:53'),
(81, 23, '2016-10-09', '18:48:53'),
(75, 23, '2016-10-09', '18:48:53'),
(6, 23, '2016-10-09', '18:48:53'),
(77, 23, '2016-10-09', '18:48:53'),
(71, 24, '2016-10-09', '18:49:06'),
(73, 24, '2016-10-09', '18:49:06'),
(77, 24, '2016-10-09', '18:49:06'),
(81, 24, '2016-10-09', '18:49:06'),
(71, 24, '2016-10-09', '18:49:06'),
(73, 24, '2016-10-09', '18:49:06'),
(77, 24, '2016-10-09', '18:49:06'),
(81, 24, '2016-10-09', '18:49:06'),
(71, 24, '2016-10-09', '18:49:06'),
(73, 24, '2016-10-09', '18:49:06'),
(77, 24, '2016-10-09', '18:49:06'),
(81, 24, '2016-10-09', '18:49:06'),
(75, 24, '2016-10-09', '18:49:06'),
(6, 24, '2016-10-09', '18:49:06'),
(77, 24, '2016-10-09', '18:49:06'),
(73, 25, '2016-10-12', '23:00:15'),
(73, 25, '2016-10-12', '23:00:15'),
(71, 25, '2016-10-12', '23:00:15'),
(75, 25, '2016-10-12', '23:00:15'),
(77, 26, '2016-10-12', '23:10:41'),
(77, 26, '2016-10-12', '23:10:41'),
(71, 26, '2016-10-12', '23:10:41'),
(73, 26, '2016-10-12', '23:10:41'),
(73, 27, '2016-10-12', '23:10:54'),
(73, 30, '2016-10-18', '00:16:17'),
(73, 30, '2016-10-18', '00:16:17'),
(71, 30, '2016-10-18', '00:16:17'),
(73, 31, '2016-10-18', '00:22:10'),
(73, 31, '2016-10-18', '00:22:10'),
(73, 31, '2016-10-18', '00:22:10'),
(73, 32, '2016-10-18', '00:24:08'),
(73, 32, '2016-10-18', '00:24:08'),
(73, 32, '2016-10-18', '00:24:08'),
(77, 33, '2016-10-18', '21:33:25'),
(73, 34, '2016-10-30', '12:52:03'),
(77, 34, '2016-10-30', '12:52:03'),
(75, 34, '2016-10-30', '12:52:03'),
(73, 35, '2016-11-05', '15:19:01');

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
(1, 'mekato', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/dsafrsd.jpg', b'0', 500, 1),
(2, 'a', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/IMG_20160605_152703.jpg', b'1', 25000, 7),
(3, 'algo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/palette5747b6d5a83e7.png', b'1', 12158, 8),
(4, 'algo2 ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/palette5747b6d5a83e7.png', b'1', 12, 6),
(5, 'algo3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/palette5747b6f397808.png', b'1', 15451, 5),
(6, 'algo4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/palette5747b6d5a83e7.png', b'1', 15459, 7),
(7, 'algo5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/palette5747b6d5a83e7.png', b'1', 515489, 8),
(8, 'algo6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/palette5747b6a53fc46.png', b'1', 165446, 8),
(9, 'algo8', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/palette5747b6a53fc46.png', b'1', 51564, 8),
(10, 'algo9', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/palette5747b6f397808.png', b'1', 541964, 2),
(11, 'algo10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/palette5747b6d5a83e7.png', b'1', 5000, 5),
(12, 'algo11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/palette5747b6a53fc46.png', b'1', 1454, 8),
(13, 'algo12', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/palette5747b6d5a83e7.png', b'1', 485, 8),
(14, 'algo13', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/palette5747b6a53fc46.png', b'1', 50000, 8),
(15, 'Eagleheart ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/palette5747b6d5a83e7.png', b'1', 554, 8),
(16, 'algo14', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/palette5747b6a53fc46.png', b'1', 1415, 8),
(18, 'obito uchiha', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/a13281d12317c1e100327dd443af32c8.jpg', b'1', 500, 8),
(19, 'sena', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/13441912_10209627880274419_950981954_o.jpg', b'1', 145, 7),
(20, 'planta', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'planta', b'1', 500, 1),
(22, 'planta2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 2, 1),
(26, 'planta3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 2, 1),
(27, 'planta4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(29, 'planta5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(30, 'planta6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(32, 'planta7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(34, 'planta8', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(35, 'planta9', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(37, 'planta10', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(39, 'planta11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(40, 'planta12', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 15, 8),
(41, 'planta13', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 2),
(43, 'planta14', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 2),
(45, 'planta15', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 2),
(46, 'planta16', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(47, 'planta17', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(48, 'planta18', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(49, 'planta19', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(51, 'planta20', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(52, 'planta21', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(53, 'planta22', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(54, 'planta23', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(55, 'planta24', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(56, 'planta25', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(57, 'planta26', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 1, 5),
(58, 'planta27', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(60, 'planta28', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(62, 'planta29', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(63, 'planta30', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(65, 'planta31', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(66, 'planta32', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(67, 'planta33', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(68, 'planta34', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 123, 2),
(69, 'andres', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/Chibi-Ashe-Fan-Art.jpg', b'1', 13, 9),
(71, 'Pintura rojo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Productos/descarga.png', b'1', 2.5, 5),
(72, 'Hector', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/14045565_1136118529781339_8840160397966054567_n.jpg', b'1', 1000, 14),
(73, 'aerosol ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/descarga.png', b'1', 5000, 1),
(89, 'Pintura ', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/descarga.png', b'1', 1, 1),
(91, 'TOTO', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/descarga.png', b'1', 123, 1),
(93, 'Pintur', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/descarga.png', b'1', 1, 1),
(94, 'cosa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/descarga.png', b'1', 124, 1),
(95, 'caimsa con logo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/descarga.png', b'1', 1, 1),
(96, 'camisa sin logo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/descarga.png', b'1', 1, 1),
(97, 'gorra con logo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/descarga.png', b'1', 124, 1),
(98, 'gorra sin logo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/descarga.png', b'1', 1234, 7),
(99, 'blusa', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Noticas/descarga.png', b'0', 1234, 6),
(100, 'producto', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', 'asistente/img/Productos/sol.jpg', b'1', 1164, 7),
(103, 'helado', 'rrr', 'asistente/img/Noticas/doctor_stein_by_fullmetaljibz.jpg', b'1', 3000, 7),
(104, 'quipito', 'a', 'asistente/img/Productos/fondo.png', b'1', 3000, 8),
(105, 'negra', 'aaaaaaaaaa', 'asistente/img/Noticas/codigo-binario-9004-1920x1200__wallpaper_1366x768.jpg', b'1', 30000, 2),
(106, 'LOL', 'LOREM', 'asistente/img/Noticas/doctor_stein_by_fullmetaljibz.jpg', b'1', 3000, 2);

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
(5, 'aguador', 0),
(6, 'Odontologo', 0),
(7, 'fotografo2', 1),
(8, 'padre', 0),
(9, 'php', 1),
(11, 'ana', 1),
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
(24, 'otaku', 1),
(31, 'igual', 1);

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
(13, 75),
(5, 77),
(6, 77),
(3, 77),
(1, 77),
(2, 77),
(24, 77),
(23, 77),
(16, 77),
(1, 78),
(2, 78),
(23, 78),
(16, 78),
(1, 79),
(2, 80),
(3, 80),
(1, 81),
(2, 81),
(3, 81),
(1, 82),
(1, 83),
(1, 125);

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
  `NumeroContacto` varchar(200) NOT NULL,
  `CantidadPersonas` varchar(200) NOT NULL,
  `Estado` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `solicitud`
--

INSERT INTO `solicitud` (`IdSolicitud`, `PrimerNombre`, `SegundoNombre`, `PrimerApellido`, `SegundoApellido`, `Email`, `Fecha`, `Hora`, `NumeroContacto`, `CantidadPersonas`, `Estado`) VALUES
(1, 'andres', 'felipe', 'cano', 'piedrahita', 'afcano@gmail.com', '2016-11-25', '01:02:00', '', '1', b'1'),
(2, 'sdasd', 'asdasd', 'asdasda', 'sdasd', 'dasdas', '2017-11-25', '12:10:00', '', '1', b'1'),
(3, 'Primer', 'Primer', 'Primer', 'Primer', 'Primer@Primer.com', '2016-05-22', '12:01:00', '', '0', b'1'),
(4, 'alejo', 'alejo', 'restrepo', 'restrepo', 'blablabla@gmail.com', '2016-05-22', '01:02:00', '', '0', b'1'),
(5, 'sdfsdf', 'sdfsdf', 'fsdfsdf', 'fsdfsdf', 'sdfsdfsd', '2016-05-22', '12:02:00', '', '0', b'1'),
(6, 'segundo', 'segundo', 'segundo', 'segundo', 'segundo', '2016-05-22', '12:12:00', '', '0', b'1'),
(7, 'yu', 'yu', 'yu', 'yu', 'yu', '2016-05-22', '12:12:00', '', '0', b'1'),
(8, 'yu', 'yu', 'yu', 'yu', 'yu', '2016-05-22', '12:12:00', '', '0', b'1'),
(9, 'a', 'a', 'a', 'a', 'afcanop@gmail.com', '2016-05-22', '12:12:00', '', '0', b'1'),
(10, 'b', 'b', 'b', 'b', 'afcanop@gmail.co', '2016-05-22', '12:12:00', '', '0', b'0'),
(11, 'c', 'c', 'c', 'c', 'rree', '2016-05-08', '12:12:00', '', '0', b'0'),
(12, 'd', 'd', 'd', 'd', 'd', '2016-05-22', '12:21:00', '', '0', b'0'),
(13, 'd', 'd', 'd', 'd', 'd', '2016-05-22', '12:21:00', '', '0', b'0'),
(14, 'szdsasd', 'szdsasd', 'asdas', 'asdas', 'asdasd', '2016-05-22', '11:11:00', '', '0', b'0'),
(15, 'lol', 'lol', 'lol', 'lol', 'lol', '2016-05-22', '12:22:00', '', '0', b'0'),
(16, 'sona', 'sona', 'sona', 'sona', 'sona', '2016-05-22', '12:12:00', '', '22', b'0'),
(17, 'adsi900245', 'adsi900245', 'adsi900245', 'adsi900245', 'adsi900245@adsi900245.com', '2016-07-23', '01:30:00', '', '25', b'0'),
(18, '', '', '', '', '565', '2016-07-30', '12:00:00', '', '0', b'0'),
(19, 'q', 'q', 'q', 'q', '5656@CO.COm', '2016-07-30', '12:00:00', '', '21', b'0'),
(20, 'y', 'y', 'y', 'y', 'y', '2016-07-30', '12:00:00', '', '21', b'0'),
(21, 'z', 'z', 'z', 'z', 'z', '2016-07-30', '12:00:00', '', '21', b'0'),
(22, 'TOUR', 'TOUR', 'TOUR', 'TOUR', '2588498@c.com', '2016-08-04', '03:00:00', '', '2215', b'0'),
(23, 's5', 's5', 's5', 's5', 's5@s5', '2016-05-16', '02:53:00', '3016367374', '50', b'0'),
(24, 's7', 's7', 's7', 's7', 's7@s7', '2016-08-17', '03:00:00', '3155918171', '24', b'0'),
(25, 's6', 's6', 's6', 's6', 's6@s6.com', '2016-08-16', '11:00:00', '456', '21', b'0'),
(26, 'ana', 'ana', 'arenas', 'arenas', '123@adc.com', '2016-08-26', '12:00:00', '456', '12', b'0'),
(27, 'duvan', '', 'restrepo', 'restrepo', '456', '2016-08-18', '12:00:00', '123', '25', b'0'),
(28, 'HECTOR ', 'DARIO', 'RAMIREZ', 'RAMIREZ', 'anamaria@anamaria.com', '2016-08-16', '02:00:00', '123', '50', b'0'),
(29, 'ana maria', 'ana maria', 'ana maria', 'ana maria', 'anamaria@anamaria.com', '2016-08-09', '12:00:00', '123456789', '21', b'0'),
(30, 'hector', 'el lindo', 'gordo', 'gordo', 'hectorEllindo@hotmail.com', '2016-10-31', '12:38:00', '301637374', '21', b'0'),
(31, 'andres', 'felipeeee', 'piedrahita', 'piedrahita', 'afcanoHector@hotmail.com', '2016-10-31', '12:38:00', '301637374', '21', b'0'),
(32, 'glora', 'elena', 'velasquez', 'velasquez', 'velasquez@velasquez.com', '2016-10-31', '07:09:00', '301637374', '21', b'1'),
(33, 'anan', 'andes', 'anan', 'anan', 'anan@anan.com', '0000-00-00', '11:35:00', '4969181', '21', b'1'),
(34, 'ana maria', 'ana maria', 'ana maria', 'ana maria', 'afcanop@hotmail.com', '2016-12-31', '12:40:00', '212121212', '21', b'1'),
(35, 'cosa', '', 'cosa', 'cosa', 'cosa@cosa.com', '2016-01-11', '19:02:00', '123456789', '21', b'0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tour`
--

CREATE TABLE `tour` (
  `IDTOUR` int(11) NOT NULL,
  `FECHATOUR` date NOT NULL,
  `HoraTour` time NOT NULL,
  `Solicitud_idSolicitud` int(11) NOT NULL,
  `Estado` bit(1) DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tour`
--

INSERT INTO `tour` (`IDTOUR`, `FECHATOUR`, `HoraTour`, `Solicitud_idSolicitud`, `Estado`) VALUES
(1, '2016-09-03', '03:00:00', 22, b'1'),
(2, '2016-09-03', '03:00:00', 22, b'1'),
(3, '2016-09-03', '12:21:00', 13, b'1'),
(4, '2016-09-03', '01:02:00', 1, b'1'),
(5, '2016-09-03', '12:00:00', 27, b'1'),
(6, '2016-09-03', '03:00:00', 28, b'1'),
(7, '2016-09-03', '03:00:00', 28, b'1'),
(8, '2016-09-03', '03:00:00', 28, b'1'),
(9, '2016-09-03', '12:00:00', 27, b'1'),
(10, '2016-09-01', '12:00:00', 26, b'1'),
(11, '2016-08-16', '11:00:00', 25, b'1'),
(12, '2016-09-16', '11:00:00', 25, b'1'),
(13, '2016-09-03', '11:00:00', 25, b'1'),
(14, '2016-09-03', '03:00:00', 24, b'1'),
(15, '2016-05-16', '02:53:00', 23, b'1'),
(16, '2016-09-17', '03:00:00', 22, b'1'),
(17, '2016-07-30', '12:00:00', 21, b'1'),
(18, '2016-08-20', '12:00:00', 20, b'1'),
(19, '2016-07-30', '12:00:00', 19, b'1'),
(20, '2016-09-03', '01:30:00', 17, b'1'),
(21, '2016-09-10', '12:12:00', 16, b'1'),
(22, '2016-08-09', '12:00:00', 29, b'1'),
(23, '2016-08-09', '12:00:00', 29, b'1'),
(24, '2016-08-09', '12:00:00', 29, b'1'),
(25, '2016-07-30', '12:00:00', 18, b'1'),
(26, '2016-05-22', '12:22:00', 15, b'1'),
(27, '2016-05-22', '12:21:00', 13, b'1'),
(28, '2016-05-22', '11:11:00', 14, b'1'),
(29, '2016-05-22', '11:11:00', 14, b'1'),
(30, '2016-05-22', '11:11:00', 14, b'1'),
(31, '2016-05-22', '12:21:00', 12, b'1'),
(32, '2016-05-08', '12:12:00', 11, b'1'),
(33, '2016-05-22', '12:12:00', 10, b'1'),
(34, '2016-10-31', '12:38:00', 30, b'1'),
(35, '2016-01-11', '19:02:00', 35, b'1');

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
  ADD KEY `fk_OFERTAS_has_PRODUCTOS_PRODUCTOS1_idx` (`PRODUCTOS_IDPRODUCTOS`),
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
  ADD PRIMARY KEY (`IDROL`),
  ADD UNIQUE KEY `NombreRolUnico` (`TipoRol`) USING BTREE;

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
  MODIFY `IdCategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT de la tabla `color`
--
ALTER TABLE `color`
  MODIFY `IDcolor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `IdMarca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `IdNoticias` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  MODIFY `IDOFERTAS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `IDUSUARIOS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=130;
--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `IDPRODUCTOS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;
--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `IDROL` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT de la tabla `solicitud`
--
ALTER TABLE `solicitud`
  MODIFY `IdSolicitud` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT de la tabla `tour`
--
ALTER TABLE `tour`
  MODIFY `IDTOUR` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
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
