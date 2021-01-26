const fs = require('fs');
const sharp = require('sharp');
import { Util } from './util';



export class Icon {
    constructor(public name: string, public set: string) {}
}

export class IconSet {
    public name: string;
    // public path: String;
    public _libraryPath: string;
    public _icons: Icon[] = [];

    constructor(name: string, path: string) {

        // const dirName = Util.initFolderStructure(name, path);
        // this.name = dirName;
        this.name = name;


        this._libraryPath = path
    }
    findIcons(name: string) {
        let data = require(`${this._libraryPath}/data.json`);
        return data.filter((icon) => icon.name.includes(name));
    }

    addIcon(icon: Icon) {
        this._icons.push(icon);
    }

    get icons() {
        return this._icons;
    }

    get path() {
        return this._libraryPath
    }

    get list() {
        let rawdata = fs.readdirSync(this._libraryPath);
        return rawdata;
    }

    createDirectories() {
        Util.initFolderStructure(this._libraryPath);

    }

    // initNewSet() {
    //     const pendingIcons = fs.readdirSync(this._importPath);

    //     let promiseArr = pendingIcons.map((icon) => {
    //         return sharp(`${this._importPath}/${icon}`)
    //             .png()
    //             .toFile(
    //                 `${this._libraryPath}/png/${icon.replace('.svg', '.png')}`
    //             )
    //             .then((info) => {
    //                 Util.moveFile(
    //                     `./import/svg/${icon}`,
    //                     `./${this._libraryPath}/svg/${icon}`
    //                 );
    //                 this.addIcon(new Icon(Util.parseFilename(icon), this.name));
    //                 return info;
    //             });
    //     });
    //     Promise.all(promiseArr).then((r) => {
    //         fs.writeFile(
    //             `./${this._libraryPath}/data.json`,
    //             JSON.stringify(this.icons),
    //             'utf8',
    //             () => {}
    //         );
    //     });
    // }
}

const defaultOptions = {
    name: null,
    libPath: 'lib',
    importPath: './import/svg',
};

export function importIcons(config) {
    let options = { ...defaultOptions, ...config };

    if (!options.name) {
        throw new Error('A name is required');
    }


    let iconSet = new IconSet(
        options.name,
        options.libPath,
    );

    iconSet.list
    // iconSet.initNewSet();
    // return iconSet;
}
