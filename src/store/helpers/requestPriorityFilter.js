const requestPriorityFilter = (a,b) => {
    if(a.id === b.id && Number(a.requestId) > Number(b.requestId)) return true;
    return a.id === b.id;
};
export default requestPriorityFilter;