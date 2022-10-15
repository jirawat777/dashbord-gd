import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import configFirebase from '../config.firebase/config'

const app = initializeApp(configFirebase);
const auth = getAuth(app);
export default auth