---
title: DsrWebApp
section: openSource
category: Point-of-sale web application
summary: A POS application, ASP.NET Core 9 API and Angular 20 SPA, built on the DSR.Architecture packages.
kind: open-source
role: Author
stack: [ASP.NET Core 9, Angular 20, MediatR, EF Core, SQLite, Docker]
repo: https://github.com/RockerInt/DsrWebApp
license: MIT
featured: true
order: 3
modules:
  - { group: Backend, name: WebApp.Domain, description: "Business entities, repository interfaces and core domain logic. No dependencies on other layers." }
  - { group: Backend, name: WebApp.Application, description: "Use cases with CQRS through MediatR: commands for writes, queries for reads." }
  - { group: Backend, name: WebApp.Infrastructure, description: "Repository implementations with Entity Framework Core and other infrastructure services." }
  - { group: Backend, name: WebApp.Server, description: "ASP.NET Core 9 REST API with OpenAPI; also serves the built Angular application." }
  - { group: Frontend, name: webapp.client, description: "Angular 20 single-page application that talks to the REST API." }
---
## What it is

DsrWebApp is a point-of-sale web application for managing customers, products, inventory and sales. The backend is an ASP.NET Core 9 REST API; the front end is an Angular 20 single-page application served by the same host.

## Why it exists

A framework is only credible once something is built with it. DsrWebApp is the first application built on [DSR.Architecture](/engineering/dsr-architecture/): it uses the Domain, Application, Persistence and TryCatch packages for its base entities, use cases, repositories, unit of work and error handling.

## What it demonstrates

- Clean Architecture applied end to end, with the domain at the center and the API at the edge.
- CQRS with MediatR, separating commands from queries.
- A .NET backend and an Angular front end developed and shipped as one deployable unit.
- Containerized execution with Docker and Docker Compose.

## Status

A personal open-source project. The description above follows the repository's README; I treat it as a working reference implementation rather than a finished product.
