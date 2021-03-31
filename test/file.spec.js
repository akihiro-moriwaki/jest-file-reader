const file = require('@/app/file')
const cloneDeep = require('lodash/cloneDeep')

test('file.uploadFile', () => {
    const result = [1, 2, 3]
    const fileReader = {
        onload: jest.fn(),
        result,
        readAsArrayBuffer: jest.fn()
    }
    jest.spyOn(global, 'FileReader').mockImplementation(() => fileReader)

    const uint8Array = new Uint8Array(result)
    const arrayBuffer = uint8Array.buffer
    const blob = new Blob([arrayBuffer])
    file.uploadFile(blob)
    fileReader.onload()
    expect(file.result).toEqual(cloneDeep(result))
})
