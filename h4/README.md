# H4: Documentación C4 - Sistema de Gestión de Órdenes de Trabajo

## Nivel 1: Diagrama de Contexto

```mermaid
C4Container
    title Diagrama de Contenedores - SGT-Telecom

    Person(tecnico, "Técnico", "Usuario en campo")
    Person(despachador, "Despachador", "Usuario en oficina")

    Container(app_movil, "App Móvil", "Flutter", "Interfaz para el técnico")
    Container(panel_web, "Panel Web", "React", "Interfaz para el despachador")
    Container(backend, "API Backend (Fusión Observer + Strategy)", "Node.js", "Lógica de negocio: cálculo de rutas (Strategy) y notificaciones (Observer)")
    ContainerDb(db, "Base de Datos", "PostgreSQL", "Órdenes, usuarios y reportes")

    Rel(tecnico, app_movil, "Usa", "HTTPS")
    Rel(despachador, panel_web, "Usa", "HTTPS")
    Rel(app_movil, backend, "Consume API", "JSON/HTTPS")
    Rel(panel_web, backend, "Consume API", "JSON/HTTPS")
    Rel(backend, db, "Lee y escribe", "SQL")