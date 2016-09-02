<?php

class MldNoticias {

	private $IdNoticias;
	private $Titulo;
	private $Descripcion;
	private $ImagenUrl;
	private $VideoUrl;
    private $Estado;

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

    public function Listar()
    {
        $sql = 'CALL RU_ListarNoticas()';
        $sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();

    }

    public function Eliminar()
    {
        $sql ='CALL RU_EliminiarNoticias(?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->IdNoticias);
        return $sth->execute();    
    }

    public function CambiarEstado()
    {
        $sql ='CALL RU_ActualizarEstadoNoticia(?,?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->IdNoticias);
        $sth->bindParam(2, $this->Estado);
        return $sth->execute();    
    }

}
