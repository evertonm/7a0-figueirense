import { cp, mkdir, rm } from "node:fs/promises";

const files = [
  "index.html",
  "styles.css",
  "app.js",
  "players.js",
  "player-roles.js",
  "player-ratings.js",
  "transfermarkt-roles.js",
  "formation-layouts.js"
];

await rm("dist", { recursive: true, force: true });
await mkdir("dist");

for (const file of files) {
  await cp(file, `dist/${file}`);
}
