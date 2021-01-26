import { Util } from '../src/util'

test('strips svg or png extension from filename', () => {
    const svgFilename = Util.parseFilename('test.svg')
    expect(svgFilename).toBe('test')

    const pngFilename = Util.parseFilename('pngfile.png')
    expect(pngFilename).toBe('pngfile')
})