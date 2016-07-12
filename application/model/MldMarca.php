<?php

  class MldMarca {


  private	$IdMarca;
  private	$NombreMarca;
  private	$Estado;

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


	public function Registrar() {
		$sql = 'CALL RU_RegistrarMarca(?)';
		$sth = $this->db->prepare($sql);
		$sth->bindParam(1, $this->NombreMarca);
		return $sth->execute();
	}

	public function Listar()
	{
		$sql= 'CALL RU_ListarMarca()';
		$sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
	}

    public function ModificarEstado() {
    $sql = 'CALL RU_ActualizarEstadoMarca(?,?)';
    $sth = $this->db->prepare($sql);
    $sth->bindParam(1, $this->IdMarca);
    $sth->bindParam(2, $this->Estado);
    return $sth->execute();
  }
}