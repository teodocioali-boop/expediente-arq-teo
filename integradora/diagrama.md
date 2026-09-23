# Diagrama de Clases - Sistema "Sabor Andino"

```mermaid
%% Diagrama realizado por: Teodocio Ali Laura

classDiagram
    class Estudiante {
        +string nombre
        +string codigo
        +recibirAviso(mensaje)
    }
    class Pedido {
        +int id
        +string estado
        +DateTime fecha
        +List~Menu~ menus
        +calcularTotal() decimal
        +cambiarEstado(nuevoEstado)
        +marcarPreparado()
    }
    class Menu {
        +string tipo
        +decimal precio
    }
    class Usuario {
        +string nombre
        +string ci
    }
    class Cajero {
        +registrarPedido(estudiante, tipoMenu, cantidad)
    }
    class Administrador {
        +ajustarPrecio(tipoMenu, nuevoPrecio)
        +anularPedido(pedido)
        +generarReporte() Reporte
    }
    class Reporte {
        +Dictionary~string,int~ menusVendidos
        +generar()
    }
    class IObservador {
        <<interface>>
        +actualizar(mensaje)
    }

    Usuario <|-- Cajero
    Usuario <|-- Administrador
    IObservador <|.. Estudiante
    Estudiante "1" --> "*" Pedido : realiza
    Pedido "*" --> "*" Menu : contiene
    Cajero --> Pedido : registra
    Administrador --> Pedido : gestiona
    Administrador --> Reporte : genera
    Pedido --> IObservador : notifica