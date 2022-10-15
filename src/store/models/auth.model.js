import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../utils/auth.firebase/auth'
const DEFAULT_STATE = {
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
    SET_PROFILE(state, payload) {
      return { ...state, profile: payload }
    },
  },
  effects: (dispatch) => ({
    async login(payload) {
      signInWithEmailAndPassword(auth, payload?.email, payload?.password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch.authentication.SET_PROFILE({
            displayName: user.displayName,
            accessToken: user.accessToken,
            email: user.email,
            last_login: user.metadata.lastSignInTime,
            is_authentication: true
          })
        })
        .catch((error) => {
          return 'email or password incorrect';
        });
    },
    async logout(payload) {
      dispatch.authentication.LOGOUT()
    }
  })
}
