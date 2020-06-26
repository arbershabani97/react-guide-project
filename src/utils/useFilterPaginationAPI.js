import {useState, useCallback} from "react";
import _debounce from "lodash/debounce";

export const useFilterPaginationAPI = ({apiFn, debounceTime = 500}) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [loadedPages, setLoadedPages] = useState(new Set());
	const [results, setResults] = useState();
	const [error, setError] = useState();

	const handleFetch = useCallback(
		_debounce(async (data, reset) => {
			try {
				if (reset) {
					const {data: res} = await apiFn(data, reset);
					setCurrentPage(data.page);
					setLoadedPages(new Set());
					setResults(res);
				} else if (!loadedPages.has(data.page)){
					setLoadedPages(_loadedPages=> new Set(_loadedPages).add(data.page));
					const {data: res} = await apiFn(data);
					setCurrentPage(data.page);
					setResults(res);
				}
			} catch (e) {
				setLoadedPages(_loadedPages=> new Set(_loadedPages).delete(data.page));
				setError(e?.response || "No Internet Connection!");
			}
		}, debounceTime),
	);

	return {
		handleFetch, 
		results, 
		apiError: error,
		currentPage, 
		loadedPages
	};
};
