export function hasNumber(value) {
	return (/\d/.test(value)) ? true : false;
}

export function hasLowerCaseLetter(value) {
	return (/[a-z]/.test(value)) ? true : false;
}

export function hasUpperCaseLetter(value) {
	return (/[A-Z]/.test(value)) ? true : false;
}

export function hasSpecialCharacter(value) {
	return (/[^$*.[\]{}()!@#%&/\\,<>':;|_~`]/.test(value)) ? true : false;
}
