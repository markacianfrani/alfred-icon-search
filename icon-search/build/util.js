"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
class Util {
    static parseFilename(input) {
        return input.replace('.png', '').replace('.svg', '');
    }
    static initFolderStructure(iconSetRootPath) {
        // const dirName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        if (!fs.existsSync(iconSetRootPath)) {
            fs.mkdirSync(iconSetRootPath);
        }
        if (!fs.existsSync(`${iconSetRootPath}/svg`)) {
            fs.mkdirSync(`${iconSetRootPath}/svg`);
        }
        if (!fs.existsSync(`${iconSetRootPath}/png`)) {
            fs.mkdirSync(`${iconSetRootPath}/png`);
        }
    }
    static moveFile(current, newPath) {
        fs.rename(current, newPath, function (err) {
            if (err)
                throw err;
        });
    }
}
exports.Util = Util;
//# sourceMappingURL=util.js.map