const sharp = require('sharp');

import { Util } from "./util";
import { Icon } from "./icon"
import { IconSet } from "./iconSet"

const fs = require('fs');
export class IconLibrary {

    public _path = '../lib';
    // public _importPath =  './import/svg';
    public _importPath =  '/Users/mark/Desktop/test';

    constructor(path?: string) {


        if (path) {
                this._path = path;
        }

        if (!fs.existsSync(this._path)) {
            throw new Error(`Directory '${this._path}' Not Found`)
        }

    }

    get path() {
        return this._path
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
    hasSet(setName: string) {
        console.log('this', this.iconSets);

        // return this.iconSets.filter(iconSet => {
        //     console.log('iconSet', iconSet);


        // })

    }

    addNewSet(name: string) {


        const dirName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();

        let newSet = new IconSet(dirName, this._path+'/'+dirName);


        newSet.createDirectories();

        const pendingIcons = fs.readdirSync(this._importPath);

        let promiseArr = pendingIcons.map((icon) => {


            return sharp(`${this._importPath}/${icon}`)
                .png()
                .toFile(
                    `${newSet.path}/png/${icon.replace('.svg', '.png')}`
                )
                .then((info) => {
                    Util.moveFile(
                        `${this._importPath}/${icon}`,
                        `${newSet.path}/svg/${icon}`
                    );
                    newSet.addIcon(new Icon(Util.parseFilename(icon), name));
                    return info;
                });
        });
        Promise.all(promiseArr).then((r) => {
            fs.writeFile(
                `${newSet.path}/data.json`,
                JSON.stringify(newSet.icons),
                'utf8',
                () => {}
            );
        });

    }

    list() {




    }

}