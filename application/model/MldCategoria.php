  <?php

  class MldCategoria {


  private	$IdCategoria;
  private	$NombreCategoria;
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


	public function registrar() {
		$sql = 'CALL RU_RegistrarCategoria(?)';
		$sth = $this->db->prepare($sql);
		$sth->bindParam(1, $this->NombreCategoria);
		return $sth->execute();
	}

  public function Listar()
  {
        $sql = 'CALL RU_listarCategoriasTodas()';
        $sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
  }

  public function ListarNombre()
  {
        $sql = 'CALL RU_ListarNombreCategoria()';
        $sth = $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
  }



}

