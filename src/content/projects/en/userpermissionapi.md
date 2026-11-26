---
title: UserPermissionApi
section: openSource
category: REST API with event publishing
summary: A permissions API with relational persistence, Kafka event publishing, Elasticsearch and Docker Compose.
kind: open-source
role: Author
stack: [ASP.NET Core 9, MediatR, EF Core, SQL Server, Kafka, Elasticsearch, Serilog, Docker Compose]
repo: https://github.com/RockerInt/UserPermissionApi
license: MIT
order: 4
modules:
  - { group: Service, name: UserPermission.Domain, description: "Permission and permission-type entities, repository interfaces and domain logic." }
  - { group: Service, name: UserPermission.Application, description: "Use cases with CQRS through MediatR." }
  - { group: Service, name: UserPermission.Infrastructure, description: "EF Core repositories, Kafka messaging and Elasticsearch integration." }
  - { group: Service, name: UserPermission.Api, description: "ASP.NET Core 9 REST API entry point." }
  - { group: Tests, name: UserPermission.Test, description: "Unit tests." }
  - { group: Tests, name: UserPermission.IntegrationTests, description: "Integration tests running against an in-memory SQLite database." }
---
## What it is

UserPermissionApi is a REST API for requesting, modifying and querying user permissions. It is small on purpose: the domain is simple so the integration concerns are easy to see.

## What it demonstrates

- **Clean Architecture in a single service**: Domain, Application, Infrastructure and Api projects with inward dependencies.
- **CQRS with MediatR**: write and read operations as separate commands and queries.
- **Event publishing**: operations are published to Kafka through Confluent's client.
- **Search and logging infrastructure**: Elasticsearch integration and structured logging with Serilog.
- **Reproducible environment**: the API and its dependencies run through Docker Compose.
- **Tests at two levels**: a unit test project and an integration test project.

It also uses the [DSR.Architecture](/engineering/dsr-architecture/) packages for its base types, repositories and unit of work.

## Status

A personal open-source project. The description above follows the repository's README.
