import axios from 'axios';

export const url = 'https://test-front.framework.team';

export const fetchPaitings = (searchQuery) => axios.get(`${url}/paintings?${searchQuery}`);
export const fetchLocations = () => axios.get(`${url}/locations`);
export const fetchAuthors = () => axios.get(`${url}/authors`);
