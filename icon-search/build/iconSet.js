"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const sharp = require('sharp');
const util_1 = require("./util");
class IconSet {
    constructor(name, iconSetRootPath) {
        this._icons = [];
        this.name = name;
        this._iconSetRootPath = iconSetRootPath;
    }
    findIcons(name) {
        let data = require(`${this._iconSetRootPath}/data.json`);
        return data.filter((icon) => icon.name.includes(name));
    }
    addIcon(icon) {
        this._icons.push(icon);
    }
    get icons() {
        return this._icons;
    }
    get path() {
        return this._iconSetRootPath;
    }
    get list() {
        let rawdata = fs.readdirSync(this._iconSetRootPath);
        return rawdata;
    }
    createDirectories() {
        util_1.Util.initFolderStructure(this._iconSetRootPath);
    }
}
exports.IconSet = IconSet;
//# sourceMappingURL=iconSet.js.map