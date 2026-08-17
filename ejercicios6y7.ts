// Punto 6: Días de la semana
 enum DiasSemana {
     Lunes = "Lunes",
     Martes = "Martes",
     Miercoles = "Miércoles",
     Jueves = "Jueves",
     Viernes = "Viernes",
     Sabado = "Sábado",
     Domingo = "Domingo"
 }
 // Prueba del enum
 const diaActual = DiasSemana.Miercoles;
 console.log("Día actual:", diaActual);
 
// Punto 7: Puede ser texto o número
 let valor: string | number;
 valor = "Messi";
 console.log("Primer valor:", valor);
 valor = 10;
 console.log("Segundo valor:", valor);
 // valor = true; // Error: no permite otro tipo