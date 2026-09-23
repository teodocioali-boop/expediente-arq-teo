// Refactor: Teodocio Ali Laura

namespace Integradora.Comedor;

// --- Abstracciones (DIP) ---
public interface IRepositorioPedidos
{
    void GuardarPedido(string estudiante, string tipoMenu, int cantidad, decimal total);
}

public interface INotificador
{
    void Enviar(string mensaje);
}

// --- Clase de alto nivel que ahora depende de abstracciones ---
public class GestorDePedidos
{
    private readonly IRepositorioPedidos _repositorio;
    private readonly INotificador _notificador;

    public GestorDePedidos(IRepositorioPedidos repositorio, INotificador notificador)
    {
        _repositorio = repositorio;
        _notificador = notificador;
    }

    public void ProcesarPedido(string estudiante, string tipoMenu, int cantidad)
    {
        decimal precioBase = tipoMenu switch
        {
            "estandar" => 12,
            "vegetariano" => 14,
            "beca" => 5,
            _ => 12
        };
        decimal total = precioBase * cantidad;

        _repositorio.GuardarPedido(estudiante, tipoMenu, cantidad, total);
        Console.WriteLine("----- VALE DE COMEDOR -----");
        Console.WriteLine($"{estudiante}: {cantidad} x menú {tipoMenu}");
        Console.WriteLine($"TOTAL: {total:0.00} Bs");
        _notificador.Enviar($"Pedido registrado: {cantidad} x {tipoMenu}, {estudiante}");
    }
}

// --- Implementaciones concretas que ahora implementan las interfaces ---
public class BaseDeDatosComedor : IRepositorioPedidos
{
    public void GuardarPedido(string estudiante, string menu, int cantidad, decimal total)
        => Console.WriteLine($"[BD] INSERT INTO pedidos VALUES ('{estudiante}', '{menu}', {cantidad}, {total})");
}

public class CorreoUniversitario : INotificador
{
    public void Enviar(string mensaje) => Console.WriteLine($"[CORREO] {mensaje}");
}

public static class Demo
{
    public static void Correr()
    {
        var repo = new BaseDeDatosComedor();
        var correo = new CorreoUniversitario();
        new GestorDePedidos(repo, correo).ProcesarPedido("Noelia", "vegetariano", 2);
    }
}