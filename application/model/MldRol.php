<?php

class MldRol {

    private $idRol;
    private $NombreRol;
    private $FECHA_REGISTRO;
    private $Despripcion;

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
        $sql = 'CALL RU_RegistrarROl(?,?,?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->NombreRol);
        $sth->bindParam(2, $this->Despripcion);
        $sth->bindParam(3, $this->FECHA_REGISTRO);
        return $sth->execute();
    }
    
       public function listarRoles() {
        $sql = 'CALL RU_ListarRoles()';
        $sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
    }

}
