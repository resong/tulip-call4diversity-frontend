import { API_BASE_URL } from "./config";
import axios from "axios";

/**
 * API Calls related to the list of conferences on the home page
 */
export default {
  getAll: () => axios.get(`${API_BASE_URL}/conference`)
};
