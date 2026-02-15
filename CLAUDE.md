# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

One-page website for Justin (ChiefsNChop) — a Kick.com streamer based in Kansas City. Static HTML/CSS/JS with no build tools, no frameworks, and no npm dependencies.

- **Domain:** chiefsnchop.cc (Cloudflare DNS)
- **Hosting:** Vercel (auto-deploys from `main` branch on GitHub `cpetrovic/chiefsnchop`)
- **GitHub user:** cpetrovic

## Development

No build step. Serve locally with:
```
python3 -m http.server
```

Deploy by pushing to `main` — Vercel picks it up automatically. Manual deploy available via `vercel deploy` if the CLI is installed.

## Architecture

Three files make up the entire site:

- **index.html** — Single page with 8 sections: Hero, About, Stream, Merch, Community, Partners/Sponsors, Links, Footer
- **styles.css** — All styling including responsive breakpoints (1024px, 768px, 480px), animations, and theming
- **script.js** — Vanilla JS for navbar scroll effects, mobile hamburger menu, smooth scrolling, Intersection Observer scroll-reveal animations, and parallax

## Theming & Branding

KC Chiefs color palette defined as CSS custom properties in `:root`:
- Primary red `#E31837` / dark red `#B8102C`
- Gold accent `#FFB81C` / dark gold `#D49A00`
- Dark backgrounds `#1A1A2E`, `#16213E`, `#0F3460`
- Kick green highlight `#53FC18`

Typography: **Oswald** (headings, uppercase) and **Open Sans** (body) via Google Fonts. Font Awesome 6.5.1 for icons via CDN.

## External Integrations

- **Kick:** https://kick.com/chiefsnchop (streaming platform, profile images hosted on Kick CDN)
- **Fourthwall:** https://chiefsnchop-shop.fourthwall.com (merch store — product images and links)
- **Freshen Up Energy:** Custom flavor "8-Bit Blitzberry", promo code JORTS
- **SelfRez Coffee:** Promo code CHIEF
- **Level Up Arena:** https://leveluparena.gg
- **Discord:** https://discord.gg/RXMvhEBj9U
- **Twitter/X:** https://x.com/chiefsnchop

## MCP Servers

Configured in `.mcp.json` for Vercel, GitHub, Cloudflare, and Cloudflare DNS. Cloudflare MCP servers use browser-based OAuth on first connect.

## Important

- DO NOT touch any wagecalculator assets/projects on GitHub, Vercel, Cloudflare, or Supabase.
