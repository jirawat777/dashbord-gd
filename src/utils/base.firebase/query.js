import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import configFirebase from '../config.firebase/config'

const app = initializeApp(configFirebase);
const query = getDatabase(app);
export default query