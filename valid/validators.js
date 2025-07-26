
export function validateName(name) {
    return /^([A-Za-z]+)_([A-Za-z]+)$/.test(name);
}

export function validateEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export function validatePhone(phone) {
    return /^(\+|\001)[0-9]{10,15}$/.test(phone);
}

export function formatUser(name, email, phone) {
    const [firstName, lastName] = name.split('_');
    return `(${firstName} ${lastName} ${email} ${phone})`;
}