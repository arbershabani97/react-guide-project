import _debounce from "lodash/debounce";
import {useCallback, useState} from "react";

export const useAPI = ({apiFn, debounceTime = 300, reset}) => {
	const [error, setError] = useState("");
	const onSubmit = useCallback(
		_debounce(async (data) => {
			try {
				await apiFn(data);
				reset();
			} catch (error_) {
				setError(error_?.response || "No Internet Connection!");
			}
		}, debounceTime),
		[],
	);

	return {
		onSubmit,
		apiError: error,
	};
};
