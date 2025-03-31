import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: [
    { name: ".", path: "./src/index.ts" },
  ],
  outDir: "./npm",
  shims: {},
  test: false,
  typeCheck: "both",
  compilerOptions: {
    lib: ["DOM", "ES2015"]
  },
  package: {
    name: "@triangulum/async-relase",
    version: "1.0.0-alpha.1",
    description: "Quala",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/grant-wilson/async-request.git",
    },
    bugs: {
      url: "https://github.com/grant-wilson/async-request/issues",
    },
  },
});
