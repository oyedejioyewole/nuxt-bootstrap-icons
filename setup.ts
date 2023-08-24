import {
  readdirSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readFileSync,
} from "fs";
import { join } from "path";

const paths = {
  icons: join("./node_modules/bootstrap-icons/icons"),
  components: join("./src/runtime/components"),
};

if (!existsSync(paths.components)) mkdirSync(paths.components);

const bootstrapIcons = readdirSync(paths.icons) as string[];

for (const icon of bootstrapIcons) {
  writeFileSync(
    join(
      paths.components,
      icon
        .split("-")
        .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join("")
        .replace(".svg", ".vue")
    ),
    `<template>
  ${readFileSync(join(paths.icons, icon)).toString()}
</template>`,
    { encoding: "utf-8" }
  );
}

console.log(`[INFO] Done generating icons from ${paths.icons}`);
