/* Trabajo Práctico “Introducción a TypeScript”
Desarrollo de Aplicaciones Web - 2026
Tecnicatura Universitaria en Desarrollo Web
 */

// Ejercicio 1
interface Animal {
  nombre: string;
  gritar () : string;

}


// Ejercicio 2
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


// Ejercicio 3
function describirAnimal (animal: Animal) {
  console.log(animal.nombre + " hace " + animal.gritar());
}


// Ejercicio 4
const perro: Perro = new Perro("Plumis");
const vaca: Vaca = new Vaca("Lola");
const gato: Gato = new Gato("Tom");


// Ejercicio 5
describirAnimal(perro);
describirAnimal(vaca);
describirAnimal(gato);


// Ejercicio 6
enum DiasSemana {
    Lunes = "Lunes",
    Martes = "Martes",
    Miercoles = "Miércoles",
    Jueves = "Jueves",
    Viernes = "Viernes",
    Sabado = "Sábado",
    Domingo = "Domingo"
}

// Ejemplo sencillo para ver que funciona
const diaActual: DiasSemana = DiasSemana.Miercoles;
console.log("Día actual:", diaActual);


// Ejercicio 7
let valorDato: string | number;

// Primero guardamos el nombre que pide el enunciado
valorDato = "Messi";
console.log("Primer valor:", valorDato);

// Después lo cambiamos por el número 10
valorDato = 10;
console.log("Valor modificado:", valorDato);

// Si intentamos poner otro tipo (por ejemplo un booleano) TypeScript nos avisa que está mal
// valorDato = true;


// Ejercicio 8
interface Fila<T> {
    agregar(elemento: T): void;
    remover(): T | undefined;
}

class FilaGenerica<T> implements Fila<T> {
    elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    remover(): T | undefined {
        return this.elementos.shift();
    }
}


// Ejercicio 9
const filaNumeros: Fila<number> = new FilaGenerica<number>();
const filaStrings: Fila<string> = new FilaGenerica<string>();
const filaAnimales: Fila<Animal> = new FilaGenerica<Animal>();


// Ejercicio 10
// En la fila de animales, agregamos las 3 instancias creadas anteriormente
filaAnimales.agregar(perro);
filaAnimales.agregar(vaca);
filaAnimales.agregar(gato);

// En la fila de números, agregamos 3 números a elección
filaNumeros.agregar(10);
filaNumeros.agregar(20);
filaNumeros.agregar(30);

// En la fila de strings, agregamos 3 cadenas de texto a elección
filaStrings.agregar("Messi");
filaStrings.agregar("Scaloni");
filaStrings.agregar("Di Maria");

// Removemos un elemento de cada una de las 3 filas
const numeroRemovido = filaNumeros.remover();
const stringRemovido = filaStrings.remover();
const animalRemovido = filaAnimales.remover();