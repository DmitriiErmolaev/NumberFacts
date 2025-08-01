import axios, { type AxiosResponse } from "axios";

const NUMS_BASE_URL = 'http://numbersapi.com';

export const getNumbers = async (endpoint: string) => await axios.get<string, AxiosResponse<string>>(`${NUMS_BASE_URL}${endpoint}`);

export {default as useGetFacts} from './useGetFacts';