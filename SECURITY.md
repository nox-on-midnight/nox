# Security and impersonation

## How to recognize the real NightBringer

- The **policy ID** in [`site/assets/js/config.js`](site/assets/js/config.js), on the website and in the README is the only way to identify the token. All three must match.
- Official channels are the ones listed on the website and in the README. Nothing else is official.
- NightBringer contributors will **never** ask for your seed phrase, private keys or a "verification" transaction, and will never DM you first with offers.

## Report an impersonator or scam

Open an issue using the **Report an impersonator** template. Include links and screenshots. Never include your own seed phrase, private keys or other secrets in an issue.

Maintainers will add confirmed impersonators to a pinned issue so others can check them.

## Report a problem with the website

If you find a security problem with the site itself, such as a way to change what it displays or inject scripts, please don't open a public issue. Use GitHub's **private vulnerability reporting** for this repository instead (*Security → Report a vulnerability*). Maintainers: enable it under *Settings → Code security*.

## For maintainers

- Protect the `main` branch (*Settings → Branches*): require pull requests and at least one review. A change to the policy ID or the links in `config.js` changes where people send money.
- Turn on two-factor authentication for every account with write access.
- Review every pull request that touches `site/assets/js/config.js`, `README.md` token details or any external link character by character.
