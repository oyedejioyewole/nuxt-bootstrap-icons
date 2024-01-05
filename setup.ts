import { existsSync, mkdirSync, readFile, readdirSync, writeFile } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const paths = {
  template: resolve(__dirname, "./src/runtime/templates/_icon.vue"),
  icons: resolve(__dirname, "node_modules/bootstrap-icons/icons"),
  components: resolve(__dirname, "src/runtime/components/library"),
};

if (!existsSync(paths.components)) mkdirSync(paths.components);

const rawIcons: string[] = readdirSync(paths.icons);
const formattedIcons = rawIcons.map((icon) =>
  icon
    .split("-")
    .map((word) => word.at(0)?.toUpperCase() + word.slice(1))
    .join("")
    .replace("svg", "vue"),
);

readFile(paths.template, (error, data) => {
  if (error) throw error;

  const template = data.toString();

  rawIcons.forEach((icon, index) => {
    readFile(join(paths.icons, icon), (error, data) => {
      if (error) throw error;

      const content = data.toString();

      writeFile(
        join(paths.components, formattedIcons[index]),
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
