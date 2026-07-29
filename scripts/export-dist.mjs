import { cp, rm } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const exportDirectory = path.join(projectRoot, "out");
const deploymentDirectory = path.join(projectRoot, "dist");

await rm(deploymentDirectory, { recursive: true, force: true });
await cp(exportDirectory, deploymentDirectory, { recursive: true });

console.log("Static export prepared in dist/");
