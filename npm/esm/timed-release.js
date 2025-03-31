var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TimedRelease_start;
import { release } from "./release.js";
export class TimedRelease {
    constructor(durationMs) {
        Object.defineProperty(this, "durationMs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: durationMs
        });
        _TimedRelease_start.set(this, void 0);
    }
    start() {
        __classPrivateFieldSet(this, _TimedRelease_start, Date.now(), "f");
    }
    async release() {
        __classPrivateFieldSet(this, _TimedRelease_start, __classPrivateFieldGet(this, _TimedRelease_start, "f") ?? Date.now(), "f");
        if (Date.now() - __classPrivateFieldGet(this, _TimedRelease_start, "f") >= this.durationMs) {
            await release();
            __classPrivateFieldSet(this, _TimedRelease_start, Date.now(), "f");
        }
    }
}
_TimedRelease_start = new WeakMap();
