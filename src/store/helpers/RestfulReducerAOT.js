/*
 * AOT - Ahead of time (Update the data before receiving the response)
 * For using this refer to RestfulReducer.logic.md
 */
const RestfulStateAOT = {etag: "", pages: new Set(), show: new Set(), list: {}};
const RestfulReducerAOT = {
	// eslint-disable-next-line max-params
	get(state, action, modelFn, update) {
		// Stop execution if the request has failed
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
		switch (action.status) {
			case "request":
				// Show the new temporary element on the list
				state.show.add(action.requestId);
				// Add the new temporary element on the list
				state.list[action.requestId] = modelFn(action.payload);
				// Return the state
				return {...state};

			case "error":
				// Hide the new temporary element from the list
				state.show.delete(action.requestId);
				// Remove the new temporary element from the list
				delete state.list[action.requestId];
				// Return the state
				return {...state};

			case "success":
				// Hide the new temporary element from the list
				state.show.delete(action.requestId);
				// Remove the new temporary element from the list
				delete state.list[action.requestId];
				// Show the new confirmed element on the list
				state.show.add(action.payload.id);
				// Show the new confirmed element on the list
				state.list[action.payload.id] = modelFn(action.payload);
				// Return the state
				return {...state};

			default:
				// Return the state
				return state;
		}
	},
	put(state, action, modelFn) {
		const selectedTarget = state.list[action.payload.id];
		switch (action.status) {
			case "request":
				// Update current data and save the previous data on backup
				state.list[action.payload.id] = modelFn({
					...selectedTarget,
					...action.payload,
					backup: selectedTarget,
				});
				// Return the state
				return {...state};

			case "error":
				// Return the previous data
				state.list[action.payload.id] = modelFn(state.list[action.payload.id].backup);
				// Return the state
				return {...state};

			case "success":
				// Return the previous data
				delete state.list[action.payload.id].backup;
				// Return the state
				return {...state};

			default:
				// Return the state
				return state;
		}
	},
	delete(state, action) {
		switch (action.status) {
			case "request":
				// Remove selected element from show list
				state.show.delete(action.payload.id);
				// Return the state
				return {...state};

			case "error":
				// Add selected element to the show list
				state.show.add(action.payload.id);
				// Return the state
				return {...state};

			case "success":
				// Remove the selected element completely
				delete state.list[action.payload.id];
				// Return the state
				return {...state};

			default:
				// Return the state
				return state;
		}
	},
};
export {RestfulReducerAOT, RestfulStateAOT};
