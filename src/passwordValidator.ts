export function isValidPassword(password: string) {
	const containsLessThanEightCharacters = password.length < 8;
	if (containsLessThanEightCharacters) {
		return false;
	}
	const notContainsNumbers = !password.match(/\d/);
	if (notContainsNumbers) {
		return false;
	}
	return true;
}
