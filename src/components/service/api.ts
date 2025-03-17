import axios from "axios";

const exchangerateToken = 'bd9db5a6f9126eb85eff6f17';
const newsapiToken = '8ba8b605d64a4c8688e43541c797aa51';

//функция выгрузки курсов валют

export const fetchCource = async () => {
    try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${exchangerateToken}/latest/RUB`);
        return response.data.conversion_rates;
    } catch (error) {
        console.log('Ошибки в выгрузке:', error);
    }
};

//функция выгрузки новостей

export const fetchNews = async () => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=Top business headlines in the US right now&pageSize=25&apiKey=${newsapiToken}`);
        return response.data.articles;
    } catch (error) {
        console.log('Ошибки при выгрузке:', error);
    }
};




