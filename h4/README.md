# H4: Documentación C4

## Nivel 1: Diagrama de Contexto

```mermaid
C4Context
    title Diagrama de Contexto - App de Campo para Técnicos

    Person(tecnico, "Técnico de Campo", "Instala y repara servicios en el domicilio del cliente")
    Person(despachador, "Despachador", "Asigna tareas y monitorea a los técnicos")
    
    System(app, "App de Campo", "Gestiona las órdenes de trabajo, rutas y reportes de los técnicos")
    
    System_Ext(inventario, "Sistema de Inventario", "Controla el stock de equipos")
    System_Ext(red, "Sistema de Monitoreo", "Verifica si el servicio del cliente está activo")
    System_Ext(mapas, "API de Mapas", "Proporciona rutas y ubicaciones")

    Rel(tecnico, app, "Consulta tareas y reporta avances")
    Rel(despachador, app, "Asigna y supervisa tareas")
    Rel(app, inventario, "Consulta stock", "API")
    Rel(app, red, "Verifica activación", "API")
    Rel(app, mapas, "Obtiene rutas", "API")