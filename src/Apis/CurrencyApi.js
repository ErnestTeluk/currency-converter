import axios from 'axios';

const CurrencyApi = axios.create({
  baseURL: 'https://api.exchangeratesapi.io',
});

export default CurrencyApi;
