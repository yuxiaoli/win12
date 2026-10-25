# Sean’s Win12 desktop

This fork uses Sean / Yuxiao Li / `yuxiaoli` for its bundled profile, and
<https://vectorindex.cloud> as the Edge homepage. The public portfolio and
<https://github.com/yuxiaoli> are the sources for the short introduction and links.
No email address, private biography or resume is bundled.

The Start menu links to real public pages instead of simulated recent personal
documents. Notepad shows a short introduction on the first blank launch in a page
session. Supplied local-file contents, including empty files, take priority;
subsequent blank launches stay blank. Existing home-folder shortcuts using the
original `Administrator` path resolve to `Sean`. This change does not migrate or
clear browser storage or mounted local files.

Original Win12 Online authors, attribution, license text, theme service, feedback
links and upstream release history remain intact. The desktop context menu and
VS Code point to this fork; the macOS app points to the owner’s existing desktop.

Custom development and Pages use `develop`. `main` remains an owner-managed,
read-only upstream cache. The existing locale-update workflow explicitly targets
`develop`.

Validation: `node --test tools/regress/*.test.mjs`, JavaScript syntax checks and
targeted browser checks of login, Start menu, Notepad and Edge. The broader
`node tools/regress/run.mjs` harness currently imports Puppeteer from a hardcoded
`/Users/moraxcheng/node_modules` path and cannot run on this Windows workspace.
