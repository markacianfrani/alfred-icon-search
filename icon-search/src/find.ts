const fs = require('fs');

export function findSvg(icon) {
    const filepath = `./icon-search/lib/${icon.set}/svg/${icon.name}.svg`;
    try {
        const svg = fs.readFileSync(filepath, 'utf8');
        if (svg) {
            return svg;
        }
    } catch (e) {
        return '';
    }
}

export function find(lib, options) {
    const ionic = require(`${lib.path}/ionicons/data.json`);
    const hero = require(`${lib.path}/heroicons/data.json`);
    const data = [...ionic, ...hero];

    return data.filter(icon => icon.name.includes(options));
}
