import { existsSync } from "fs";
import { mkdir, open, readFile, readdir, writeFile } from "fs/promises";
import { dirname, join, parse, resolve } from "path";
import { fileURLToPath } from "url";

// Resolve path to this file
const __dirname = dirname(fileURLToPath(import.meta.url));

// Resolve paths
const paths = {
  components: resolve(__dirname, "./src/runtime/components/library"),
  icons: {
    list: resolve(__dirname, "./src/runtime/bootstrap-icons.list.json"),
    source: resolve(__dirname, "node_modules/bootstrap-icons/icons"),
  },
  template: resolve(__dirname, "./src/runtime/templates/_icon.vue"),
};

async function setup() {
  // Create components directory if it doesn't exist
  if (!existsSync(paths.components)) await mkdir(paths.components);
  else if (!existsSync(paths.icons.list))
    await open(join(paths.icons.list), "w");

  const rawIcons: string[] = await readdir(paths.icons.source);

  // Get icon name without extension
  const iconList = rawIcons.map((icon) => parse(icon).name);

  // Convert icon names to PascalCase
  const componentList = iconList.map(
    (icon) =>
      icon
        .split("-")
        .map((word) => word.at(0)?.toUpperCase() + word.slice(1))
        .join("") + ".vue",
  );

  // Write icons from source to a list
  await writeFile(paths.icons.list, JSON.stringify(iconList));

  // Read the template
  const template = (await readFile(paths.template)).toString();

  // For each icon, read the source file and write it to the component
  rawIcons.forEach(async (icon, index) => {
    const content = (await readFile(join(paths.icons.source, icon))).toString();

    await writeFile(
      join(paths.components, componentList[index]),
      template.replace("$", content),
    );
  });

  console.info("[INFO]: 🎉 Icons have been generated!");
}

console.info("[INFO]: ✨ Setting up icons");
setup();
