---
title: UserPermissionApi
section: openSource
category: API REST con publicación de eventos
summary: Una API de permisos con persistencia relacional, publicación de eventos en Kafka, Elasticsearch y Docker Compose.
kind: open-source
role: Autor
stack: [ASP.NET Core 9, MediatR, EF Core, SQL Server, Kafka, Elasticsearch, Serilog, Docker Compose]
repo: https://github.com/RockerInt/UserPermissionApi
license: MIT
order: 4
modules:
  - { group: Servicio, name: UserPermission.Domain, description: "Entidades de permiso y tipo de permiso, interfaces de repositorio y lógica de dominio." }
  - { group: Servicio, name: UserPermission.Application, description: "Casos de uso con CQRS mediante MediatR." }
  - { group: Servicio, name: UserPermission.Infrastructure, description: "Repositorios EF Core, mensajería con Kafka e integración con Elasticsearch." }
  - { group: Servicio, name: UserPermission.Api, description: "Punto de entrada: API REST ASP.NET Core 9." }
  - { group: Pruebas, name: UserPermission.Test, description: "Pruebas unitarias." }
  - { group: Pruebas, name: UserPermission.IntegrationTests, description: "Pruebas de integración sobre una base SQLite en memoria." }
---
## Qué es

UserPermissionApi es una API REST para solicitar, modificar y consultar permisos de usuario. Es pequeña a propósito: el dominio es simple para que las preocupaciones de integración se vean con claridad.

## Qué demuestra

- **Clean Architecture en un solo servicio**: proyectos Domain, Application, Infrastructure y Api con dependencias hacia adentro.
- **CQRS con MediatR**: escritura y lectura como comandos y consultas separados.
- **Publicación de eventos**: las operaciones se publican en Kafka mediante el cliente de Confluent.
- **Infraestructura de búsqueda y logging**: integración con Elasticsearch y logging estructurado con Serilog.
- **Entorno reproducible**: la API y sus dependencias se ejecutan con Docker Compose.
- **Pruebas en dos niveles**: un proyecto de pruebas unitarias y otro de integración.

También usa los paquetes de [DSR.Architecture](/es/ingenieria/dsr-architecture/) para sus tipos base, repositorios y unit of work.

## Estado

Proyecto personal de código abierto. La descripción sigue el README del repositorio.
