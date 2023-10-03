export function isValidPassword(password: string) {
	return hasValidLength(password);
}

function hasValidLength(password: string) {
	return password.length >= 8;
}
