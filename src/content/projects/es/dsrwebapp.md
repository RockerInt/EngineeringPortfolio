---
title: DsrWebApp
section: openSource
category: Aplicación web de punto de venta
summary: Una aplicación POS, API ASP.NET Core 9 y SPA Angular 20, construida sobre los paquetes de DSR.Architecture.
kind: open-source
role: Autor
stack: [ASP.NET Core 9, Angular 20, MediatR, EF Core, SQLite, Docker]
repo: https://github.com/RockerInt/DsrWebApp
license: MIT
featured: true
order: 3
modules:
  - { group: Backend, name: WebApp.Domain, description: "Entidades de negocio, interfaces de repositorio y lógica de dominio. Sin dependencias hacia otras capas." }
  - { group: Backend, name: WebApp.Application, description: "Casos de uso con CQRS mediante MediatR: comandos para escritura, consultas para lectura." }
  - { group: Backend, name: WebApp.Infrastructure, description: "Implementaciones de repositorio con Entity Framework Core y otros servicios de infraestructura." }
  - { group: Backend, name: WebApp.Server, description: "API REST ASP.NET Core 9 con OpenAPI; también sirve la aplicación Angular compilada." }
  - { group: Frontend, name: webapp.client, description: "Single-page application en Angular 20 que consume la API REST." }
---
## Qué es

DsrWebApp es una aplicación web de punto de venta para gestionar clientes, productos, inventario y ventas. El backend es una API REST en ASP.NET Core 9; el frontend es una single-page application en Angular 20 servida por el mismo host.

## Por qué existe

Un framework solo es creíble cuando se construye algo con él. DsrWebApp es la primera aplicación construida sobre [DSR.Architecture](/es/ingenieria/dsr-architecture/): usa los paquetes de Dominio, Aplicación, Persistencia y TryCatch para sus entidades base, casos de uso, repositorios, unit of work y manejo de errores.

## Qué demuestra

- Clean Architecture aplicada de extremo a extremo, con el dominio en el centro y la API en el borde.
- CQRS con MediatR, separando comandos de consultas.
- Un backend .NET y un frontend Angular desarrollados y entregados como una sola unidad desplegable.
- Ejecución en contenedores con Docker y Docker Compose.

## Estado

Proyecto personal de código abierto. La descripción sigue el README del repositorio; lo considero una implementación de referencia funcional más que un producto terminado.
