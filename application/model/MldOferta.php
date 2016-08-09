  <?php

class MldOferta {

    private $IDOFERTAS;
    private $Valor;
    private $FECHAINICIO;
    private $FECHAFINAL;
    private $FECHAREGISTRO;


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
    $sql = 'CALL RU_RegistrarOferta(?,?,?,?)';
    $sth = $this->db->prepare($sql);
    $sth->bindParam(1, $this->Valor);
    $sth->bindParam(2, $this->FECHAINICIO);
    $sth->bindParam(3, $this->FECHAFINAL);
    $sth->bindParam(4, $this->FECHAREGISTRO);

    return $sth->execute();
    }

}