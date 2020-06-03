const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdin.resume();
function exitHandler(options) {
  if (options.cleanup) console.log('Thanks for using me, ciao!');
  if (options.exit) process.exit();
}
process.on('exit', exitHandler.bind(null,{cleanup:true}));


rl.question('Input a number from 1 to 9 \n', (answer) => {
  if (answer === 'b') {
    // process.stdout.write('\x07');
    process.stdout.write('\x07')
    
  } else if (answer >= 1 && answer <= 9) {
    process.stdout.write( `Setting timer for ${answer} seconds\n`)
    const beepBoop = (answer) => {
      // for (const num of nums) {
       
          setTimeout(() => {
             process.stdout.write('\x07');
          }, 1000 * answer);
      //  }
    }
    
    
    
    beepBoop(answer);
  } else {
    rl.close()
  }
  
});

// const beepBoop = (time) => {
//   if (time >= 1 && time <= 9) {
//       setTimeout(() => {
//         process.stdout.write('\x07');
//       }, 1000 * time);
//     }

// }

// beepBoop(time);
