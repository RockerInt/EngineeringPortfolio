---
title: DSR.Architecture
section: engineering
category: Librerías de arquitectura .NET
summary: Un conjunto personal de librerías .NET para construir backends modulares y mantenibles con DDD, Clean Architecture y CQRS. En desarrollo.
kind: personal-project
stage: in-development
role: Autor y mantenedor
stack: [C#, .NET 10, MediatR, FluentValidation, EF Core, MongoDB, SQL Server, SQLite]
repo: https://github.com/RockerInt/DSR.Architecture
license: MIT
featured: true
order: 2
modules:
  - { group: Dominio, name: Dsr.Architecture.Domain, description: "Agregados, entidades, value objects, eventos de dominio, un tipo Result y un recolector de validaciones con guards." }
  - { group: Dominio, name: Dsr.Architecture.Domain.Specifications, description: "Specifications agnósticas a la persistencia: criterios, includes, ordenamiento y paginación, además de specifications analíticas para agrupar y agregar." }
  - { group: Aplicación, name: Dsr.Architecture.Application, description: "Contratos de caso de uso, comando y consulta, con behaviors de pipeline para validación, autorización, transacciones, idempotencia, logging, métricas y manejo de excepciones." }
  - { group: Persistencia, name: Dsr.Architecture.Persistence.Abstractions, description: "Contratos de repositorio de lectura y escritura, unit of work y unit of work transaccional, y un contrato de repositorio event-sourced." }
  - { group: Persistencia, name: Dsr.Architecture.Infrastructure.Persistence.EntityFramework, description: "Repositorios EF Core, un evaluador de specifications, ejecución de consultas compiladas con caché acotada y ejecutores de logging, shadow y canary." }
  - { group: Persistencia, name: Dsr.Architecture.Infrastructure.Persistence.Mongo, description: "Repositorio y tipos base de entidad para MongoDB." }
  - { group: Persistencia, name: "…Persistence.SqlServer / …Persistence.SqlLite", description: "Repositorios y registro específicos para SQL Server y SQLite." }
  - { group: Soporte, name: Dsr.Architecture.Infrastructure.Provider, description: "Abstracción de cliente HTTP para integraciones con servicios externos." }
  - { group: Soporte, name: "Dsr.Architecture.TryCatch / Utilities", description: "Manejo centralizado de try/catch y utilidades de propósito general." }
  - { group: Planificado, name: Dsr.Architecture.Outbox, description: "Patrón Outbox para publicación confiable de eventos.", planned: true }
  - { group: Planificado, name: Dsr.Architecture.EventSourcing, description: "Implementación de event sourcing detrás del contrato de repositorio existente.", planned: true }
---
## Propósito

DSR.Architecture es un proyecto personal: un conjunto de librerías .NET que le dan a una aplicación backend su esqueleto arquitectónico, para que un servicio nuevo parta de bloques consistentes y no de una solución en blanco.

Es donde resuelvo, en código, cómo creo que debe organizarse en capas un backend .NET.

## El problema que aborda

La mayoría de los servicios backend recrean los mismos cimientos: entidades base, un tipo de resultado, repositorios, un unit of work, un pipeline de peticiones con validación y transacciones. Escritos ad hoc, esos cimientos divergen entre proyectos y la lógica de negocio termina acoplada a la tecnología de persistencia de turno.

El objetivo es que la estructura correcta sea la más fácil: código de dominio que no sabe nada de infraestructura, e infraestructura que se puede reemplazar sin tocar los casos de uso.

## Principios arquitectónicos

- **Separación de responsabilidades**: Dominio, Aplicación e Infraestructura son paquetes separados, con dependencias que apuntan hacia adentro.
- **Ignorancia de la persistencia**: el dominio describe *qué* consultar mediante specifications; la infraestructura decide *cómo*.
- **Resultados explícitos**: las operaciones devuelven un `Result` en lugar de depender de excepciones para fallos esperados.
- **Preocupaciones transversales en el pipeline**: validación, autorización, transacciones y logging viven en behaviors, no en cada caso de uso.
- **Paquetes pequeños**: cada responsabilidad se distribuye por separado para que una aplicación referencie solo lo que usa.

## Diseño

Una petición entra a la capa de Aplicación como comando o consulta y atraviesa una cadena de behaviors antes de llegar a su caso de uso. El caso de uso trabaja con agregados de la capa de Dominio y accede a los datos mediante contratos de repositorio. Los paquetes de Infraestructura implementan esos contratos para un almacenamiento específico.

Las consultas se expresan como specifications definidas junto al dominio. El paquete de Entity Framework las evalúa a `IQueryable` y puede ejecutarlas como consultas compiladas, con caché según la forma estructural de la expresión.

## Decisiones técnicas

**Specifications en su propio paquete.** Dependen únicamente de expresiones LINQ, de modo que la misma specification puede ser evaluada por EF Core, traducida para MongoDB o ejecutada en memoria.

**Repositorios de lectura y escritura como contratos separados.** Un caso de uso que solo lee no puede escribir por accidente, y los caminos de lectura se pueden optimizar de forma independiente.

**Consultas compiladas detrás de un ejecutor.** La compilación es una optimización que no debe filtrarse a los casos de uso. Los ejecutores de logging, shadow y canary existen para comparar el camino compilado con el estándar antes de confiar en él.

**Idempotencia como behavior.** Los comandos la activan mediante una interfaz marcadora, en lugar de que cada handler implemente su propia deduplicación.

## Qué hay hoy en el repositorio

Todo lo que aparece bajo Dominio, Aplicación, Persistencia y Soporte en el mapa de componentes existe como código fuente en el repositorio público, apunta a .NET 10 y está preparado para empaquetarse en NuGet con un workflow de publicación por paquete.

## Estado actual

Es un proyecto en etapa temprana y en desarrollo activo. No es un framework maduro y no lo presento como tal:

- Las pruebas automatizadas cubren hoy el evaluador de specifications; falta ampliar la cobertura.
- Los paquetes Outbox y Event Sourcing tienen workflows de publicación y un contrato de repositorio, pero sus implementaciones aún no están en el repositorio.
- El caché distribuido existe como abstracción a nivel de aplicación, sin una implementación incluida.
- Las APIs todavía pueden cambiar entre versiones.

Otros dos repositorios míos, DsrWebApp y UserPermissionApi, usan estos paquetes y son sus primeros consumidores reales.
