"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sharp = require('sharp');
const util_1 = require("./util");
const icon_1 = require("./icon");
const iconSet_1 = require("./iconSet");
const fs = require('fs');
class IconLibrary {
    constructor(path) {
        this._path = '../lib';
        // public _importPath =  './import/svg';
        this._importPath = '/Users/mark/Desktop/test';
        if (path) {
            this._path = path;
        }
        if (!fs.existsSync(this._path)) {
            throw new Error(`Directory '${this._path}' Not Found`);
        }
    }
    get path() {
        return this._path;
    }
    get iconSets() {
        // TODO Validate directory exists
        // console.log('paa', this._path);
        return fs.readdirSync(this._path);
        // console.log('a', fs.existsSync(this._path));
        // return fs.readdir(this._path, (err, list) => {
        //     console.log('list', list);
        //     let IconSets = [];
        //     // Ignore hidden files (ds store)
        //     list.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item)).map(set => {
        //         let iconset = new IconSet(set, this._path+'/'+set);
        //         IconSets.push(iconset);
        //     })
        //     return IconSets;
        //   });
    }
    hasSet(setName) {
        console.log('this', this.iconSets);
        // return this.iconSets.filter(iconSet => {
        //     console.log('iconSet', iconSet);
        // })
    }
    addNewSet(name) {
        const dirName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        let newSet = new iconSet_1.IconSet(dirName, this._path + '/' + dirName);
        newSet.createDirectories();
        const pendingIcons = fs.readdirSync(this._importPath);
        let promiseArr = pendingIcons.map((icon) => {
            return sharp(`${this._importPath}/${icon}`)
                .png()
                .toFile(`${newSet.path}/png/${icon.replace('.svg', '.png')}`)
                .then((info) => {
                util_1.Util.moveFile(`${this._importPath}/${icon}`, `${newSet.path}/svg/${icon}`);
                newSet.addIcon(new icon_1.Icon(util_1.Util.parseFilename(icon), name));
                return info;
            });
        });
        Promise.all(promiseArr).then((r) => {
            fs.writeFile(`${newSet.path}/data.json`, JSON.stringify(newSet.icons), 'utf8', () => { });
        });
    }
    list() {
    }
}
exports.IconLibrary = IconLibrary;
//# sourceMappingURL=library.js.map