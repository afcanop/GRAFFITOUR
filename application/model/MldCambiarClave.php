  <?php

class MldCambiarClave {

    private $Constrasena;
    private $NumeroIdentificacion;

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

    public function recuperarContrasena() {
        $sql = 'CALL RU_OlvideContrasena(?,?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->Constrasena);
         $sth->bindParam(2, $this->NumeroIdentificacion);
        return $sth->execute();
    }
}