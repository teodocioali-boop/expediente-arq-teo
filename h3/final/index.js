// --- PATRÓN STRATEGY ---
class CalculadorRuta {
    calcular(tarea) { throw new Error("Método no implementado"); }
}
class RutaRapida extends CalculadorRuta {
    calcular(tarea) { return "Ruta más rápida por autopista"; }
}
class RutaCorta extends CalculadorRuta {
    calcular(tarea) { return "Ruta más corta por calles internas"; }
}

// --- PATRÓN OBSERVER ---
class GestorTareas {
    constructor(estrategia) {
        this.estrategia = estrategia;
        this.observers = [];
    }
    suscribir(observer) { this.observers.push(observer); }
    notificar(tarea, estado) {
        this.observers.forEach(obs => obs.actualizar(tarea, estado));
    }
    completarTarea(tarea) {
        const ruta = this.estrategia.calcular(tarea);
        console.log(`[Técnico] Tarea ${tarea.id} completada usando: ${ruta}`);
        this.notificar(tarea, "Completada");
    }
}

class Despachador {
    actualizar(tarea, estado) {
        console.log(`[Despachador] Notificación: Tarea ${tarea.id} está: ${estado}`);
    }
}

// --- PRUEBA DE LA FUSIÓN ---
const gestor = new GestorTareas(new RutaRapida());
gestor.suscribir(new Despachador());
gestor.completarTarea({ id: 202 });