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
}