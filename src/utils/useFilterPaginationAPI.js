import _debounce from "lodash/debounce";
import {useCallback, useState} from "react";

export const useFilterPaginationAPI = ({apiFn, debounceTime = 500}) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [loadedPages, setLoadedPages] = useState([]);
	const [results, setResults] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleFetch = useCallback(
		// eslint-disable-next-line max-statements
		_debounce(async (data, reset) => {
			try {
				setLoading(true);
				if (reset) {
					const {data: res} = await apiFn(data, reset);
					setCurrentPage(data.page);
					setLoadedPages([]);
					setResults(res);
				} else if (!loadedPages.includes(data.page)) {
					const updatedPages = [...loadedPages, data.page];
					setLoadedPages(updatedPages);
					const {data: res} = await apiFn(data);
					setCurrentPage(data.page);
					setResults(res);
				}
				setLoading(false);
			} catch (error_) {
				const updatedPages = loadedPages.filter((page) => page !== data.page);
				setLoadedPages(updatedPages);
				setError(error_?.response || "No Internet Connection!");
				setLoading(false);
			}
		}, debounceTime),
	);

	return {
		handleFetch,
		results,
		apiError: error,
		currentPage,
		loadedPages,
		loading,
	};
};
