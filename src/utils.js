import crypto from 'crypto';


export function analyzePassword(password) {
    let score = 0;
    let feedback = [];


    if (password.length >= 8) score += 25;
    else feedback.push("Use at least 8 characters.");


    if (/[A-Z]/.test(password)) score += 15;
    else feedback.push("Add uppercase letters.");


    if (/[0-9]/.test(password)) score += 20;
    else feedback.push("Add numbers.");


    if (/[^A-Za-z0-9]/.test(password)) score += 20;
    else feedback.push("Add special characters.");


    if (password.length >= 12) score += 20;


    if (score >= 80) feedback.push("Strong password.");
    else if (score >= 50) feedback.push("Decent, but can be improved.");
    else feedback.push("Weak password.");


    return { score, feedback };
}


export function hashString(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
}
