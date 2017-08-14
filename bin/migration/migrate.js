#!/usr/bin/env node


const fs = require('fs');
const replace = require("replace");

paths = process.argv.slice(2)

// Migrate paths to fromRoot style
const r = /['"](?:\.\.\/)+([(\w+)\/]+)['"]/g;
replace({
    regex: r,
    replacement: "",
    funcFile: "replace_func.js",
    paths: paths,
    recursive: true,
    silent: false,
    multiline: false
});

// Add fromRoot = require('from-root');
for(let i=0; i<paths.length; i++){
    let path = paths[i];
    var data = fs.readFileSync(path).toString().split("\n");
    for(var j=0; j<data.length; j++){
        if(data[j].indexOf("require") != -1) {
            break;
        }
    }
    data.splice(j, 0, "const fromRoot = require('from-root')");
    var text = data.join("\n");

    fs.writeFile(path, text, function (err) {
      if (err) return console.log(err);
    });
}
