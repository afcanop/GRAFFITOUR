<?php

class MldOfertas_Has_Productos {

    private $OFERTAS_IDOFERTAS;
    private $PRODUCTOS_IDPRODUCTOS;


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

    public function Registrar()
    {
       $sql = 'CALL RU_RegistrarOfertas_has_productos(?,?)';
        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->OFERTAS_IDOFERTAS);
        $sth->bindParam(2, $this->PRODUCTOS_IDPRODUCTOS);
        $sth->execute();
        $this->db->lastInsertId();
    }
 
     
    
}