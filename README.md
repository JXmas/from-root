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
## migration
You may want to try this script to migrate to *from-root*.

N.B.: Make sure you can safely role back as changes are made in place. The script is still naive and works only if all your relative paths go back to the root folder.

```sh
cd your_project/
npm i -g from-root
find -name "*.js" | xargs grep "\.\." | cut -f"1" -d":" | xargs migrate-files-to-from-root
```

## see also
- [app-root-path](https://www.npmjs.com/package/app-root-path)
