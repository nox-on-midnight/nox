/*
  NightBringer site configuration
  --------------------------------
  This is the ONLY file you need to edit when token details or links change.
  Leave a value as "" (empty) and the site shows "Not announced yet" or hides the link.

  Before launch, double-check `policyId` character by character.
  It is the one thing scammers will try to fake.
*/
window.NIGHTBRINGER = {
  projectName: "NightBringer",
  ticker: "NOX",              // e.g. "NOX" (without the $)
  chain: "Cardano",        // where the memecoin lives
  policyId: "05608299a17bbb62dc8174f3e897274bd34936460fe591775d2963ae",            // Cardano policy ID, 56 hex characters
  assetName: "NightBringer",           // on-chain asset name, if different from the ticker
  totalSupply: "1,000,000,000",         // e.g. "1,000,000,000"
  launchDate: "",          // e.g. "2026-12-01"

  links: {
    x: "",                 // https://x.com/...
    telegram: "",          // https://t.me/...
    discord: "",           // https://discord.gg/...
    explorer: "",          // e.g. a cexplorer.io or cardanoscan.io page for the token
    dex: "",               // where people can swap, once there is liquidity
    github: "https://github.com/nox-on-midnight/nox"
  }
};
