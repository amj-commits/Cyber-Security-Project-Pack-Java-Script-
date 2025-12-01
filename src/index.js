import readline from 'readline';
import { analyzePassword, hashString } from './utils.js';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function menu() {
console.log("\n=== Cybersecurity Tool ===");
console.log("1) Analyze Password Strength");
console.log("2) Hash a String (SHA-256)");
console.log("3) Exit");


rl.question("Choose an option: ", (choice) => {
    if (choice === '1') {
        rl.question("Enter password to analyze: ", (pw) => {
            const result = analyzePassword(pw);
            console.log("\nPassword Score:", result.score);
            console.log("Feedback:", result.feedback);
            menu();
        });
     }
     else if (choice === '2') {
         rl.question("Enter text to hash: ", (txt) => {
             console.log("SHA-256 Hash: ", hashString(txt));
             menu();
         });
      }
      else if (choice === '3') {
          rl.close();
      }
  else {
      console.log("Invalid input.");
      menu();
    }
 });
}


menu();
