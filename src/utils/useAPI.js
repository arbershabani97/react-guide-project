import {useCallback, useState} from "react";
import _debounce from "lodash/debounce";

export const useAPI = ({apiFn, debounceTime = 300, reset}) => {
	const [error, setError] = useState("");
	const onSubmit = useCallback(
		_debounce(async (data) => {
			try {
				await apiFn(data);
				reset();
			} catch (e) {
				setError(e?.response || "No Internet Connection!");
			}
		}, debounceTime),
		[],
	);

	return {
		onSubmit, 
		apiError: error
	};
};
