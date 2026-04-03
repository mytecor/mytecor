# Vladislav Afonin

[![Total time coded since Oct 6 2021](https://wakatime.com/badge/user/e81ab393-8d26-4758-8a10-ad6cc672dc16.svg?style=for-the-badge&color=151515)](https://wakatime.com/@mytecor)
![TypeScript](https://img.shields.io/badge/TypeScript-151515?logo=typescript&style=for-the-badge)![JavaScript](https://img.shields.io/badge/JavaScript-151515?logo=javascript&style=for-the-badge)![Rust](https://img.shields.io/badge/Rust-151515?logo=rust&style=for-the-badge)![Nix](https://img.shields.io/badge/Nix-151515?logo=nixos&style=for-the-badge)![GDScript](https://img.shields.io/badge/GDScript-151515?logo=godot-engine&style=for-the-badge)![Python](https://img.shields.io/badge/Python-151515?logo=python&style=for-the-badge)![PHP](https://img.shields.io/badge/PHP-151515?logo=php&style=for-the-badge)

## About

**Software Engineer** specializing in building applications at the cutting edge of technology. Guided by KISS, DRY, and type-safety principles, with a passion for architecture design and refactoring. Years of curating best practices through personal projects and applying them professionally.<br/>
Focused on algorithm asymptotics and choosing optimal solutions while balancing development time. Committed to keeping the client bundle lean by avoiding unnecessary runtime dependencies. Testing covers core and critical application paths. Well-versed in web vulnerabilities, with hands-on experience in SQL injections, web scraping, anti-bot bypass, and CAPTCHA solving.<br/>
Tasks are decomposed and thoroughly documented to preserve context. Research-driven workflow: search engines, articles, documentation, and source code reading. Neural networks are actively used to cut down on routine work.<br/>
Currently fascinated by web3, blockchain, and distributed computing, as well as building mesh networks (RNS/i2p/Yggdrasil/ipfs) over (WebRTC/LoRa/HaLow).

## Commercial experience

### Yandex FinTech - Frontend Developer (Nov 2024 - Present)

- Developed the frontend chat SDK engine: SyncService, transport layer, local database, and optimistic updates.
- Launched an interactive help center for the bank using Nest and NextJS, integrating it into the bank's web version.
- Developed a Zod-OpenAPI generator for tRPC internal admin panels.
- Migrated releases to new flows for rapid deployment in new clusters.
- Decomposed a monolith and extracted the external help center service, launching it in a new location, completing all stages of new service establishment.
- Contributed to "Big Yandex" (the larger Yandex ecosystem).
- Contributed to the admin panel platform.
- Prepared documentation on development in mobile emulators via mitmproxy for an internal presentation.
- Experimented a lot with AI agents.

### Yandex FinTech - Junior Frontend Developer (Jun 2022 - Oct 2023)

- Contributed from the ground up to the platform powering over 80 FinTech admin panels.
- Prepared the platform for deployment in new environments for international expansion.
- Rewrote internal proxy to include multiple middlewares and added caching, thereby increasing service uptime.
- Championed the shift from GraphQL to tRPC and migrated the platform, significantly improving DX and performance.
- Integrated a rate limiter on top of RMS (Risk Management System).
- Updated the design system across all internal admin panels and several hard-coded libraries, such as React Router, through a major version upgrade.
- Upgraded Node.js version on CI/CD.

## Open-source projects

- [SOCKS5 proxy over the Reticulum Network Stack](https://github.com/mytecor/rns-proxy)
- [Ubenchan benchmarking](https://uben.ch)
- [IDEA cipher algorithm implementation](https://mytecor.github.io/idea-cipher/)
- [Simple code editor with highlighting](https://mytecor.github.io/rmce/)
- [Saucenao client](https://www.npmjs.com/package/node-sauce)
- [Editor with live Preview for React](https://mytecor.github.io/live-example/)
- [Path2regexp library for Route Pattern Matching](https://www.npmjs.com/package/path2regexp)
- [Shortcut tracking lib](https://www.npmjs.com/package/hotkeys-nano)

## Private projects

### Myteor - a long-running pet project I've been developing for years

- Multipart streaming for inter-service communication over raw TCP
- Stream multiplexing
- Binary protocol over CBOR/Msgpack (selectable)
- Master-worker task queue with worker polling for execution capability
- CJS to ESM compiler via a Rust plugin for SWC
- SWC plugin for replacing ESM module paths with HTTP addresses
- S3-caching proxy for npm, GitHub, and other data sources

### NeuroDoctor - Telegram bot for tracking doctor visits and creating a general overview

- Rendering PDFs into images, parsing text from them into MD
- Searching using embeddings on ChromaDB
- Microservice architecture: parsing, analysis, API, and bot as a client

### Mini-App for Telegram

- Reels-like interface using Web Animations API, spring animations, native feel
- Custom drag-and-drop library
- Design in Figma

### Denpo - MTProto Telegram Client

- Streaming TL lexer and parser
- Type generator from TL schema
- Bidirectional binary (de)serialization with a focus on browser usage

### Electronic Gradebook as a Thesis Project

- OAuth2 by RFC
- Type-safe VK-like RPC (tRPC, before it became known), evolved from JSON RPC by RFC
- Custom backend server
- @rango (ODM for ArangoDB)
- Vite SVG sprite loader
- Custom SSR with streaming support
- Custom CSS animation library
- CI/CD from scratch

### Email Template Editor for Market at Yandex School of Frontend Development Hackathon (SHRI)

- Prototype WYSIWYG editor for mustache email templates at the Yandex SHRI hackathon
- Handmade state manager similar to Zustand and router built on top
- Team lead for the project

### Brivbot - Bot for converting Habr articles to Instant View

- A simple project, I was interested in reverse-engineering Telegram's IV format

### Nucon - Console for Nuphy Keyboard on Tauri

- An interesting experience reversing the USB communication protocol between the keyboard and standard software

### Self-Hosting

- NixOS as a base
- Deployment using GitHub Actions
- Xray for proxies, custom config distribution service
- Minio as storage
- Live sync for Obsidian
- Plane for task tracking

## Software

| Category           | Name                                                                  |
| ------------------ | --------------------------------------------------------------------- |
| Editor             | Zed, VS Code, Neovim, Helix                                           |
| MITM               | Proxyman, Mitmproxy, Charles, Wireshark                               |
| HTTP Client        | Yaak, Insomnia, Postman, curl                                         |
| Notes              | Obsidian, Notion                                                      |
| Design             | Figma                                                                 |
| Raster             | Procreate, Krita, Gimp                                                |
| 3D Graphics        | Blender3D                                                             |
| Version Control    | Git, Arc                                                              |
| Server             | Caddy, Nginx                                                          |
| Game Engine        | Godot Engine                                                          |
| Database           | MongoDB (with Mongoose), ArangoDB, Redis, ChromaDB, PostgreSQL, MySQL |
| Graphs, Alerts     | Grafana                                                               |
| Object Storage     | Minio                                                                 |
| OS                 | NixOS, Debian, Ubuntu                                                 |
| AI Tools           | OpenCode, OpenClaw                                                    |
| Browser Automation | Playwright                                                            |
| Containers         | Docker, Docker Compose, Podman, k8s                                   |

## Contacts

[Telegram](https://t.me/mytecor) / [mytecor@gmail.com](mailto:mytecor@gmail.com) / [GitHub](https://github.com/mytecor) / [LinkedIn](https://linkedin.com/in/mytecor)

Thank you for your attention ❤️
