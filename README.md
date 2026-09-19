# Vladislav Afonin

**Distributed Systems · Developer Infrastructure · AI Tooling · Full-stack**

## About

**Software Engineer** focused on distributed systems, developer infrastructure, application architecture, and AI tooling.

Experience spans platform engineering, backend systems, networking, CI/CD, distributed state, and developer-facing infrastructure. Strong emphasis on type safety, explicit system boundaries, predictable failure handling, and reducing operational complexity.

Technical work is typically driven by source-level research, RFCs, design documentation, profiling, and experimentation. Current interests include decentralized computing, mesh networking, alternative transports, and infrastructure for LLM agents, including model routing, persistent sessions, provider abstraction, and OpenAI-compatible APIs.

Publishes technical notes and engineering articles on distributed systems, networking, infrastructure, and agent tooling in a [Telegram channel](https://t.me/mytelog).

## Selected Engineering Problems

### Scaling an internal platform across 80+ applications

An internal FinTech platform had grown to more than 80 administrative applications across approximately ten environments and was used by over ten engineering teams. Shared concerns such as authentication, routing, runtime behavior, CI/CD, and deployment needed to remain consistent while individual applications continued to evolve independently.

Worked on the platform architecture and shared infrastructure, including runtime components, libraries, authentication, routing, deployment flows, and CI/CD. The platform became a common foundation for product teams instead of requiring each application to solve the same infrastructure problems independently.

### Replacing GraphQL where it created more complexity than value

The platform's GraphQL layer introduced schema compilation, duplicated validation, cumbersome handling of nested structures, additional parsing overhead, and a recurring risk of backward-incompatible API changes.

Initiated and led a migration from GraphQL to tRPC across approximately 80 applications and their BFF layer. The migration replaced separately compiled schemas and runtime contract validation with end-to-end TypeScript types and removed the need for custom scalars or loosely typed JSON structures for complex data.

The migration was completed in roughly one month and eliminated a recurring class of API compatibility failures while simplifying development and reducing protocol and client-bundle overhead.

### Separating chat state from the UI framework

Chat functionality had evolved into a tightly coupled collection of React hooks that combined networking, local state, synchronization, and UI concerns. This made behavior difficult to reason about and increasingly expensive to extend.

Initiated and designed a standalone Chat SDK with a framework-independent core and a local database as the source of client-side state. Implemented synchronization with the remote backend, offline behavior, optimistic updates, retries, reconnect recovery, pagination, and reply navigation.

The resulting architecture moved synchronization and transport concerns out of React and exposed a consistent local state model to the UI layer.

### Launching an existing service in a new environment

An existing Help Center was embedded in the banking monolith and could not be released or tested independently. Launching it in a new Uzbekistan environment also required dealing with unfamiliar deployment infrastructure, multiple proxy layers, and the absence of a dedicated DevOps engineer within the team.

Extracted the Help Center into an independent service and handled the required CI/CD, deployment configuration, routing, integration, and release flows. The rollout was performed behind feature flags to avoid service disruption.

Independent deployment significantly reduced coupling with the main banking application and made testing and releases of the Help Center substantially faster.

## Commercial experience

### Yandex FinTech - Software Engineer (2022-2026)

### Frontend Developer (Nov 2024 - Jul 2026)

- Designed the core architecture of an internal Chat SDK, including local persistence, synchronization, transport abstraction, offline behavior, optimistic updates, retries, reconnect recovery, pagination, and reply navigation.
- Owned development of Help Center applications and their integration into the banking platform.
- Extracted the Help Center from the banking monolith and launched it as an independent service in a new Uzbekistan environment, covering CI/CD, deployment configuration, routing, integration, and release flows.
- Introduced independent releases and feature-flagged rollout, decoupling Help Center delivery from the main banking application.
- Developed a Zod/OpenAPI generator for tRPC-based internal applications.
- Investigated complex runtime and integration issues, including BFF memory leaks and communication between services deployed on different platforms.
- Worked with high availability, graceful degradation, retries, queues, distributed state, and failure recovery.
- Authored RFCs and design documents, participated in architecture reviews, coordinated technical changes across frontend and backend teams, and informally mentored incoming engineers.

### Junior Frontend Developer (Jun 2022 - Oct 2023)

- Helped build an internal platform from the ground up that grew to power more than **80 FinTech applications across ~6 environments and 10+ engineering teams**.
- Worked on shared platform infrastructure including runtime components, authentication, routing, reusable libraries, CI/CD, and deployment flows.
- Initiated and led the migration from GraphQL to tRPC across the frontend and BFF layers, completing the transition across approximately 80 applications in about one month.
- Eliminated schema compilation and duplicated runtime validation, simplified complex API shapes, and removed a recurring class of contract compatibility failures.
- Prepared the platform for deployment into new environments as part of international expansion.
- Reworked an internal proxy around composable middleware and caching to improve reliability.
- Integrated rate limiting on top of the Risk Management System.
- Coordinated a major design-system upgrade across internal applications and dependent libraries.
- Upgraded the Node.js runtime used by CI/CD infrastructure.

## Selected open-source projects

### [r1s](https://github.com/mytecor/r1s)

**Decentralized OCI workload execution fabric over the Reticulum Network Stack.**

Designed and built a decentralized execution system in Go for running OCI workloads without a master node, global scheduler, registry, shared database, or mandatory common IP network.

Clients publish workload demand, discover independent allocators over Reticulum, collect capacity offers, and select an execution target.

The system includes:

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

Features include:

- dynamic model discovery
- streaming completions and reasoning
- persistent session affinity
- native session restoration after idle eviction or gateway restart
- long-running agent heartbeat handling
- working-directory isolation
- reasoning-effort mapping
- Linux, macOS, and Windows releases

Designed so existing OpenAI-compatible applications can use full coding agents without implementing agent-specific integrations.

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

### [rns-proxy](https://github.com/mytecor/rns-proxy)

**SOCKS5 proxy for tunneling arbitrary TCP traffic over the Reticulum Network Stack.**

Built in Rust as a compatibility layer between conventional IP applications and Reticulum: applications connect to a standard local SOCKS5 endpoint, while their TCP sessions are transported through an encrypted RNS mesh to a remote exit node.

- Designed a client/server architecture with a local SOCKS5 proxy and an RNS-connected exit node that establishes ordinary TCP connections on behalf of clients.
- Implemented a custom binary framing protocol for `CONNECT`, connection result, bidirectional `DATA`, and `CLOSE` messages.
- Multiplexed multiple independent TCP sessions over a single RNS link using session identifiers instead of creating a separate Reticulum connection for every socket.
- Implemented automatic fragmentation and reassembly for frames exceeding the RNS link MDU.
- Added recovery from link and underlying transport failures with automatic reconnection, exponential backoff, and full RNS node recreation after repeated failures.
- Used asynchronous I/O with Rust and Tokio to relay traffic concurrently between SOCKS5 clients, the RNS transport, and remote TCP endpoints.
- Added persistent RNS identities for exit nodes so their destination address remains stable across restarts.
- Kept the interface transparent to applications: any software supporting SOCKS5 can use Reticulum without native RNS integration.

The project explores how conventional stream-oriented applications can run over encrypted, delay-tolerant mesh networks without modifying the applications themselves.

### [codec](https://github.com/mytecor/codec)

Declarative binary serialization and deserialization workspace.

### [Lattice](https://github.com/mytecor/lattice)

Experimental infrastructure for autonomous nodes and agents over Reticulum, with reproducible environments built around Nix.

## Other engineering projects

### Myteor

Long-running experimental distributed runtime project.

Implemented:

- multipart streaming over raw TCP
- stream multiplexing
- binary CBOR/MessagePack protocols
- master/worker task distribution
- Rust-based SWC plugins
- ESM module rewriting
- S3-backed caching proxies for package and source distribution

### Denpo

Experimental MTProto Telegram client with:

- streaming TL lexer and parser
- generated types from TL schemas
- bidirectional binary serialization
- browser-oriented architecture

### Electronic Gradebook

Thesis project built around a custom application stack:

- OAuth2 implementation
- type-safe RPC inspired by JSON-RPC
- custom backend server
- ArangoDB ODM
- streaming SSR
- CI/CD built from scratch

### Email Template Editor for Market at Yandex School of Frontend Development Hackathon (SHRI)

- Prototype WYSIWYG editor for mustache email templates at the Yandex SHRI hackathon
- Handmade state manager similar to Zustand and router built on top
- Team lead for the project

## Technical focus

**Languages:** Go, TypeScript, Rust, Python, JavaScript, GdScript

**Distributed systems & networking:** Reticulum, Yggdrasil, gRPC, WebSockets, TCP, distributed state, leases, service discovery

**AI infrastructure:** coding agents, OpenAI-compatible APIs, model routing, retries, fallbacks, provider abstraction, context management

**Backend & data:** Node.js, NestJS, PostgreSQL, Redis, MongoDB, ArangoDB

**Infrastructure:** NixOS, Docker / OCI, containerd, Kubernetes, GitHub Actions, Caddy, Nginx, Grafana

**Frontend:** React, Next.js, browser APIs

## Contacts

[GitHub](https://github.com/mytecor) · [LinkedIn](https://linkedin.com/in/mytecor) · [Telegram](https://t.me/mytecor) · [Email](mailto:mytecor@gmail.com)
