import { API_BASE_URL } from "./config";

export const healthCheck = () =>
  fetch(`${API_BASE_URL}/health`).then(data => data);
