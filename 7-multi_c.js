const args = process.argv.slice(2);
const times = parseInt(args[0]);

if (isNaN(times)) {
  console.log("Missing number of occurrences");
} else if (times > 0) {
  for (let i = 0; i < times; i++) {
    console.log("C is fun");
  }
}
