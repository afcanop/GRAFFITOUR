<?php

class MldNoticias {

	private $IdNoticias;
	private $Titulo;
	private $Descripcion;
	private $ImagenUrl;
	private $VideoUrl;

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

        $sql = 'CALL RU_RegistrarNoticas(?,?,?,?)';

        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->Titulo);
        $sth->bindParam(2, $this->Descripcion);
        $sth->bindParam(3, $this->ImagenUrl);
        $sth->bindParam(4, $this->VideoUrl);

        return $sth->execute();
    }


}
