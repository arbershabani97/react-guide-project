/*
 * Restful Reducer waits for the request to be completed in order to update the data
 * For using this refer to RestfulReducer.logic.md
 */
const RestfulState = {etag: "", pages: new Set(), show: new Set(), list: {}};
const RestfulReducer = {
	get(state, action, update) {
		// Reset Show and Pages when paginating
		if (update) {
			state.pages = new Set();
			state.show = new Set();
		}
		// Stop execution if the request has failed
		if (action.status !== "success") return state;
		// Set Current Etag
		state.etag = action.etag;
		// Add Current Page to Pages
		state.pages.add(action.payload.meta.currentPage);
		// Add the data to the list
		action.payload.data.forEach((target) => {
			// Add Show Data
			state.show.add(target.id);
			// Add Each Item to the List
			state.list[target.id] = target;
		});
		/*
		 * for (let a = 0; a < 100; a++) {
		 * 	// Add the data to the list
		 * 	action.payload.data.forEach((target) => {
		 * 		// Add Show Data
		 * 		state.show.add(target.id + String(a));
		 * 		// Add Each Item to the List
		 * 		state.list[target.id + String(a)] = target;
		 * 	});
		 * }
		 */

		// Return the state
		return {...state};
	},
	post(state, action) {
		if (action.status === "success") {
			// Show the new confirmed element on the list
			state.show.add(action.payload.id);
			// Show the new confirmed element on the list
			state.list[action.payload.id] = action.payload;
			// Return the state
			return {...state};
		}
		// Return the state
		return state;
	},
	put(state, action) {
		if (action.status === "success") {
			// Update the current data
			const selectedTarget = state.list[action.payload.id];
			state.list[action.payload.id] = {
				...selectedTarget,
				...action.payload,
			};
			// Return the state
			return {...state};
		}
		// Return the state
		return state;
	},
	delete(state, action) {
		if (action.status === "success") {
			// Remove selected element from show list
			state.show.delete(action.payload.id);
			// Remove the selected element completely
			delete state.list[action.payload.id];
			// Return the state
			return {...state};
		}
		// Return the state
		return state;
	},
};
export {RestfulReducer, RestfulState};
