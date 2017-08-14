## usage

```sh
migrate-files-to-from-root file_01.js file_02.js ...
```

You may want to try this script to migrate to *from-root*.

N.B.: Make sure you can safely role back as changes are made in place. The script is still naive and works only if all your relative paths go back to the root folder.

```sh
cd your_project/
npm i -g from-root
find -name "*.js" | xargs grep "\.\." | cut -f"1" -d":" | xargs migrate-files-to-from-root
```
