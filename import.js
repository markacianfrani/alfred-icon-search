const alfy = require('alfy');
const fs = require('fs')

require = require('esm')(module);

import { find, findSvg } from './icon-search/build/find.js';
import { IconLibrary } from './icon-search/build/library.js';
let lib = new IconLibrary();

lib.addNewSet(alfy.input);


// let output = [
//     {
//         title: 'test'
//     }
// ]

let output = [
    {
        "uid": "importnew",
        "type": "file",
        "title": "Add New Set",
        "subtitle": "Import",
        "arg": "import",
        "autocomplete": "Desktop",
    }
]
alfy.output(output);
