# from-root
Uses [find-root](https://www.npmjs.com/package/find-root) module to help build paths from project's root folder.

## usage
Say you have this folder structure:

- project/
    - package.json
    - conf/
        - config.js
    - services/
        - twitter-stream/
            - worker.js

*worker.js* could load conf.js this way:

```js
const fromRoot = require('from-root');
const config = require(fromRoot("conf","config.js"));
```

instead of:

```js
const config = require("../../conf/config.js"));
```

Indeed, if the location of *worker.js* changes, but the conf folder keeps its location, we'd have to update the require relative path.

Furthermore, *fromRoot("conf","config.js")* makes it clear where the required file is.

## installation
```sh
> npm install from-root
```

## see also
- [app-root-path](https://www.npmjs.com/package/app-root-path)
