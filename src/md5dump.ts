import MD5Dumper from "md5dumper";
import Configurations from "../configurations.json";
import fs from "fs";

export default class MD5Dump {
  private _fsmap;
  private _minified;
  private _summary;

  get fsmap() {
    return this._fsmap;
  }

  get minified() {
    return this._minified;
  }

  get summary() {
    return this._summary;
  }

  constructor() {
    this.reload();
  }

  public async reload() {
    const fsmapPath = Configurations.dumpFolder + "\\dump.fsmap";
    const minifiedPath = Configurations.dumpFolder + "\\dump.min.fsmap";
    const summaryPath = Configurations.dumpFolder + "\\summary.md5";

    this._fsmap = await MD5Dumper.readFsmap(fsmapPath);
    this._minified = await MD5Dumper.readMinified(minifiedPath);
    this._summary = fs.readFileSync(summaryPath, { encoding: "utf-8" });

    console.log("Reloaded Dump!");
  }
}
