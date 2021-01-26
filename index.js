const alfy = require('alfy');
const fs = require('fs')

require = require('esm')(module);

import { find, findSvg } from './icon-search/build/find.js';
import { IconLibrary } from './icon-search/build/library.js';
let lib = new IconLibrary();
let icons = find(lib, alfy.input);

let output = [];



if (icons && icons.length > 0) {
    let result = [];

    icons.forEach(icon => {
        let svg = findSvg(icon);
        result.push({
            title: icon.name,
            subtitle: icon.set,
            icon: {
                path: `./icon-search/lib/${icon.set}/png/${icon.name}.png`
            },
            arg: icon.name,
            mods: {
                shift: {
                    subtitle: 'Copy SVG',
                    arg: svg
                }
            }
        });
    });
    output = result;

}

alfy.output(output);
