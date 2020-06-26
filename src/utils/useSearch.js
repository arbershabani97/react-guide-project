import {useState, useCallback} from "react";
import _debounce from "lodash/debounce";

export const useSearch = ({apiFn, debounceTime = 700}) => {
	const [searchValue, setSearchValue] = useState("");
	const [results, setResults] = useState([]);
	const [error, setError] = useState("");

	const submitSearch = useCallback(
		_debounce(async (search) => {
			try {
				if (!search) return;
				const {data} = await apiFn({search});
				setResults(data);
			} catch (e) {
				setError(e?.response || "No Internet Connection!");
			}
		}, debounceTime),
		[],
	);

	const handleChange = (e) => {
		setSearchValue(e.target.value);
		submitSearch(e.target.value);
	};

	return {
		searchValue,
		results,
		handleChange,
		apiError: error,
	};
};
