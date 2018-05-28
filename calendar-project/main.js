console.log('main.js');

const date = require("./lib/date.js");  // gives us getDateDiff()

var firstDate = process.argv[2];
var lastDate = process.argv[3];

if(process.argv.length < 4) {
  console.log('----------- INSTRUCTIONS TO RUN TEST ---------------------------')
  console.log('Please give the correct number of arguments');
  console.log('Format on Command line: npm run start "start_date" "end_date" ');
  console.log('eg: npm run start "01/01/2000" "02/01/2000" ');
  console.log('-----------------------------------------------------------\n\n\n')
  return;
}

const result = date(firstDate, lastDate);
console.log(result);
