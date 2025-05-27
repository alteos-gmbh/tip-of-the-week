import { createServer } from "http";
import { parse } from "url";
import next from "next";
import nextConfig from "./next.config.mjs";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error occurred handling", req.url, err);

      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }).listen(port, (err) => {
    if (err) throw err;

    const basePath = nextConfig.basePath || "";
    console.info(`> Ready on http://${hostname}:${port}${basePath}`);
  });
});
