# Vladislav Afonin

**Distributed Systems · Developer Infrastructure · AI Tooling**

## About

**Software Engineer** focused on distributed systems, developer infrastructure, application architecture, and AI tooling.

Experience spans platform engineering, backend systems, networking, CI/CD, distributed state, and developer-facing infrastructure. Strong emphasis on type safety, explicit system boundaries, predictable failure handling, and reducing operational complexity.

Technical work is typically driven by source-level research, RFCs, design documentation, profiling, and experimentation. Current work and research areas include decentralized computing, mesh networking, alternative transports, and LLM agent systems, including model routing, persistent sessions, provider abstraction, and OpenAI-compatible APIs.

Publishes technical notes and engineering articles on distributed systems, networking, infrastructure, and agent tooling in a [Telegram channel](https://t.me/mytelog).

## Selected Engineering Problems

### Keeping a shared platform consistent across 80+ applications

An internal FinTech platform had grown to more than 80 administrative applications across approximately ten environments and was used by over ten engineering teams. Shared concerns such as authentication, routing, runtime behavior, CI/CD, and deployment needed to remain consistent while individual applications continued to evolve independently.

Designed and evolved shared platform infrastructure, including runtime components, libraries, authentication, routing, deployment flows, and CI/CD. Centralized common concerns at the platform level while preserving independent application development across teams.

### Migrating 80+ applications from GraphQL to tRPC

The platform's GraphQL layer introduced schema compilation, duplicated validation, cumbersome handling of nested structures, additional parsing overhead, and a recurring risk of backward-incompatible API changes.

Initiated and led a migration from GraphQL to tRPC across approximately 80 applications and their BFF layer. The migration replaced separately compiled schemas and runtime contract validation with end-to-end TypeScript types and removed the need for custom scalars or loosely typed JSON structures for complex data.

The migration was completed in roughly one month, eliminated a recurring class of API compatibility failures, simplified development, reduced serialization and parsing overhead, and removed GraphQL documents from client bundles.

### Separating chat state from the UI framework

Chat functionality had evolved into a tightly coupled collection of React hooks that combined networking, local state, synchronization, and UI concerns. This made behavior difficult to reason about and increasingly expensive to extend.

Initiated and designed a standalone Chat SDK with a framework-independent core and a local database as the source of client-side state. Implemented synchronization with the remote backend, offline behavior, optimistic updates, retries, reconnect recovery, pagination, and reply navigation.

The resulting architecture moved synchronization and transport concerns out of React and exposed a consistent local state model to the UI layer.

### Launching an existing service in a new environment

An existing Help Center was embedded in the banking monolith and could not be released or tested independently. Launching it in a new Uzbekistan environment also required dealing with unfamiliar deployment infrastructure, multiple proxy layers, and the absence of a dedicated DevOps engineer within the team.

Extracted the Help Center into an independent service and handled the required CI/CD, deployment configuration, routing, integration, and release flows. The rollout was performed behind feature flags to avoid service disruption.

Independent deployment decoupled Help Center delivery from the main banking application and enabled separate testing and release cycles.

## Commercial experience

### Yandex FinTech (2022 - 2026)

#### Frontend Developer (Nov 2024 - Jul 2026)

- Designed and owned the architecture of an internal Chat SDK, separating synchronization, persistence, transport, and domain logic from the UI layer.
- Owned development of Help Center applications and their integration into the banking platform.
- Extracted the Help Center from the banking monolith and launched it as an independent service in a new Uzbekistan environment.
- Established CI/CD, deployment, routing, integration, and release flows for the new service in a team without a dedicated DevOps engineer.
- Developed internal tooling around tRPC, Zod, and OpenAPI.
- Investigated complex runtime and cross-platform integration issues, including BFF memory leaks and communication across heterogeneous deployment environments.
- Authored RFCs and design documents, participated in architecture reviews, coordinated changes across frontend and backend teams, and informally mentored engineers.

#### Junior Frontend Developer (Jun 2022 - Oct 2023)

- Helped build an internal application platform that grew to power more than **80 FinTech applications across 10+ engineering teams**.
- Worked on shared platform infrastructure including runtime components, authentication, routing, reusable libraries, CI/CD, and deployment flows.
- Initiated and led the migration of approximately 80 applications and their BFF layer from GraphQL to tRPC.
- Prepared the platform for deployment into additional environments as part of international expansion.
- Reworked an internal proxy around composable middleware and caching to improve reliability.
- Integrated rate limiting on top of the Risk Management System.
- Coordinated a major design-system upgrade across internal applications and dependent libraries.
- Upgraded the Node.js runtime used by CI/CD infrastructure.

## Selected Open-Source Projects

### [r1s](https://github.com/mytecor/r1s)

**Decentralized OCI workload execution fabric over the Reticulum Network Stack.**

Designed and built a decentralized execution system in Go for running OCI workloads without a master node, global scheduler, cluster-wide registry, shared database, or mandatory common IP network.

Clients publish workload demand, discover independent allocators over Reticulum, collect capacity offers, and select an execution target.

- decentralized allocator discovery and offer/select scheduling
- OCI execution through containerd
- cryptographic cluster membership
- authenticated control-plane communication
- client-held workload leases
- durable workload intent
- recovery across client disconnects and allocator restarts
- local execution state and log retention
- a persistent local gRPC client API with streamed state updates

Tested across multiple physical devices. An allocator requires only its RNS configuration and can join the execution fabric without centralized cluster infrastructure.

### [agentrun-openai](https://github.com/mytecor/agentrun-openai)

**OpenAI-compatible HTTP gateway for persistent coding-agent sessions.**

Exposes complete coding agents such as Claude Code and Codex through an OpenAI-compatible API while preserving their native tools and runtime.

- dynamic model discovery
- streaming completions and reasoning
- persistent session affinity
- native session restoration after idle eviction or gateway restart
- long-running agent heartbeat handling
- working-directory isolation
- reasoning-effort mapping
- Linux, macOS, and Windows releases

Designed so existing OpenAI-compatible applications can use full coding agents without implementing agent-specific integrations.

### [rns-proxy](https://github.com/mytecor/rns-proxy)

**SOCKS5 proxy for tunneling TCP traffic over the Reticulum Network Stack.**

Built in Rust as a bridge between conventional IP applications and Reticulum. Applications connect to a standard local SOCKS5 endpoint, while TCP sessions are transported through an encrypted RNS link to a remote exit node.

- Designed a client/server architecture with a local SOCKS5 proxy and an RNS-connected exit node.
- Implemented a compact binary protocol for connection setup, bidirectional data transfer, errors, and session termination.
- Multiplexed multiple TCP sessions over a single RNS link using session identifiers.
- Added fragmentation and reassembly for payloads exceeding the RNS link MDU.
- Implemented automatic recovery from link and transport failures with reconnection, exponential backoff, and RNS node recreation after repeated failures.

The project allows existing SOCKS5-compatible applications to use Reticulum without native RNS integration.

### [UBenchan](https://github.com/ubenchan/frontend)

**Browser-based JavaScript and TypeScript benchmarking environment.**

Designed and built an interactive benchmarking tool for comparing JavaScript and TypeScript implementations directly in the browser.

- Reimplemented the benchmark execution engine around Web Workers to keep measurements isolated from the UI thread.
- Integrated Monaco Editor for an IDE-like editing experience.
- Added in-browser TypeScript compilation with Sucrase.
- Built the application around a responsive React interface for creating, running, and comparing benchmark suites.

### [IDEA Cipher](https://mytecor.github.io/idea-cipher/)

**JavaScript implementation of the International Data Encryption Algorithm (IDEA).**

Implemented the IDEA block cipher from the algorithm specification, including the 128-bit key schedule, generation and inversion of round subkeys, modular arithmetic, and block transformations.

The implementation works directly with binary data through `Uint8Array`, `Uint16Array`, and `DataView`, and includes ECB-mode encryption and decryption together with an interactive browser demo.

### [Lattice](https://github.com/mytecor/lattice)

Experimental infrastructure for autonomous nodes and agents over Reticulum, with reproducible environments built around Nix.

## Other Engineering Projects

### Myteor

**Experimental distributed runtime exploring transport, multiplexing, task distribution, and package delivery.**

Built as a long-running systems project for experimenting with low-level communication and execution primitives.

- Implemented multipart streaming over raw TCP and multiplexed multiple logical streams over a single connection.
- Designed binary protocols over CBOR and MessagePack.
- Built a master/worker task distribution model with worker capability polling.
- Developed Rust-based SWC plugins for CJS → ESM transformation and rewriting module paths to remote HTTP sources.
- Implemented S3-backed caching proxies for npm, GitHub, and other package and source-data providers.

### Denpo

**Experimental MTProto Telegram client focused on protocol parsing, code generation, and binary serialization.**

Built core protocol tooling from scratch with an emphasis on browser compatibility and strongly typed interfaces.

- Implemented a streaming TL lexer and parser.
- Generated types and protocol bindings directly from Telegram TL schemas.
- Built bidirectional binary serialization and deserialization for MTProto data structures.
- Designed the implementation around browser constraints rather than relying on Node.js-specific primitives.

### Electronic Gradebook

**Thesis project with end-to-end ownership across the full application stack.**

Designed and implemented the system from authentication and RPC contracts to backend infrastructure, data access, SSR, frontend tooling, and CI/CD. Built a custom type-safe RPC layer, OAuth2 flow, ArangoDB ODM, streaming SSR, and supporting development tooling.

### Email Template Editor — Yandex School of Frontend Development Hackathon

**Team lead for a prototype WYSIWYG editor for Mustache-based email templates.**

Led the project and coordinated implementation across the team. Built core application infrastructure including a custom state manager and router, alongside the editor prototype.

## Technical focus

**Languages:** Go, TypeScript, Rust, Python, JavaScript

**Distributed systems & networking:** Reticulum, Yggdrasil, gRPC, WebSockets, TCP, distributed state, leases, service discovery

**AI infrastructure:** coding agents, OpenAI-compatible APIs, model routing, retries, fallbacks, provider abstraction, context management

**Backend & data:** Node.js, NestJS, PostgreSQL, Redis

**Infrastructure:** NixOS, Docker / OCI, containerd, Kubernetes, GitHub Actions, Caddy, Nginx, Grafana

**Frontend:** React, Next.js, browser APIs

## Contacts

[GitHub](https://github.com/mytecor) · [LinkedIn](https://linkedin.com/in/mytecor) · [Telegram](https://t.me/mytecor) · [Email](mailto:mytecor@gmail.com)
