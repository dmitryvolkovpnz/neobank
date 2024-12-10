import axios from "axios";

const exchangerateToken = '47f2f45549aa29fad3be777b';
const newsapiToken = '8ba8b605d64a4c8688e43541c797aa51';

//функция выгрузки курсов валют

const fetchCource = async () => {
    try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${exchangerateToken}/latest/RUB`);
        return response.data.conversion_rates;
    } catch (error) {
        console.log('Ошибки в выгрузке:', error);
    }
};
export {fetchCource};

//функция выгрузки новостей

const fetchNews = async () =>{
    try{
        const response = await axios.get(`https://newsapi.org/v2/everything?q=Top business headlines in the US right now&pageSize=20&apiKey=${newsapiToken}`);
        return response.data.articles;
    } catch (error){
        console.log('Ошибки при выгрузке:', error);
    }
};
export {fetchNews};