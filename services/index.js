import axios from 'axios';

import { Config } from '../src/config';

axios.defaults.baseURL = Config.API_BASE_URL;


export { axios };
export * from './blogArticles';