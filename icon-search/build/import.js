"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const sharp = require('sharp');
const util_1 = require("./util");
class Icon {
    constructor(name, set) {
        this.name = name;
        this.set = set;
    }
}
exports.Icon = Icon;
class IconSet {
    constructor(name, path) {
        this._icons = [];
        // const dirName = Util.initFolderStructure(name, path);
        // this.name = dirName;
        this.name = name;
        this._libraryPath = path;
    }
    findIcons(name) {
        let data = require(`${this._libraryPath}/data.json`);
        return data.filter((icon) => icon.name.includes(name));
    }
    addIcon(icon) {
        this._icons.push(icon);
    }
    get icons() {
        return this._icons;
    }
    get path() {
        return this._libraryPath;
    }
    get list() {
        let rawdata = fs.readdirSync(this._libraryPath);
        return rawdata;
    }
    createDirectories() {
        util_1.Util.initFolderStructure(this._libraryPath);
    }
}
exports.IconSet = IconSet;
const defaultOptions = {
    name: null,
    libPath: 'lib',
    importPath: './import/svg',
};
function importIcons(config) {
    let options = Object.assign(Object.assign({}, defaultOptions), config);
    if (!options.name) {
        throw new Error('A name is required');
    }
    let iconSet = new IconSet(options.name, options.libPath);
    iconSet.list;
    // iconSet.initNewSet();
    // return iconSet;
}
exports.importIcons = importIcons;
//# sourceMappingURL=import.js.map