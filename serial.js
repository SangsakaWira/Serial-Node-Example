// References
// https://www.npmjs.com/package/serialport
// https://medium.com/@kimiyukiyukawa/membaca-data-serial-melalui-website-dengan-serialport-io-2b2f40c1c031

const SerialPort = require('serialport')
const port = new SerialPort('COM3', {
  baudRate: 9600
})
let count = 0

// Open errors will be emitted as an error event
port.on('error', function (err) {
  console.log('Error: ', err.message)
})

// Read data that is available but keep the stream in "paused mode"
port.on('readable', function () {
  let dataString = JSON.stringify(port.read())
  let dataJSON = JSON.parse(dataString)
  stream = String.fromCharCode.apply(String, dataJSON.data);
  if (stream === "1") {
    count++
    console.log("Pintu Terbuka")
    console.log(`${count} detik`)
     // LOGIC GOES HERE


      
      // END LOGIC
  } else if (stream === "0") {
    if(count !== 0){
      console.log(`Pintu Tertutup, Terbuka Selama ${count} detik`)
      // LOGIC GOES HERE


      
      // END LOGIC
    }
    count = 0
  }
})