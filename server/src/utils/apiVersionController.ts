function validateVersion(version: string) {
	if (version === '/v1') {
		return '1.0';
	} else if (version === '/v2') {
		return '2.0';
	} else {
		return null;
	}
}
export default validateVersion;
