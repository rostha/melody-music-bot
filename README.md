# Melody

A customized Discord music bot with queue management and event-driven playback controls, built as a learning project with discord-player.

**JavaScript · Discord.js v12 · Historical project (2021)**

## Overview

- Play, pause, resume, skip, and stop commands.
- Queue inspection, shuffling, looping, and volume controls.
- Dedicated handlers for playback, search, and disconnect events.

## Code map

| Path | Responsibility |
| --- | --- |
| `commands/` | Playback and queue commands |
| `events/` | Discord client events |
| `player-events/` | Player lifecycle and search handling |
| `config/` | Bot preferences, emoji, and audio filters |

## Run locally

Install the dependencies:

```sh
npm install
```

Set the required environment variables in your shell or hosting service:

| Variable | Purpose |
| --- | --- |
| `DISCORD_TOKEN` | Token for your own Discord bot |

Start the bot with `npm start`. The blank [`.env.example`](.env.example) lists the required names; this copy does not automatically load a `.env` file. Non-secret bot preferences live in [`config/`](config/).

## Project history and current status

The original repository contains development commits from **2021**. This public repository is a sanitized source snapshot published in 2026; it does not import or backdate the private Git history.

This code uses legacy Discord.js APIs. The release preparation checked JavaScript syntax, JSON configuration, environment-variable guards, and embedded credential patterns. It has not been tested as a running bot against the current Discord API. It is presented as historical learning and customization work, rather than a maintained production template.

## Attribution

Existing source credits remain intact. See [ATTRIBUTION.md](ATTRIBUTION.md) and [RELEASE-NOTES.md](RELEASE-NOTES.md) for provenance and license details. The [original tutorial README](docs/ORIGINAL-README.md) is also preserved.
