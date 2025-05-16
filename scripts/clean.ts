import fs from "node:fs/promises";

const paths = ["node_modules", "dist", ".pglite"];

for (const path of paths) {
    fs.rm(path, { recursive: true })
        .then(() => console.log(`Successfully deleted: ${path}`))
        .catch((err) => console.log(`Error cleaning ${path}: ${err.message}`));
}
