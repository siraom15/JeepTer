var fs = require('fs')
let data = require('./Data.json');
let text = "";
for (let index = 10; index <= 96; index++) {
    if (data[index] && data[index].name.th != 'เลย') {
        text+="เธอไม่ใช่"+data[index].name.th+"\n"
    }
}
text+="แต่เธอใช่เลย";
console.log(text);
fs.appendFile('jeep.txt', text, function (err) {
    if (err) throw err;
});