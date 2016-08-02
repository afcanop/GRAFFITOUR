<?php

class MldRol {

    private $IDROL;
    private $TipoRol;
    private $Estado;

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
        $sql = 'CALL RU_RegistrarROl(?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->TipoRol);
        return $sth->execute();
    }

    public function listarRoles() {
        $sql = 'CALL RU_ListarRol()';
        $sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
    }

    public function ModificarEstado() {
        $sql = 'CALL RU_ActualizarEstadoRol(?,?)';

        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->IDROL);
        $sth->bindParam(2, $this->Estado);
        return $sth->execute();
    }

    public function ConsultarRolID() {
        $sql = 'CALL Ru_ListarRolID(?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->IDROL);
        $sth->execute();
        return $sth->fetch();
    }

    public function actualizarTipoRol() {
        $sql = 'CALL RU_ActualizarTipoRol(?,?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->IDROL);
        $sth->bindParam(2, $this->TipoRol);
        
        return $sth->execute();
        
    }

    public function Eliminar(){
        $sql ='CALL RU_EliminarRol(?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->IDROL);
        return $sth->execute();
        
    }

    public function listarGuias()
    {
        $sql = 'CALL RU_listarGuias()';
        $sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
    }

    public function listarTraductores()
    {
        $sql = 'CALL RU_ListarTraductores()';
        $sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
    }

    public function listarOtrosRoles()
    {
        $sql = 'CALL RU_ListarOtrosRoles()';
        $sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
    }

}
