import axios, { AxiosResponse } from 'axios';

export const API_URL: string = 'https://bayut.p.rapidapi.com';

export const getAPIService = async (url: string) => {
    const { data }: AxiosResponse = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY || '',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    return data;
};