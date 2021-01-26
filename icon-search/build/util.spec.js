"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../src/util");
test('strips svg or png extension from filename', () => {
    const svgFilename = util_1.Util.parseFilename('test.svg');
    expect(svgFilename).toBe('test');
    const pngFilename = util_1.Util.parseFilename('pngfile.png');
    expect(pngFilename).toBe('pngfile');
});
//# sourceMappingURL=util.spec.js.map