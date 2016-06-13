<?php

class MldProductos {
    
    private $IDPRODUCTOS;
    private $NOMBREPRODUCTO;
    private $DESCRIPCION;
    private $IMAGEN;
    private $ESTADO;
    private $Color;
    private $Marca;
    private $Precio; 
    private $IDCATEGORIA;


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
       $sql = 'CALL RU_RegistrarProductos(?,?,?,?,?,?,?)';

        $sth = $this->db->prepare($sql);
        $sth->bindParam(1, $this->NOMBREPRODUCTO);
        $sth->bindParam(2, $this->DESCRIPCION);
        $sth->bindParam(3, $this->IMAGEN);
        $sth->bindParam(4, $this->Color);
        $sth->bindParam(5, $this->Marca);
        $sth->bindParam(6, $this->Precio);
        $sth->bindParam(7, $this->IDCATEGORIA);
        return $sth->execute();
    }

    PUBLIC function ListarProductosPublicos(){
        $sql= 'CALL RU_ListarProductos()';
        $sth= $this->db->prepare($sql);
        $sth->execute();
        return $sth->fetchall();
    }
}