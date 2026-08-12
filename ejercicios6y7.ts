
// Punto 6: Enumeración con los días de la semana
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


// Punto 7: Variable que acepta solo número o texto
let valorDato: string | number;

// Primero guardamos el nombre que pide el enunciado
valorDato = "Messi";
console.log("Primer valor:", valorDato);

// Después lo cambiamos por el número 10
valorDato = 10;
console.log("Valor modificado:", valorDato);

// Si intentamos poner otro tipo (por ejemplo un booleano) TypeScript nos avisa que está mal
// valorDato = true;
