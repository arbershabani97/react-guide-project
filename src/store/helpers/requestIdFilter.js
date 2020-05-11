const requestIdFilter = (a, b) => {
	if (a.requestId && b.requestId) return a.id === b.id || a.requestId === b.requestId;
	return a.id === b.id;
};
export default requestIdFilter;