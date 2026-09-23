// Sujeto
public class Pedido
{
    private List<IObservador> _observadores = new();
    public void Suscribir(IObservador obs) => _observadores.Add(obs);
    public void Notificar(string mensaje)
    {
        foreach (var obs in _observadores) obs.Actualizar(mensaje);
    }
    public void MarcarPreparado()
    {
        Notificar("Tu pedido está listo para recoger");
    }
}

// Observador
public interface IObservador
{
    void Actualizar(string mensaje);
}

public class Estudiante : IObservador
{
    public string Nombre { get; set; }
    public void Actualizar(string mensaje) => Console.WriteLine($"[AVISO a {Nombre}]: {mensaje}");
}