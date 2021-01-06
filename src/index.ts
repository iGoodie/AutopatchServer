import Configurations from "../configurations.json";
import app from "./app";

app.listen(Configurations.port, () => {
  console.log(`AutoPatcher Server started listening @ ${Configurations.port}`);
});

// Demo of the whole logic :P
// (async function () {
//   const fsmapPath = Configurations.dumpFolder + "\\dump.fsmap";
//   const minifiedPath = Configurations.dumpFolder + "\\dump.min.fsmap";
//   const summaryPath = Configurations.dumpFolder + "\\summary.md5";

//   // const fsmap = await MD5Dumper.dumpFsmap(Configurations.serveFolder);
//   // const summary = await MD5Dumper.summarizeFsmap(fsmap);

//   // console.log(fsmap.length);
//   // await MD5Dumper.writeFsmap(fsmapPath, fsmap);
//   // await MD5Dumper.writeFsmap(minifiedPath, fsmap, true);
//   // fs.writeFileSync(summaryPath, summary);

//   // fs.readFileSync(Configurations.serveFolder + "\\dump.")

//   const distFsmap = await MD5Dumper.readFsmap(fsmapPath);
//   const distMinified = await MD5Dumper.readMinified(minifiedPath);
//   const distSummary = fs.readFileSync(summaryPath, { encoding: "utf-8" });

//   const clientFsmap = await MD5Dumper.dumpFsmap(Configurations.serveFolder);
//   const clientSummary = await MD5Dumper.summarizeFsmap(clientFsmap);

//   // Integrity test
//   console.log(clientSummary, "==", distSummary);
//   const diff = await MD5Dumper.diffFsmap(distMinified, clientFsmap);
//   console.log(diff)

//   for(let missingIndex of diff.missingIndices) {
//     console.log(distFsmap[missingIndex])
//   }
// })();
