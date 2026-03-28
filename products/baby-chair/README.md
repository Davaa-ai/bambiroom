# Baby Chair Folder Guide

This folder is organized so the landing page stays easy to ship while the supporting strategy and source files stay easy to find.

## Structure

* `index.html`
  Main product page entry used by Vite.
* `docs/`
  Strategy, copy, Meta ads, and reel planning documents.
* `images/web/`
  Optimized image assets used by the product page and marketing.
* `images/source/`
  Original or editable image source files kept for future updates.
* `videos/`
  Product video clips used by the page or ad production.
* `scripts/`
  Utility scripts for cleanup or image processing.

## Quick start

If you want to work on:

* the landing page: open `index.html`
* strategy or copy: open `docs/`
* published visual assets: open `images/web/`
* source art files: open `images/source/`
* raw motion assets: open `videos/`
* helper tooling: open `scripts/`

## Notes

* Shared site-level assets still live outside this folder in the repo, such as `public/baby-chair/` and the top-level `baby-chair/` preview assets.
* If you move `index.html`, update `vite.config.js`.
* If you rename files in `images/web/` or `videos/`, update the paths in `index.html`.
