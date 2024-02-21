# DeSci Nodes integration template
This repo is a stub which can be used as a base for integrating with Nodes via `@desci-labs/nodes-lib`.

> **Note:**
> The documentation of [@desci-labs/nodes-lib](https://github.com/desci-labs/nodes/tree/develop/nodes-lib) is a recommended read to figure out configuration and get an idea of the featureas available.

## Configuration
`nodes-lib` requires some configuration to be set through the environment.
Execute this command to copy the example `.env` from `nodes-lib` to this project:

```bash
npm run getEnv
```

Then, read the `.env` file and set the correct values. In particular, you need to generate an API key at https://nodes-dev.desci.com after creating an account.

## Usage
There is a template file called `demo.ts`, which shows how to create a draft node and make some changes. After setting up the environment, you should be able to run `npm run demo` and then view a freshly created node over at `https://nodes-dev.desci.com`.

The rest is up to you! Check out the functions exported by `@desci-labs/nodes-lib` and build something cool!
