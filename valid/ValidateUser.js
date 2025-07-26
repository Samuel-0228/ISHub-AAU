import fs from 'fs/promises';
import { validateName, validateEmail, validatePhone, formatUser } from './validators.js';

async function processUserFile(inputFilePath, outputFilePath) {
    try {
        const data = await fs.readFile(inputFilePath, 'utf-8');
        const users = data.trim().split('\n');
        const totalUsers = users.length;
        let validUsers = 0;
        let invalidUsers = [];
        let formattedValidUsers = [];

        for (const user of users) {
            const [name, email, phone] = user.trim().split(/\s+/);
            const errors = [];

            if (!validateName(name)) errors.push('Invalid name format');
            if (!validateEmail(email)) errors.push('Invalid email format');
            if (!validatePhone(phone)) errors.push('Invalid phone format');

            if (errors.length === 0) {
                validUsers++;
                formattedValidUsers.push(formatUser(name, email, phone));
            } else {
                invalidUsers.push({ user, errors });
            }
        }

        // Write to validUsers.txt
        await fs.writeFile(outputFilePath, formattedValidUsers.join('\n'), 'utf-8');

        // Console report
        console.log(`Total users processed: ${totalUsers}`);
        console.log(`Number of valid users: ${validUsers}`);
        console.log(`Number of invalid users: ${invalidUsers.length}`);
        if (invalidUsers.length > 0) {
            console.log('Invalid users with details:', invalidUsers);
        }
    } catch (error) {
        console.error('Error processing file:', error);
    }
}

processUserFile('random_user_data (2).txt', 'validUsers.txt');