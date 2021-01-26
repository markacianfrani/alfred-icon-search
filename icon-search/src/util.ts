const fs = require('fs');

export class Util {
    static parseFilename(input: string) {
        return input.replace('.png', '').replace('.svg', '');
    }

    static initFolderStructure(iconSetRootPath: string) {
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

    static moveFile(current: string, newPath: string) {
        fs.rename(current, newPath, function (err) {
            if (err) throw err;
        });
    }
}