import { ref, onValue } from "firebase/database";

import query from '../../utils/base.firebase/query';
const DEFAULT_STATE = {
	category: []
}
export const category = {
	state: { ...DEFAULT_STATE },
	reducers: {
		SET_CATEGORY(state, payload) {
			return { ...state, category: payload }
		},
	},
	effects: (dispatch) => ({
		async fetchCategory(payload) {
			const starCountRef = ref(query, payload);
			onValue(starCountRef, (snapshot) => {
				const data = snapshot.val();
				dispatch.category.SET_CATEGORY(data)
			});
		}
	})
}
