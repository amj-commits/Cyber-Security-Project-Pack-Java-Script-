// Import readline to handle user input from the terminal
import readline from 'readline';

// Import helper functions for password analysis and hashing
import { analyzePassword, hashString } from './utils.js';

// Create the readline interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main menu function (loops after each action)
function menu() {
    // Display menu options
    console.log("\n=== Cybersecurity Tool ===");
    console.log("1) Analyze Password Strength");
    console.log("2) Hash a String (SHA-256)");
    console.log("3) Exit");

    // Ask the user to choose an option
    rl.question("Choose an option: ", (choice) => {

        // Option 1: Analyze password strength
        if (choice === '1') {
            rl.question("Enter password to analyze: ", (pw) => {
                const result = analyzePassword(pw); // Check password
                console.log("\nPassword Score:", result.score);
                console.log("Feedback:", result.feedback);
                menu(); // Return to menu
            });
        }

        // Option 2: Hash a string using SHA-256
        else if (choice === '2') {
            rl.question("Enter text to hash: ", (txt) => {
                console.log("SHA-256 Hash:", hashString(txt));
                menu(); // Return to menu
            });
        }

        // Option 3: Exit the program
        else if (choice === '3') {
            rl.close(); // Close readline interface
        }

        // Handle invalid input
        else {
            console.log("Invalid input.");
            menu(); // Re-display menu
        }
    });
}

// Start program
menu();
