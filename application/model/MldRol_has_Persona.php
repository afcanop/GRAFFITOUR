<?php

class MldRol_has_Persona{

	private $ROL_IDROL;
	private $Persona_IDUSUARIOS;

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
		$sql= 'CALL RU_RegistrarRol_has_Persona(?,?)';
		$sth= $this->db->prepare($sql);
		$sth->bindParam(1, $this->ROL_IDROL);
		$sth->bindParam(2, $this->Persona_IDUSUARIOS);
        return $sth->execute();
	}

	
	public function EliminarIdPersona()
	{
		 $sql ='CALL RU_EliminarRol_has_persona_porPersona(?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->Persona_IDUSUARIOS);
        return $sth->execute();
	}

		public function EliminarIdRol()
	{
		 $sql ='CALL RU_EliminarRol_has_persona_porRol(?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->ROL_IDROL);
        return $sth->execute();
	}

}