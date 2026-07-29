import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const hostingSource = path.join(projectRoot, ".openai", "hosting.json");
const hostingDirectory = path.join(projectRoot, "dist", ".openai");
const hostingTarget = path.join(hostingDirectory, "hosting.json");

await mkdir(hostingDirectory, { recursive: true });
await copyFile(hostingSource, hostingTarget);

console.log("Sites manifest copied to dist/.openai/hosting.json");
