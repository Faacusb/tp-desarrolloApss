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

// Ejercicio 9: Crear una fila para números, una fila para strings, y una fila para animales

const filaNumeros = new FilaGenerica<number>();
const filaStrings = new FilaGenerica<string>();
const filaAnimales = new FilaGenerica<Animal>();