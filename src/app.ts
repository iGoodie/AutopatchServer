import fs from "fs";
import express from "express";
import Configurations from "../configurations.json";
import MD5Dump from "./md5dump";

const app = express();
const dump = new MD5Dump();

app.get("/", (req, res) => res.redirect("/version"));

app.get("/version", (req, res) => {
  res.json({ version: Configurations.servingVersion });
});

app.get("/integrity/summary", (req, res) => {
  res.json({ summary: dump.summary });
});

app.get("/integrity/minified", (req, res) => {
  res.json({ minified: dump.minified });
});

app.get("/download", (req, res) => {
  const index: number = parseInt(req.query.index as string) || 0;
  res.download(Configurations.serveFolder + "\\" + dump.fsmap[index].path, "", {
    dotfiles: "allow",
    headers: {
      "Fs-Relative-Path": dump.fsmap[index].path,
    },
  });
});

export default app;
