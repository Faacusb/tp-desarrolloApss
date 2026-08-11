
 //  ejercicio 1 //
interface Animal {
  nombre: string;
  gritar () : string;

}

// ejercicio 2 //


class perro implements Animal {
nombre :string = "perro";
gritar(): string {
    return "Guau";
}
}


class gato implements Animal {
nombre :string = "gato";
gritar(): string {
    return "Miau";
}
}


class vaca  implements Animal {
nombre :string = "vaca";
gritar(): string {
    return "Muu";
}
}


//ejercicio 3


function  describirAnimal (Animal: Animal) {
  console.log(Animal.nombre + " dice: " + Animal.gritar());
}

