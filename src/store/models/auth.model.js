import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../utils/auth.firebase/auth'
import { ref, onValue } from "firebase/database";
import query from '../../utils/base.firebase/query';
const DEFAULT_STATE = {
  auth: [],
  profile: []
}
export const authentication = {
  state: { ...DEFAULT_STATE },
  reducers: {
    LOGOUT() {
      return {
        ...DEFAULT_STATE
      }
    },
    SET_AUTHEN(state, payload) {
      return { ...state, auth: payload }
    },
    SET_PROFILE(state, payload) {
      return { ...state, profile: payload }
    },
  },
  effects: (dispatch) => ({
    async login(payload) {
      signInWithEmailAndPassword(auth, payload?.email, payload?.password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch.authentication.SET_AUTHEN({
            displayName: user.displayName,
            accessToken: user.accessToken,
            email: user.email,
            last_login: user.metadata.lastSignInTime,
            is_authentication: true
          })
          const starCountRef = ref(query, 'users');
          onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            dispatch.authentication.SET_PROFILE(data[0])
          });
        })
        .catch((error) => {
          return 'email or password incorrect';
        })
    },
    async logout(payload) {
      dispatch.authentication.LOGOUT()
    },

  })
}
