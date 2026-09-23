
---

## 🩺 PARTE 2: La cirugía SOLID (8 pts)

### 2.1 `detecciones.md` (4.5 pts)
**Archivo:** `detecciones.md`

```markdown
# Detecciones SOLID - Esqueleto Variante A

## Violación 1: SRP (Single Responsibility Principle)
- **Dónde:** Clase `GestorDePedidos`, método `ProcesarPedido`.
- **Por qué:** La clase tiene 4 responsabilidades distintas: calcular el precio, persistir en BD, imprimir el vale y enviar el correo. Tiene 4 razones para cambiar. Debería delegar cada responsabilidad a una clase especializada.

## Violación 2: OCP (Open/Closed Principle)
- **Dónde:** El `switch (tipoMenu)` dentro de `ProcesarPedido`.
- **Por qué:** El cálculo del precio está en un `switch` que obliga a modificar la clase `GestorDePedidos` cada vez que se agrega un nuevo tipo de menú (por ejemplo "sin gluten"). Debería extenderse sin modificar el código existente, por ejemplo con una jerarquía de estrategias de precio.

## Violación 3: DIP (Dependency Inversion Principle)
- **Dónde:** Las líneas `new BaseDeDatosComedor()` y `new CorreoUniversitario()` dentro de `ProcesarPedido`.
- **Por qué:** La clase de alto nivel `GestorDePedidos` instancia directamente clases concretas de bajo nivel. Debería depender de abstracciones (interfaces) inyectadas en el constructor, para poder cambiar la BD o el canal de notificación sin tocar el Gestor.