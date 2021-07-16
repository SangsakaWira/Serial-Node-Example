const SerialPort = require('serialport')

const port = new SerialPort('COM3', {
    baudRate: 9600
})

exports.GetPintu = () => {
    let dataString = JSON.stringify(port.read())
    let dataJSON = JSON.parse(dataString)
    stream = String.fromCharCode.apply(String, dataJSON.data);
    if (stream === "1") {
        console.log("Pintu Terbuka")
    } else if (stream === "0") {
        console.log("Pintu Tertutup")
    }
}