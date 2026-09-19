# Vladislav Afonin

**Software Engineer - Distributed Systems · Developer Infrastructure · AI Tooling**

[GitHub](https://github.com/mytecor) · [LinkedIn](https://linkedin.com/in/mytecor) · [Telegram](https://t.me/mytecor) · [mytecor@gmail.com](mailto:mytecor@gmail.com)

I design developer platforms, distributed systems, and infrastructure that removes operational complexity from product teams.

My work spans backend and application architecture, networking, CI/CD, distributed state, and developer tooling. I prefer simple, type-safe systems with explicit boundaries and as little runtime complexity as practical.

Currently focused on decentralized computing, mesh networking, and infrastructure around LLM agents.

## Engineering highlights

### FinTech platform - 80+ applications, 10+ teams

Designed and evolved parts of an internal application platform powering more than 80 FinTech admin panels across approximately six environments and used by more than ten engineering teams.

Owned and contributed to the platform runtime, shared libraries, authentication, routing, CI/CD, and deployment infrastructure.

Initiated and led the migration of the platform and its BFF layer from GraphQL to tRPC. The migration removed schema compilation and duplicated runtime validation, simplified nested data structures, reduced protocol and client-bundle overhead, and eliminated a recurring class of API compatibility failures.

The migration covered roughly 80 applications and was completed in about a month.

### Chat SDK

Initiated and designed a framework-independent chat SDK from scratch, replacing a tightly coupled collection of React hooks with a standalone synchronization core backed by a local database.

Designed and implemented:

* local and remote state synchronization
* offline state
* optimistic mutations
* retries and reconnect recovery
* pagination
* reply navigation
* transport abstraction

The resulting architecture moved network and synchronization concerns out of the UI layer and made the chat domain independent of React.

### Help Center platform

Owned the technical development of Help Center applications for Yandex FinTech.

Extracted an existing Help Center from the banking web monolith and independently brought it to production in a new Uzbekistan environment, including CI/CD, deployment configuration, routing, integration, and release flows.

Introduced independent releases and feature-flagged zero-downtime rollout, decoupling Help Center testing and deployment from the main banking application.

Also designed and launched a new interactive Help Center using NestJS and Next.js.

## Commercial experience

### Yandex FinTech - Software Engineer (2022-2026)

#### Frontend Developer (Nov 2024 - Jul 2026)

* Designed the core architecture of an internal Chat SDK, including synchronization, transport, local persistence, offline behavior, and optimistic updates.
* Owned development of Help Center applications and their integration into the banking platform.
* Extracted the external Help Center from a monolith and launched it as an independent service in a new Uzbekistan environment.
* Built release and deployment flows in an environment without a dedicated DevOps engineer on the team.
* Developed a Zod/OpenAPI generator for tRPC-based internal applications.
* Investigated production and integration issues including BFF memory leaks and cross-platform service communication.
* Authored RFCs and design documents, participated in architecture reviews, and coordinated technical changes across frontend and backend teams.
* Informally mentored engineers joining the projects.

#### Junior Frontend Developer (Jun 2022 - Oct 2023)

* Helped build an internal platform from the ground up that grew to power more than 80 FinTech admin panels across 10+ engineering teams.
* Initiated and led the platform's GraphQL → tRPC migration across the frontend and BFF layers.
* Prepared the platform for deployment into new environments as part of international expansion.
* Reworked an internal proxy around composable middleware and caching to improve reliability.
* Integrated rate limiting on top of the Risk Management System.
* Coordinated a major design-system upgrade across internal applications and dependent libraries.
* Upgraded the Node.js runtime used by CI/CD infrastructure.

## Selected open-source projects

### [r1s](https://github.com/mytecor/r1s)

**Decentralized OCI workload execution fabric over the Reticulum Network Stack.**

Designed and built a decentralized execution system in Go for running OCI workloads without a master node, global scheduler, registry, shared database, or mandatory common IP network.

Clients publish workload demand, discover independent allocators over Reticulum, collect capacity offers, and select an execution target.

The system includes:

* decentralized allocator discovery and offer/select scheduling
* OCI execution through containerd
* cryptographic cluster membership
* authenticated control-plane communication
* client-held workload leases
* durable workload intent
* recovery across client disconnects and allocator restarts
* local execution state and log retention
* a persistent local gRPC client API with streamed state updates

Tested across multiple physical devices. An allocator requires only its RNS configuration and can join the execution fabric without centralized cluster infrastructure.

### [agentrun-openai](https://github.com/mytecor/agentrun-openai)

**OpenAI-compatible HTTP gateway for persistent coding-agent sessions.**

Exposes complete coding agents such as Claude Code and Codex through an OpenAI-compatible API while preserving their native tools and runtime.

Features include:

* dynamic model discovery
* streaming completions and reasoning
* persistent session affinity
* native session restoration after idle eviction or gateway restart
* long-running agent heartbeat handling
* working-directory isolation
* reasoning-effort mapping
* Linux, macOS, and Windows releases

Designed so existing OpenAI-compatible applications can use full coding agents without implementing agent-specific integrations.

### [rns-proxy](https://github.com/mytecor/rns-proxy)

SOCKS5 proxy over the Reticulum Network Stack, allowing conventional applications to communicate through an RNS network.

### [codec](https://github.com/mytecor/codec)

Declarative binary serialization and deserialization workspace.

### [Lattice](https://github.com/mytecor/lattice)

Experimental infrastructure for autonomous nodes and agents over Reticulum, with reproducible environments built around Nix.

## Other engineering projects

### Myteor

Long-running experimental distributed runtime project.

Implemented:

* multipart streaming over raw TCP
* stream multiplexing
* binary CBOR/MessagePack protocols
* master/worker task distribution
* Rust-based SWC plugins
* ESM module rewriting
* S3-backed caching proxies for package and source distribution

### Denpo

Experimental MTProto Telegram client with:

* streaming TL lexer and parser
* generated types from TL schemas
* bidirectional binary serialization
* browser-oriented architecture

### Electronic Gradebook

Thesis project built around a custom application stack:

* OAuth2 implementation
* type-safe RPC inspired by JSON-RPC
* custom backend server
* ArangoDB ODM
* streaming SSR
* CI/CD built from scratch

## Technical focus

**Languages:** Go, TypeScript, Rust, Python, JavaScript, GdScript

**Distributed systems & networking:** Reticulum, Yggdrasil, gRPC, WebSockets, TCP, distributed state, leases, service discovery

**AI infrastructure:** coding agents, OpenAI-compatible APIs, model routing, retries, fallbacks, provider abstraction, context management

**Backend & data:** Node.js, NestJS, PostgreSQL, Redis, MongoDB, ArangoDB

**Infrastructure:** NixOS, Docker / OCI, containerd, Kubernetes, GitHub Actions, Caddy, Nginx, Grafana

**Frontend:** React, Next.js, browser APIs

## Engineering approach

I tend to take ownership of problems that cross traditional frontend/backend/infrastructure boundaries.

I use RFCs and design documentation for non-trivial changes, prefer explicit and type-safe interfaces, and routinely read documentation and source code when integrating unfamiliar systems.

Coding agents are part of my default development workflow, and I also build infrastructure around them when existing tooling becomes limiting.

## Open source & writing

I maintain several open-source projects around distributed systems, networking, and agent infrastructure and contribute to projects in the Reticulum ecosystem, including `rns-rs`.

I also write technical notes and engineering posts in my [Telegram channel](https://t.me/mytecor).

## Contacts

[GitHub](https://github.com/mytecor) · [LinkedIn](https://linkedin.com/in/mytecor) · [Telegram](https://t.me/mytecor) · [Email](mailto:mytecor@gmail.com)
