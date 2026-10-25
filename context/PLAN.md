# Win12 personal desktop — active plan

Updated 2026-10-25 UTC.

## Scope and constraints

Personalize yuxiaoli/win12 on develop for Sean / Yuxiao Li / yuxiaoli and the confirmed public homepage https://vectorindex.cloud. Inspect bundled app defaults, including browser and Notepad; preserve user documents and localStorage. Use a brief verified professional introduction, not private resume or contact information. Preserve upstream credits, licenses and genuine upstream services/docs.

Do not edit Boot Loader, Win11 or win12 boot.html / --embed (separate owners). Do not push, merge, reset, synchronize or delete main; it is an owner-managed upstream cache. No paid resources, new credentials or security changes. Reuse the existing Pages URL and deploy an identified develop commit. Check remote heads before push and preserve concurrent work.

## Verified starting state

- Repository ID 1111437478, public fork of win12-online/win12.
- Initial develop and main: 795ad3ac6c156bc467d4586203ad9d95d90cf464.
- Remote default changed from main to develop; confirmed by GitHub UI and connector.
- Existing Pages source is develop / root; URL https://yuxiaoli.github.io/win12/boot.html.
- No AGENTS.md / CLAUDE.md or earlier plan in this checkout. Read repository README, CONTRIBUTING, desktop.html instructions and refactor notes, plus DOT development protocol.

## Current status

- [x] Replace default account name and unsupported sample email with Sean / @yuxiaoli.
- [x] Add concise About introduction with portfolio, GitHub and this fork; keep original attribution.
- [x] Use Vector Index as Edge first homepage and add personal new-tab/bookmark links.
- [x] Replace bundled fake Start recents with public links; point VS Code at this fork and macOS app at existing personal desktop.
- [x] Show a Notepad welcome on first blank launch; supplied local files take priority, no storage migration. Preserve legacy home shortcuts.
- [x] Keep locale-update workflow checkout/pull/push on develop.
- [x] Pass JavaScript syntax checks, diff checks and all 7 Node test files (including document/save/shortcut preservation).
- [x] Local browser: Sean login, Notepad intro, Edge embedded Vector Index portfolio.
- [ ] Commit and safely push develop after concurrency recheck.
- [ ] Verify exact-commit Pages deployment and final public browser login/profile/Notepad/Edge flows.
- [ ] Report final SHA, deployment evidence and remaining gaps.

Full tools/regress/run.mjs is blocked by its existing hardcoded /Users/moraxcheng/node_modules Puppeteer import, absent on this Windows host. Targeted browser verification and portable existing tests are used; no claim of full snapshot-harness coverage.