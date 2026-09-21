// Patrón Strategy: Diferentes formas de calcular prioridad
class CalculadorPrioridad {
    calcular(tarea) { throw new Error("Método no implementado"); }
}

class PrioridadUrgente extends CalculadorPrioridad {
    calcular(tarea) { return "ALTA (Reparación urgente)"; }
}

class PrioridadMantenimiento extends CalculadorPrioridad {
    calcular(tarea) { return "MEDIA (Mantenimiento programado)"; }
}

class GestorTareas {
    constructor(estrategia) { this.estrategia = estrategia; }
    setEstrategia(estrategia) { this.estrategia = estrategia; }
    calcularPrioridad(tarea) { return this.estrategia.calcular(tarea); }
}

// Prueba
const gestor = new GestorTareas(new PrioridadUrgente());
console.log(`Prioridad: ${gestor.calcularPrioridad({ tipo: "Urgente" })}`);

gestor.setEstrategia(new PrioridadMantenimiento());
console.log(`Prioridad: ${gestor.calcularPrioridad({ tipo: "Mantenimiento" })}`);