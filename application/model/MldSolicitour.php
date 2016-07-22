
<?php

class MldSolicitour {

	private $IdSolicitud; 
	private $PrimerNombre; 
	private $SegundoNombre; 
	private $PrimerApellido; 
	private $SegundoApellido; 
	private $Email; 
	private $Fecha;
	private $Hora; 
	private $CantidadPersonas; 
	private $Estado;
	private $Nombre;
	private $pdo;

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
		$sql = 'CALL RU_RegistrarSolicitud(?,?,?,?,?,?,?,?)';
		$sth = $this->db->prepare($sql);
		$sth->bindParam(1, $this->PrimerNombre);
		$sth->bindParam(2, $this->PrimerNombre);
		$sth->bindParam(3, $this->SegundoApellido);
		$sth->bindParam(4, $this->SegundoApellido);
		$sth->bindParam(5, $this->Email);
		$sth->bindParam(6, $this->Fecha);
		$sth->bindParam(7, $this->Hora);
		$sth->bindParam(8, $this->CantidadPersonas);
		return $sth->execute();
	}

	public function CantidadSolicitudes()
	{
		$sql = 'CALL RU_CatidadSolicitudas()';
		 $sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetch();
	}

	public function ListarSolicitudes()
	{
		$sql = 'CALL RU_ListarSolicitudes()';
		 $sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
	}

	public function UltimoID(){
		$this->pdo->lastInsertId();
	}


	public function ListarActivas()
	{
		$sql = 'CALL RU_ListarSolicitudesActivas()';
		$sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
	}

}