classDiagram
    class Estudiante {
        +string nombre
        +string codigo
    }
    class Pedido {
        +int id
        +string estado
        +DateTime fecha
        +calcularTotal()
    }
    class Menu {
        +string tipo
        +decimal precio
    }
    class Cajero {
        +registrarPedido()
    }
    class Administrador {
        +ajustarPrecio()
        +anularPedido()
    }
    class Notificador {
        +enviarAviso()
    }

    Estudiante "1" --> "*" Pedido : realiza
    Pedido "*" --> "*" Menu : contiene
    Cajero --> Pedido : registra
    Administrador --> Pedido : gestiona
    Pedido --> Notificador : notifica