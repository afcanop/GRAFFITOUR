<?php

class MldLogin {

    private $NUMERO_CEDULA;
    private $CONTRASENA;
    private $db;

    function __construct() {

        function __construct($db) {
            try {
                $this->db = $db;
            } catch (PDOException $e) {
                exit('Database connection could not be established.');
            }
        }

    }

    public function __GET($atributo) {
        return $this->$atributo;
    }

    public function __SET($atributo, $value) {
        $this->$atributo = $value;
    }

    public function login() {
        $sql = " CALL RU_LOGIN(?)";
        $stm = $this->db->prepare($sql);
        $stm->bindParam(1, $this->NUMERO_CEDULA);
        $stm = execute();
        return $stm->fetch();
    }

}
