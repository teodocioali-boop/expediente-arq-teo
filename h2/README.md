# H2: SOLID Aplicado

## Antes (Violación de SRP y DIP)
La clase `GestorTareas` se encargaba de: consultar la base de datos, calcular la ruta y enviar notificaciones push. Si cambiaba la forma de notificar, había que modificar toda la clase.

## Después (Aplicando SOLID)
- **SRP:** Se dividió en `RepositorioTareas`, `CalculadorRuta` y `Notificador`.
- **DIP:** Se crearon interfaces (`INotificador`, `IRepositorio`) para que la lógica de negocio no dependa de implementaciones concretas (ej. Firebase, PostgreSQL).