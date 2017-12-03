var fs = require('fs');
var path = require('path');
fs.writeFileSync("corn.txt","Hi hello everyone");
console.log(fs.readFileSync("corn.txt").toString());
var websiteHome = "Desktop/venky//angularjs/index.html";
console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteHome));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteHome));