import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";

const port = Number(process.env.PORT || 3000);
const root = path.resolve(process.cwd(), "dist");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8"
};

function resolveRequest(requestUrl = "/") {
  const pathname = decodeURIComponent(new URL(requestUrl, "http://local").pathname);
  const relativePath = pathname.replace(/^\/+/, "");
  const requestedPath = path.resolve(root, relativePath);

  if (
    requestedPath !== root &&
    !requestedPath.startsWith(`${root}${path.sep}`)
  ) {
    return null;
  }

  const candidates = [
    requestedPath,
    `${requestedPath}.html`,
    path.join(requestedPath, "index.html")
  ];

  return candidates.find(
    (candidate) => existsSync(candidate) && statSync(candidate).isFile()
  );
}

createServer((request, response) => {
  const filePath = resolveRequest(request.url);

  if (!filePath) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Página não encontrada");
    return;
  }

  response.writeHead(200, {
    "Content-Type":
      contentTypes[path.extname(filePath).toLowerCase()] ||
      "application/octet-stream",
    "Cache-Control": filePath.endsWith(".html")
      ? "no-cache"
      : "public, max-age=31536000, immutable"
  });
  createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Biocarbo disponível em http://localhost:${port}`);
});
