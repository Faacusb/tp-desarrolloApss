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