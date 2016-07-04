<?php

class MldUsuario {

    PRIVATE $IDUSUARIOS;
    private $PRIMER_NOMBRE;
    private $SEGUNDO_NOMBRE;
    private $PRIMER_APELLIDO;
    private $SegundoApellido;
    private $NUMERO_CONTACTO;
    private $EDAD;
    private $NumeroIdentificacion;
    private $FechaNacimiento;
    private $Constrasena;
    private $Estado;
    private $TipoRol;

    //metodos magicos get y set
    public function __GET($atributo) {
        return $this->$atributo;
    }

    public function __SET($atributo, $value) {
        $this->$atributo = $value;
    }

    function __construct($db) {
        try {
            $this->db = $db;
        } catch (PDOException $e) {
            exit('Database connection could not be established.');
        }
    }

    public function registrar() {

        $sql = 'CALL RU_RegistrarUsuarios(?,?,?,?,?,?,?,?,?)';

        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->PRIMER_NOMBRE);
        $sth->bindParam(2, $this->SEGUNDO_NOMBRE);
        $sth->bindParam(3, $this->PRIMER_APELLIDO);
        $sth->bindParam(4, $this->SegundoApellido);
        $sth->bindParam(5, $this->NUMERO_CONTACTO);
        $sth->bindParam(6, $this->EDAD);
        $sth->bindParam(7, $this->NumeroIdentificacion);
        $sth->bindParam(8, $this->FechaNacimiento);
        $sth->bindParam(9, $this->Constrasena);
        return $sth->execute();
    }

    public function listar() {
        $sql = 'CALL RU_ListarPersonas()';
        $sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
    }

    public function listarRoles() {
        $sql = 'CALL RU_ListarNombreRol()';
        $sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
    }

    public function Modificar() {
        $sql = 'CALL RU_ActualizarUsuario(?,?,?,?,?,?,?,?,?,?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->__GET("IDUSUARIOS"));
        $sth->bindParam(2, $this->__GET("PRIMER_NOMBRE"));
        $sth->bindParam(3, $this->__GET("SEGUNDO_NOMBRE"));
        $sth->bindParam(4, $this->__GET("PRIMER_APELLIDO"));
        $sth->bindParam(5, $this->__GET("SegundoApellido"));
        $sth->bindParam(6, $this->__GET("NUMERO_CONTACTO"));
        $sth->bindParam(7, $this->__GET("EDAD"));
        $sth->bindParam(8, $this->__GET("NumeroIdentificacion"));
        $sth->bindParam(9, $this->__GET("FechaNacimiento"));
        $sth->bindParam(10, $this->__GET("Constrasena"));
        return $this->execute();
    }

    public function ConsultarID() {
        $sql = 'CALL RU_ListarPersonaID(?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->IDUSUARIOS);
        $sth->execute();
        return $sth->fetch();
    }

    public function ModificarEstado() {
        $sql = 'CALL RU_ActualizarEstadoPersona(?,?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->IDUSUARIOS);
        $sth->bindParam(2, $this->Estado);
        return $sth->execute();
    }

    public function Eliminar()
    {
       $sql= "CALL RU_EliminarPersonas(?)";
       $sth = $this->db->prepare($sql);
       $sth->bindParam(1, $this->IDUSUARIOS);
      return $sth->execute();
    }

}
