var fs = require("fs");
console.log("run..");
var s = "define({" +
    "imageurls:["
var picreg=/jpg/gmi;
filenames = fs.readdirSync(".");
for (i = 0; i < filenames.length; i++) {
    console.log(picreg.exec(filenames[i]));
    if (picreg.exec(filenames[i])) {

        console.log(filenames[i]);
        s += "'background/" + filenames[i] + "',";
    }
}

s = s + "]});";

fs.writeFile('images.js', s, function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
});