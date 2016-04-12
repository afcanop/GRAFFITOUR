<?php

class Model {

    private $PRIMER_NOMBRE;
    private $SEGUNDO_NOMBRE;
    private $PRIMER_APELLIDO;
    private $SEGUNDO_APELLIDO;
    private $EDAD;
    private $NUMERO_CONTACTO;
    private $NUMERO_CEDULA;
    private $FECHA_NACIMIENTO;
    private $CONTRASENA;
    private $NombreRol;

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
        $sql = 'INSERT INTO usuarios (ID,PRIMER_NOMBRE,SEGUNDO_NOMBRE,
                            PRIMER_APELLIDO,SEGUNDO_APELLIDO,EDAD,NUMERO_CONTACTO,
                            NUMERO_CEDULA,FECHA_NACIMIENTO,CONTRASENA)
            VALUES(null,?,?,?,?,?,?,?,?,?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->PRIMER_NOMBRE);
        $sth->bindParam(2, $this->SEGUNDO_NOMBRE);
        $sth->bindParam(3, $this->PRIMER_APELLIDO);
        $sth->bindParam(4, $this->SEGUNDO_APELLIDO);
        $sth->bindParam(5, $this->EDAD);
        $sth->bindParam(6, $this->NUMERO_CONTACTO);
        $sth->bindParam(7, $this->NUMERO_CEDULA);
        $sth->bindParam(8, $this->FECHA_NACIMIENTO);
        $sth->bindParam(9, $this->CONTRASENA);
        return $sth->execute();
    }

    public function listar() {
        $sql = 'CALL RU_ListarTodo()';
        $sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
    }

    public function listarRoles() {
        $sql = 'CALL RU_ListarRoles()';
        $sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
    }

}
