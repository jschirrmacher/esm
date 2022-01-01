# Node/Typescript/Mocha with ESM demo

A Node.js demo application written in TypeScript with ESM (EcmaScript Module) enabled and Mocha testing.

It still seems extremely difficult to make Node.js applications work with ESM, and to have automated tests for it as well. I searched a lot on Stackoverflow, and found mostly unanswered questions.
So, I decided to write a minimal example application to experiment with different options and tools.

It seems that the best way to test Node.js applications is to use Mocha. Jest, in contrast, uses Babel to transpile the code, which is not compatible with ESM.

Relevant parts of the solution:

- In `package.json`, the `"type"` field needs to be set to `"module"`.
- Node.js needs to be started with `--experimental-specifier-resolution=node` and `--loader ts-node/esm`.
- `tsconfig.json` options `"module"` and `"target"` need to be set to `"esnext"`.
- In tests, local modules need to be imported with a `.js` extension (not `.ts`, though it matches the actual extension).

The `node-fetch` package is only used to show that ESM based dependencies (which it is since version 3.0) work. It would not, without ESM enabled.
