const file = {
    result: null,
    uploadFile: function (f) {
        const reader = new FileReader()
        reader.readAsArrayBuffer(f)
        reader.onload = () => {
            this.result = reader.result
        }
    }
}

module.exports = file