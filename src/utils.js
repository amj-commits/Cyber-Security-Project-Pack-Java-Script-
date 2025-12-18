// Import Node.js crypto module for secure hashing
import crypto from 'crypto';

// Function to analyze password strength
export function analyzePassword(password) {
    let score = 0;          // Numerical strength score
    let feedback = [];     // Stores suggestions and results

    // Check minimum length
    if (password.length >= 8) score += 25;
    else feedback.push("Use at least 8 characters.");

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) score += 15;
    else feedback.push("Add uppercase letters.");

    // Check for numbers
    if (/[0-9]/.test(password)) score += 20;
    else feedback.push("Add numbers.");

    // Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) score += 20;
    else feedback.push("Add special characters.");

    // Better with longer passwords
    if (password.length >= 12) score += 20;

    // Final strength evaluation
    if (score >= 80) feedback.push("Strong password.");
    else if (score >= 50) feedback.push("Decent, but can be improved.");
    else feedback.push("Weak password.");

    // Return score and feedback as an object
    return { score, feedback };
}

// Function to hash input using SHA-256
export function hashString(input) {
    // Create hash, update with input, and return hexadecimal digest
    return crypto.createHash('sha256').update(input).digest('hex');
}
