# ChiefsNChop Website - Deployment Plan

## Project Overview
One-page website for Justin (ChiefsNChop) - a Kick.com streamer based in Kansas City.
- **Domain:** chiefsnchop.cc (purchased on Cloudflare)
- **GitHub user:** cpetrovic
- **Stack:** Static HTML/CSS/JS site

## What's Done

### Website Built (Complete)
- [x] `index.html` - Full one-page site with all sections
- [x] `styles.css` - Responsive KC Chiefs themed styling (red/gold/white)
- [x] `script.js` - Smooth scroll, mobile nav, scroll animations, parallax
- [x] `.mcp.json` - MCP server config (Vercel, GitHub, Cloudflare, Cloudflare DNS)

### Sections Included
1. **Hero** - Banner from Kick, profile pic, tagline, CTA
2. **About** - Bio, quote, interests (gaming, BBQ, catfishing, 3n1 oil, Quaker State, Pennzoil, 2-stroke gas, paintball, Pit Vipers)
3. **Stream** - Kick offline banner, stats (756 followers, verified), game list (ARC Raiders, Warzone, R.E.P.O.)
4. **Merch** - 6 featured products from Fourthwall store (chiefsnchop-shop.fourthwall.com)
5. **Community** - Charity events, adopt-a-family, donation drives, Level Up Arena
6. **Partners** - Freshen Up Energy (code JORTS), SelfRez Coffee (code CHIEF), Level Up Arena
7. **Links** - Kick, Twitter/X, Discord, Merch Store
8. **Footer** - Logo, tagline, social icons

### Key Links Used in Site
- Kick: https://kick.com/chiefsnchop
- Twitter/X: https://x.com/chiefsnchop
- Discord: https://discord.gg/RXMvhEBj9U
- Merch: https://chiefsnchop-shop.fourthwall.com
- Level Up Arena: https://leveluparena.gg

## What Needs to Be Done

### Step 1: Initialize Git Repo
- `git init` in /home/kara/websites/chiefsnchop
- Create `.gitignore`
- Initial commit with all files

### Step 2: Create GitHub Repository
- Use GitHub MCP to create repo `chiefsnchop` under `cpetrovic`
- Push code to the new repo

### Step 3: Deploy to Vercel
- Use Vercel MCP to create a new project
- Link it to the `cpetrovic/chiefsnchop` GitHub repo
- No build step needed (static HTML) - just serve from root
- Set up auto-deploy from main branch

### Step 4: Configure Cloudflare DNS
- Domain: chiefsnchop.cc (already on Cloudflare)
- Add DNS records to point to Vercel:
  - `A` record for `@` -> 76.76.21.21
  - `CNAME` record for `www` -> cname.vercel-dns.com
- May need a Cloudflare API token scoped to chiefsnchop.cc zone (Edit Zone DNS template)

### Step 5: Configure Custom Domain in Vercel
- Add chiefsnchop.cc as custom domain in the Vercel project
- Add www.chiefsnchop.cc as well
- Vercel will handle SSL automatically

## Important Notes
- DO NOT touch any wagecalculator assets/projects on GitHub, Vercel, Cloudflare, or Supabase
- The GitHub MCP needs GITHUB_PAT environment variable set
- Cloudflare MCP servers use browser-based OAuth on first connect
- If Cloudflare DNS MCP doesn't work for record creation, may need to create an API token:
  - Cloudflare Dashboard > My Profile > API Tokens > Create Token
  - Template: "Edit zone DNS"
  - Zone: Specific zone > chiefsnchop.cc
