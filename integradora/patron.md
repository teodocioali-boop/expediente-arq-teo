# Parte 3: Aplicación de Patrón

## Requerimiento que pide el patrón
"Cuando un pedido queda preparado, el estudiante debe recibir un aviso."

## Patrón aplicado
**Observer**

## Diseño (con nombres del comedor)

```csharp
// Sujeto observable
public class Pedido
{
    private readonly List<IObservador> _observadores = new();
    public string Estado { get; private set; } = "solicitado";

    public void Suscribir(IObservador obs) => _observadores.Add(obs);
    public void Desuscribir(IObservador obs) => _observadores.Remove(obs);

    private void Notificar(string mensaje)
    {
        foreach (var obs in _observadores)
            obs.Actualizar(mensaje);
    }

    public void MarcarPreparado()
    {
        Estado = "preparado";
        Notificar("Tu pedido está listo para recoger en el comedor Sabor Andino.");
    }
}

// Observador
public interface IObservador
{
    void Actualizar(string mensaje);
}

public class Estudiante : IObservador
{
    public string Nombre { get; set; } = "";
    public void Actualizar(string mensaje)
        => Console.WriteLine($"[AVISO a {Nombre}]: {mensaje}");
}

// Uso
var pedido = new Pedido();
var noelia = new Estudiante { Nombre = "Noelia" };
pedido.Suscribir(noelia);
pedido.MarcarPreparado();