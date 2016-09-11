<?php

class MldMarca_has_producto{

	private $IdMarca;
	private $IDPRODUCTO;

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

	public function registrar()
	{
		$sql= 'CALL RU_RegistrarMarca_has_producto(?,?)';
		$sth= $this->db->prepare($sql);
		$sth->bindParam(1, $this->IdMarca);
		$sth->bindParam(2, $this->IDPRODUCTO);
        return $sth->execute();
	}

	public function Eliminar()
  	{
	    $sql = 'CALL RU_EliminiarMarca_has_productoPorMarca(?)';
	    $sth = $this->db->prepare($sql);
	    $sth->bindParam(1, $this->IdMarca);
	    return $sth->execute();
  	}

}