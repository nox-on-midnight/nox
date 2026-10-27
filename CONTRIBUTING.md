# Contributing to NightBringer

NightBringer exists to explain Midnight to more people. The best contributions make an idea clearer, funnier or available to someone new.

## Ways to help

- **Memes and art.** Grab Nox from the [brand kit](site/assets/brand/) and make something. Share it with the community, or open a **Meme submission** issue to get it featured.
- **Translations.** Translate `site/midnight.html` into your language. Name the file with the language code, for example `midnight.es.html`, and link it from the original page.
- **Fact corrections.** If Midnight 101 is wrong or out of date, open a **Fact correction** issue with a link to an official source.
- **Site fixes.** Typos, accessibility problems, broken layouts on your phone: pull requests welcome.

## Ground rules

- **Accuracy over hype.** Facts about Midnight need a source, ideally [midnight.network](https://midnight.network) or [docs.midnight.network](https://docs.midnight.network).
- **No price talk.** No predictions, targets or "wen lambo" claims in the site, the README or submitted art.
- **No official branding.** Don't add Midnight's logo, wordmark or anything implying a partnership.
- **Keep Nox recognizable.** Keep the mask, the wing crescents and the gold dust. See the [art license](LICENSE-ART.md) and [BRAND.md](BRAND.md).
- **Be kind.** Disagree with ideas, not people.

## Pull requests

1. Fork the repo and create a branch.
2. Make your change. The site has no build step; preview it with `python3 -m http.server 8000 --directory site`.
3. Check it on a narrow (phone) window and with keyboard navigation.
4. Open a pull request describing what changed and why.

Changes to `site/assets/js/config.js` (token details and links) are accepted only from maintainers.

## Licensing of contributions

Code you contribute is licensed under MIT. Artwork you add to `site/assets/brand/` is licensed under CC BY 4.0.
