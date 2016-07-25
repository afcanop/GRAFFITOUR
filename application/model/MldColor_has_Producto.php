<?php

class MldColor_has_Producto{

	private $IDColor;
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
		$sql= 'CALL RU_RegistrarColor_has_producto(?,?)';
		$sth= $this->db->prepare($sql);
		$sth->bindParam(1, $this->IDColor);
		$sth->bindParam(2, $this->IDPRODUCTO);
        return $sth->execute();
	}

}