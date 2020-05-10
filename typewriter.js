const sentence = "hello there from lighthouse labs";

const printAnimation = function(sentence) {
  for (const char in sentence) {
    
    setTimeout(() => {
      process.stdout.write(sentence[char]);
    }, 100 * char)
    
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, 100 * sentence.length);
  
};//end

printAnimation(sentence);



// for each character of the sentence 
//print it out with a delay of x ms after the previous char in the sentence

