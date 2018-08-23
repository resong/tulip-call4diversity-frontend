import { API_BASE_URL } from './config';
import axios from 'axios';
import qs from 'qs';

/**
 * API Calls related to the list of conferences on the home page
 */
const sanitizeValues = values => ({
  ...values,
  compensation: values.compensation === 'yes' ? true : false,
  codeOfConduct: values.codeOfConduct === 'yes' ? true : false,
  scholarship: values.scholarship === 'yes' ? true : false
});

export default {
  getAll: () => axios.get(`${API_BASE_URL}/conference`),
  postSubmissionForm: values => {
    let data = sanitizeValues(values);

    data =
      data.url &&
      (!data.url.includes('http://') && !data.url.includes('https://'))
        ? { ...data, url: `http://${data.url}` }
        : data;

    data =
      data.submissionUrl &&
      (!data.submissionUrl.includes('http://') &&
        !data.submissionUrl.includes('https://'))
        ? { ...data, submissionUrl: `http://${data.submissionUrl}` }
        : data;

    const config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    return axios.post(`${API_BASE_URL}/conference`, qs.stringify(data), config);
  }
};
