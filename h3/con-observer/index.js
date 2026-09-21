// Patrón Observer: El Gestor de Tareas avisa al Despachador
class GestorTareas {
    constructor() { this.observers = []; }
    suscribir(observer) { this.observers.push(observer); }
    notificar(tarea, estado) {
        this.observers.forEach(obs => obs.actualizar(tarea, estado));
    }
    completarTarea(tarea) {
        console.log(`[Técnico] Tarea ${tarea.id} completada.`);
        this.notificar(tarea, "Completada");
    }
}

class Despachador {
    actualizar(tarea, estado) {
        console.log(`[Despachador] Notificación: La tarea ${tarea.id} ahora está: ${estado}`);
    }
}

// Prueba
const gestor = new GestorTareas();
gestor.suscribir(new Despachador());
gestor.completarTarea({ id: 101 });