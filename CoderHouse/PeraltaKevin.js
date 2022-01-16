class Usuario{
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return console.log(`Nombre completo del usuario:  ${this.nombre} ${this.apellido} `)
    }

    addMascota(mascota){
        this.mascotas.Push(mascota);
        return;
    }

    countMascotas(){
        return console.log(this.mascotas.length);
    }

    addBook(titulo,autor){
        this.libros.Push({titulo:titulo,autor:autor})
        return;
    }

    getBookNames(){        
        let nombres = this.libros.map(nombres => nombres.titulo);
        return console.log(nombres);
    }
}

let usuario1 = new Usuario('Kevin','Peralta',[{titulo:'La naranja mecánica', autor:'Anthony Burgess'}],['Fido']);

usuario1.countMascotas();
usuario1.addMascota('Michi');
addBook('La odisea', 'Homero');
usuario1.getBookNames();