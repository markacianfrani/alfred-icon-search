const arg = require('arg');
import { find } from '../build/find.js';
import { importIcons } from '../build/import.js';
import { IconLibrary } from '../build/library.js';

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
        {
            '--copy-svg': Boolean
        },
        {
            argv: rawArgs.slice(2)
        }
    );
    return {
        find: args._[1],
        copySvg: args['--copy-svg'] || false,
        template: args._[0],
        import: args._[1],
        library: args._[1]
    };
}

export async function cli(args) {
    const options = parseArgumentsIntoOptions(args);
    let lib = new IconLibrary('/Users/mark/Desktop/lib')
    // let lib = new IconLibrary()


    try {

        if (options.template === 'import') {

            lib.addNewSet(options.import)
        }

        if (options.template === 'find') {
            const icons = find(lib, options.find);
        }
        if (options.template === 'library') {

            lib.addNewSet('testset');
            // console.log(lib.iconsets);


        }
    } catch (err) {
        console.log(err.message)
    }
}
