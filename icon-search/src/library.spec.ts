import { IconLibrary } from '../src/library';

const fs = require('fs');

test('can get path', () => {
    const Library = new IconLibrary('./');
    expect(Library.path).toBe('./');
});

test('throws error if path is invalid', () => {
    try {
        const Library = new IconLibrary('notarealdir');
    } catch (e) {
        expect(e.message).toBe("Directory 'notarealdir' Not Found");
    }
});

describe('loading icon sets', () => {
    test('no icon sets', () => {
        const Library = new IconLibrary('./test/data');
        expect(Library.iconSets).toHaveLength(0);
        // Library.addNewSet('Test');
        // expect(Library.iconSets).toHaveLength(1);
    });
});
