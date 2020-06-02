const nums = process.argv.splice(2);

const beepBoop = (nums) => {
  for (const num of nums) {
    if (num >= 1) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, 1000 * num);
    }
   }
}



beepBoop(nums);