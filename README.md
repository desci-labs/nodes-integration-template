# DeSci Nodes integration template
This repo is a stub which can be used as a base for integrating with Nodes via `@desci-labs/nodes-lib`.

> **Note:**
> The documentation of [@desci-labs/nodes-lib](https://github.com/desci-labs/nodes/tree/develop/nodes-lib) is a recommended read to figure out configuration and get an idea of the featureas available. Library API docs are available at [desci-labs.github.io/nodes](https://desci-labs.github.io/nodes).

## Configuration
Two values need to be set in the environment for this demo to run:

```bash
# public key to account holding some funds for gas on Sepolia
export PUBLISH_PKEY=3a0acb121e4545...
# API key as generated in your profile at https://nodes-dev.desci.com/profile
export NODES_API_KEY=2YblL6kW...
```

## Usage
There is a template file called `demo.ts`, which shows how to create a draft node and make some changes. After setting up the environment, you should be able to run `npm run demo` and then view a freshly created node over at `https://nodes-dev.desci.com`.

The rest is up to you! Check out the functions exported by `@desci-labs/nodes-lib` and build something cool!
