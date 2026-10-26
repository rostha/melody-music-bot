# melody-music-bot

A customized Discord.js v12 music bot with queues, playback controls, looping, and volume commands.

This is a sanitized release candidate of the historical project at https://github.com/rostha/musicmelody1. It contains the latest selected source snapshot, without the original Git history. The release preparation does not claim that all included code was originally authored by the maintainer.

## Setup

This project uses legacy Discord.js APIs. The dependency stack has not been modernized or tested against a live Discord server.

Install dependencies with `npm install`. Supply `DISCORD_TOKEN` through your hosting environment or shell, then run `npm start`. `.env.example` lists the variable names; these prepared copies do not automatically load a `.env` file.

PowerShell example:

```powershell
$env:DISCORD_TOKEN = '<your-bot-token>'
npm start
```

Use the Discord Developer Portal to configure any intents and permissions required by the selected commands. Configure non-secret prefixes and server options in the existing configuration files.

## Attribution and license

All existing source comments, attribution notices, and license files have been retained. The original README identifies the music-bot tutorial and discord-player. Preserve those credits and verify the tutorial source license before public redistribution.

## Release status

Credentials have been removed from this snapshot. Rotate previously committed credentials separately. No live credential validity tests or dependency installation scripts were run. Review the accompanying validation report before publishing.

