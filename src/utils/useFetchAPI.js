import {useState} from "react";

export const useFetchAPI = ({apiFn, data}) => {
	const [results, setResults] = useState();
	const [error, setError] = useState("");

	const handleClick = async () => {
		try {
			const {data: res} = await apiFn(data);
			setResults(res);
		} catch (e) {
			setError(e?.response || "No Internet Connection!");
		}
	};

	return {
		handleClick, 
		results, 
		apiError: error 
	};
};
