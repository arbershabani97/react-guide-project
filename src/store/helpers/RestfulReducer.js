/*
 * Restful Reducer waits for the request to be completed in order to update the data
 * For using this refer to RestfulReducer.logic.md
 */
const RestfulState = {etag: "", pages: new Set(), show: new Set(), list: {}};
const RestfulReducer = {
	// eslint-disable-next-line max-params
	get(state, action, modelFn, update) {
		// Stop Execution if request doesn't succeed
		if (action.status !== "success") return state;
		// Set Current Etag
		state.etag = action.etag;
		// Reset Show and Pages when paginating
		if (update) {
			state.pages = new Set();
			state.show = new Set();
		}
		// Add Current Page to Pages
		state.pages.add(action.payload.meta.currentPage);
		// Add the data to the list
		action.payload.data.forEach((target) => {
			// Add Show Data
			state.show.add(target.id);
			// Add Each Item to the List
			state.list[target.id] = modelFn(target);
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
	post(state, action, modelFn) {
		// Stop Execution if request doesn't succeed
		if (action.status !== "success") return state;
		// Show the new confirmed element on the list
		state.show.add(action.payload.id);
		// Show the new confirmed element on the list
		state.list[action.payload.id] = modelFn(action.payload);
		// Return the state
		return {...state};
	},
	put(state, action, modelFn) {
		// Stop Execution if request doesn't succeed
		if (action.status !== "success") return state;
		// Update the current data
		const selectedTarget = state.list[action.payload.id];
		state.list[action.payload.id] = modelFn({
			...selectedTarget,
			...action.payload,
		});
		// Return the state
		return {...state};
	},
	delete(state, action) {
		// Stop Execution if request doesn't succeed
		if (action.status !== "success") return state;
		// Remove selected element from show list
		state.show.delete(action.payload.id);
		// Remove the selected element completely
		delete state.list[action.payload.id];
		// Return the state
		return {...state};
	},
};
export {RestfulReducer, RestfulState};
