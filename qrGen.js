
var QRCode = require('qrcode')

var date = new Date().toLocaleTimeString()
var num = 0;
console.log(date);

function ritual(file) {
    var fs = require('fs'),
        readline = require('readline'),
        instream = fs.createReadStream(file),
        outstream = new(require('stream'))(),
        rl = readline.createInterface(instream, outstream);

    rl.on('line', function (line) {
        console.log(line);
        if (line !== "public_key") {
            num += 1
            QRCode.toFile('./' + date + '-'+num+'.png', line, {
                color: {
                    dark: '#000',
                    light: '#fff'
                }
            }, function (err) {
                if (err) throw err
                console.log('done')
            })
        }
    });

    rl.on('close', function (line) {
        console.log(line);
        console.log('done reading file.');
    });
}

ritual('./data.csv')