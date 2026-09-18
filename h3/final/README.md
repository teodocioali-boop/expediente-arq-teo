# H3 Final: La Fusión (Observer + Strategy)

## ¿Por qué estos dos?
Mi caso necesita **Strategy** porque las órdenes de trabajo tienen diferentes prioridades y cálculos de ruta según el tipo de servicio. Necesito algoritmos intercambiables.
Mi caso necesita **Observer** porque cuando el técnico termina una tarea, el Despachador y el Sistema de Inventario deben enterarse inmediatamente.

## ¿Cómo funcionan juntos?
El `CalculadorDeRuta` (Strategy) determina la mejor ruta. Una vez que el técnico completa la tarea, el `GestorDeTareas` (Sujeto) notifica a los `Observadores` (Despachador, Inventario) que la tarea ha finalizado. Los patrones conviven en un mismo módulo que corre.