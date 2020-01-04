import axios from 'axios';

const options = {
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.VUE_APP_API_KEY
    }
};

export default {
    family(data) {
        return axios.post('', data, options).then(response => {
            return response.data;
        });
    }
};