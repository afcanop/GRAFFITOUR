  <?php

class MldColor {

    private $IDcolor;
    private $Nombrecolor;

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

    PUBLIC function ListaColores(){
     $sql= 'CALL RU_ListaColores()';
     $sth= $this->db->prepare($sql);
     $sth->execute();
     return $sth->fetchall();
    }

}