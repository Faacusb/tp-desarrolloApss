
 //  ejercicio 1 //
interface Animal {
  nombre: string;
  gritar () : string;

}

// ejercicio 2 //


class Perro implements Animal {
nombre :string;
constructor(n:string){
        this.nombre = n;
    }
gritar(): string {
    return "Guau";
}
}


class Gato implements Animal {
nombre :string;
constructor(n:string){
        this.nombre = n;
    }
gritar(): string {
    return "Miau";
}
}


class Vaca  implements Animal {
nombre :string;
constructor(n:string){
        this.nombre = n;
    }
gritar(): string {
    return "Muu";
}
}


//ejercicio 3


function describirAnimal (animal: Animal) {
  console.log(animal.nombre + " dice: " + animal.gritar());
}

// ejercicio 4
const perro: Perro = new Perro("Plumis");
const vaca: Vaca = new Vaca("Lola");
const gato: Gato = new Gato("Tom");

// ejercicio 5
describirAnimal(perro);
describirAnimal(vaca);
describirAnimal(gato);