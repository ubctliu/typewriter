const sentence = "hello there from lighthouse labs";
let START_DELAY = 0;

const typeWriter = function(char, time, increase) {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += increase;
  }
  setTimeout(() => process.stdout.write('\n'), time);
};

typeWriter(sentence, START_DELAY, 50);