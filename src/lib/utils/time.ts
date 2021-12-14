export const formatDate = (s: string): string => {
	const t = new Date(s);
	if (isNaN(t.getTime())) {
		return '';
	}
	return t.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
};
