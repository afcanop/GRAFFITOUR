  <?php

  class MldTour {

    private $IDTOUR;
    private $FECHATOUR;
    private $HoraTour;
    private $Solicitud_idSolicitud;

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
     $sql= 'CALL RU_RegistroTour(?,?,?)';
     $sth= $this->db->prepare($sql);
     $sth->bindParam(1, $this->FECHATOUR);
     $sth->bindParam(2, $this->HoraTour);
     $sth->bindParam(3, $this->Solicitud_idSolicitud);
     return $sth->execute();
    }

    public function ListarID()
    {
     $sql = 'CALL RU_ListarUltimoIdTour()';
     $sth = $this->db->prepare($sql);
     $sth->execute();
     return $sth->fetchAll();
    }

    public function ListarAgenda()
    {
     $sql = 'CALL ListaAgenda()';
     $sth = $this->db->prepare($sql);
     $sth->execute();
     return $sth->fetchAll();
    }
}