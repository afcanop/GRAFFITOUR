  <?php

  class MldPersona_has_tour {

    private $Persona_IDUSUARIOS;
    private $TOUR_IDTOUR;
    private $FechaRegistro;
    private $HoraRegistro;
    private $FechaInicioReporte;
    private $FechaFinalReporte;

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
       $sql= 'CALL RU_RegistrarPersona_has_tour(?,?,?,?)';
       $sth= $this->db->prepare($sql);
       $sth->bindParam(1, $this->Persona_IDUSUARIOS);
       $sth->bindParam(2, $this->TOUR_IDTOUR);
       $sth->bindParam(3, $this->FechaRegistro);
       $sth->bindParam(4, $this->HoraRegistro);
       return $sth->execute();
   }

   public function ConsultarFecha()
   {
    $sql= 'CALL RU_InformeEntreFechas(?,?)';
    $sth = $this->db->prepare($sql);
    $sth->bindParam(1, $this->FechaInicioReporte);
    $sth->bindParam(2, $this->FechaFinalReporte);
    $sth->execute();
    return $sth->fetchAll();
    }


}