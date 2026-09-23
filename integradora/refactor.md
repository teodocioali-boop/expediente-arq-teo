// Refactor: Teodocio Ali Laura

namespace Integradora.Comedor;

public interface IRepositorioPedidos
{
    void GuardarPedido(string estudiante, string tipoMenu, int cantidad, decimal total);
}

public interface INotificador
{
    void Enviar(string mensaje);
}

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
        Console.WriteLine($"VALE: {estudiante} - {cantidad} x {tipoMenu} - TOTAL: {total:0.00} Bs");
        _notificador.Enviar($"Pedido registrado: {cantidad} x {tipoMenu}");
    }
}