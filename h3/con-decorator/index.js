// Patrón Decorator: Agregar funcionalidades al reporte
class ReporteBase {
    generar() { return "Reporte de Cierre Básico"; }
}

class ReporteDecorator {
    constructor(reporte) { this.reporte = reporte; }
    generar() { return this.reporte.generar(); }
}

class ReporteConSello extends ReporteDecorator {
    generar() { return `${this.reporte.generar()} + Sello de Garantía`; }
}

class ReporteConQR extends ReporteDecorator {
    generar() { return `${this.reporte.generar()} + Código QR`; }
}

// Prueba
let reporte = new ReporteBase();
reporte = new ReporteConSello(reporte);
reporte = new ReporteConQR(reporte);
console.log(reporte.generar());