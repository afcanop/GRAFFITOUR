<?php

class MldUsuario {

    private $PRIMER_NOMBRE;
    private $SEGUNDO_NOMBRE;
    private $PRIMER_APELLIDO;
    private $SegundoApellido;
    private $NUMERO_CONTACTO;
    private $EDAD;
    private $NumeroIdentificacion;
    private $FechaNacimiento;
    private $Constrasena;
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
        $sth->bindParam(6, $this->NUMERO_CONTACTO);
        $sth->bindParam(5, $this->EDAD);
        $sth->bindParam(7, $this->NumeroIdentificacion);
        $sth->bindParam(8, $this->FechaNacimiento);
        $sth->bindParam(9, $this->Constrasena);
        return $sth->execute();
    }

    public function listar() {
        $sql = 'CALL RU_ListarTodo()';
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

}
