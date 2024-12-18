class Billete {
    // constructor
    constructor(destino, precio,bandera){
        this.destino = destino;
        this.precio = precio;
        this.bandera = bandera;
    }
    // getters y setters
    getDestino = () =>{
        return this.destino;
    }

    setDestino = (destino) =>{
        this.destino = destino;
    }

    getPrecio = () => {
        return this.precio;
    }

    setPrecio = (precio) => {
        this.precio = precio;
    }

    getBandera = () => {
        return this.bandera;
    }

    setBandera = (bandera) => {
        this.bandera = bandera;
    }
}