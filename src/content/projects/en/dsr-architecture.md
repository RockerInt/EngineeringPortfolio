---
title: DSR.Architecture
section: engineering
category: .NET architecture libraries
summary: A personal set of .NET libraries for building modular, maintainable backends with DDD, Clean Architecture and CQRS. In development.
kind: personal-project
stage: in-development
role: Author and maintainer
stack: [C#, .NET 10, MediatR, FluentValidation, EF Core, MongoDB, SQL Server, SQLite]
repo: https://github.com/RockerInt/DSR.Architecture
license: MIT
featured: true
order: 2
modules:
  - { group: Domain, name: Dsr.Architecture.Domain, description: "Aggregates, entities, value objects, domain events, a Result type and a validation collector with guards." }
  - { group: Domain, name: Dsr.Architecture.Domain.Specifications, description: "Persistence-agnostic specifications: criteria, includes, ordering, paging, plus analytics specifications for grouping and aggregation." }
  - { group: Application, name: Dsr.Architecture.Application, description: "Use case, command and query contracts with pipeline behaviors for validation, authorization, transactions, idempotency, logging, metrics and exception handling." }
  - { group: Persistence, name: Dsr.Architecture.Persistence.Abstractions, description: "Read and write repository contracts, unit of work and transactional unit of work, and an event-sourced repository contract." }
  - { group: Persistence, name: Dsr.Architecture.Infrastructure.Persistence.EntityFramework, description: "EF Core repositories, a specification evaluator, compiled-query execution with a bounded cache, and logging, shadow and canary executors." }
  - { group: Persistence, name: Dsr.Architecture.Infrastructure.Persistence.Mongo, description: "MongoDB repository and entity base types." }
  - { group: Persistence, name: "…Persistence.SqlServer / …Persistence.SqlLite", description: "Provider-specific repositories and registration for SQL Server and SQLite." }
  - { group: Supporting, name: Dsr.Architecture.Infrastructure.Provider, description: "HTTP client abstraction for external service integrations." }
  - { group: Supporting, name: "Dsr.Architecture.TryCatch / Utilities", description: "Centralized try/catch handling and general-purpose helpers." }
  - { group: Planned, name: Dsr.Architecture.Outbox, description: "Outbox pattern for reliable event publication.", planned: true }
  - { group: Planned, name: Dsr.Architecture.EventSourcing, description: "Event sourcing implementation behind the existing repository contract.", planned: true }
---
## Purpose

DSR.Architecture is a personal project: a set of .NET libraries that give a backend application its architectural skeleton, so that a new service starts from consistent building blocks instead of a blank solution.

It is where I work out, in code, how I think a .NET backend should be layered.

## The problem it addresses

Most backend services re-create the same foundations: base entities, a result type, repositories, a unit of work, a request pipeline with validation and transactions. Written ad hoc, those foundations drift between projects and business logic ends up coupled to the persistence technology of the day.

The goal is to make the right structure the easy one: domain code that knows nothing about infrastructure, and infrastructure that can be swapped without touching use cases.

## Architectural principles

- **Separation of concerns**: Domain, Application and Infrastructure are separate packages with dependencies pointing inward.
- **Persistence ignorance**: the domain describes *what* to query through specifications; infrastructure decides *how*.
- **Explicit outcomes**: operations return a `Result` instead of relying on exceptions for expected failures.
- **Cross-cutting concerns in the pipeline**: validation, authorization, transactions and logging live in behaviors, not in each use case.
- **Small packages**: each concern ships separately so an application references only what it uses.

## Design

A request enters the Application layer as a command or query and passes through a chain of behaviors before reaching its use case. The use case works with aggregates from the Domain layer and reaches data through repository contracts. Infrastructure packages implement those contracts for a specific store.

Queries are expressed as specifications defined next to the domain. The Entity Framework package evaluates them into `IQueryable` and can execute them as compiled queries, caching by the structural shape of the expression.

## Technical decisions

**Specifications in their own package.** They depend only on LINQ expressions, so the same specification can be evaluated by EF Core, translated for MongoDB or run in memory.

**Read and write repositories are separate contracts.** A use case that only reads cannot accidentally write, and read paths can be optimized independently.

**Compiled queries behind an executor.** Compilation is an optimization that should not leak into use cases. Logging, shadow and canary executors exist to compare the compiled path against the standard one before trusting it.

**Idempotency as a behavior.** Commands can opt in through a marker interface rather than each handler implementing its own de-duplication.

## What is in the repository today

Everything listed under Domain, Application, Persistence and Supporting in the component map below exists as source code in the public repository, targets .NET 10 and is set up for NuGet packaging with a publish workflow per package.

## Current status

This is an early-stage project in active development. It is not a mature framework and I do not present it as one:

- Automated tests currently cover the specification evaluator; broader coverage is pending.
- Outbox and Event Sourcing packages have publish workflows and a repository contract, but their implementations are not in the repository yet.
- Distributed caching exists as an application-level abstraction, without a bundled implementation.
- APIs can still change between versions.

Two of my other repositories, DsrWebApp and UserPermissionApi, use these packages and serve as its first real consumers.
