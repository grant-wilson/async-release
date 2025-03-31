import { release } from "./release.ts";

export class BatchedRelease {
  #counter = 0;

  constructor(public batchSize: number) {}

  async release() {
    this.#counter++;
    if (this.#counter > this.batchSize) {
      await release();
      this.#counter = 0;
    }
  }
}
