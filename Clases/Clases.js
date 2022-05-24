class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

   getFullName() { //OK
        return `${this.nombre} ${this.apellido}`;
   }
   
   addMascota(mascota) { //OK
         this.mascotas.push(mascota);
   }

   countMascotas() { //OK
       return this.mascotas.length;
   }

   addBook(nombre, autor) { //OK
         this.libros.push({
              nombre: nombre,
              autor: autor
         });   
   }

   getBookNames() { //OK
         return this.libros.map(libro => libro.nombre);
   }
}

//Se instancia un objeto de la clase Usuario
let usuario = new Usuario('Lautaro', 'Reina', [], []);

//Se agregan libros
usuario.addBook('El señor de los anillos', 'J.R.R. Tolkien');
usuario.addBook('Harry Potter', 'J.K. Rowling');

//Se agregan mascotas
usuario.addMascota('Perro');
usuario.addMascota('Gato');
usuario.addMascota('Tortuga');

//Se imprimen los datos
console.log(`
    Nombre completo: ${usuario.getFullName()}
    Mascotas que tiene: ${usuario.mascotas}
    ${usuario.nombre} tiene ${usuario.countMascotas()} mascotas
    ${usuario.nombre} tiene los siguientes libros: ${usuario.getBookNames()}
`);