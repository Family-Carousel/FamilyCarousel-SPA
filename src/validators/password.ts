export function hasNumber(value): boolean {
    return (/\d/.test(value)) ? true : false;
}

export function hasLowerCaseLetter(value): boolean {
    return (/[a-z]/.test(value)) ? true : false;
}

export function hasUpperCaseLetter(value): boolean {
    return (/[A-Z]/.test(value)) ? true : false;
}

export function hasSpecialCharacter(value): boolean {
    return (/[^$*.[\]{}()!@#%&/\\,<>':;|_~`]/.test(value)) ? true : false;
}
