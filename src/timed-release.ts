import { release } from "./release.ts";

export class TimedRelease {
  #start?: number;

  constructor(public durationMs: number) {}

  start() {
    this.#start = Date.now();
  }

  async release() {
    this.#start ??= Date.now();
    if (Date.now() - this.#start >= this.durationMs) {
      await release();
      this.#start = Date.now();
    }
  }
}
