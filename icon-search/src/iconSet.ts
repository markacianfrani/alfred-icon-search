const fs = require('fs');
const sharp = require('sharp');
import { Util } from './util';
import { Icon } from './icon';

export class IconSet {
    public name: string;
    public _iconSetRootPath: string;
    public _icons: Icon[] = [];

    constructor(name: string, iconSetRootPath: string) {
        this.name = name;
        this._iconSetRootPath = iconSetRootPath
    }

    findIcons(name: string) {
        let data = require(`${this._iconSetRootPath}/data.json`);
        return data.filter((icon) => icon.name.includes(name));
    }

    addIcon(icon: Icon) {
        this._icons.push(icon);
    }

    get icons() {
        return this._icons;
    }

    get path() {
        return this._iconSetRootPath
    }

    get list() {
        let rawdata = fs.readdirSync(this._iconSetRootPath);
        return rawdata;
    }

    createDirectories() {
        Util.initFolderStructure(this._iconSetRootPath);

    }

}
