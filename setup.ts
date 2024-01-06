import { existsSync, mkdirSync, readFile, readdirSync, writeFile } from "fs";
import { dirname, join, resolve } from "path";
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

// Create components directory if it doesn't exist
if (!existsSync(paths.components)) mkdirSync(paths.components);

const rawIcons: string[] = readdirSync(paths.icons.source);

// Get icon name without extension
const iconList = rawIcons.map((icon) => icon.replace(".svg", ""));

// Convert icon names to PascalCase
const componentList = iconList
  .map((icon) =>
    icon
      .split("-")
      .map((word) => word.at(0)?.toUpperCase() + word.slice(1))
      .join(""),
  )
  .map((icon) => icon + ".vue");

// Write icons from source to a list
writeFile(
  paths.icons.list,
  JSON.stringify(iconList),
  { encoding: "utf-8" },
  (error) => {
    if (error) throw error;
  },
);

// Read the template
readFile(paths.template, (error, data) => {
  if (error) throw error;

  const template = data.toString();

  // For each icon, read the source file and write it to the component
  rawIcons.forEach((icon, index) => {
    readFile(join(paths.icons.source, icon), (error, data) => {
      if (error) throw error;

      const content = data.toString();

      writeFile(
        join(paths.components, componentList[index]),
        template.replace("$", content),
        { encoding: "utf-8" },
        (error) => {
          if (error) throw error;
        },
      );
    });
  });
});

console.info("[INFO] Icons have been generated!");
