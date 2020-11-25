import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let changeurl = url;
    if (country){
        changeurl =  `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeurl) 

        return {confirmed, recovered, deaths, lastUpdate};
        

    } catch(error){
        console.log(error);

    }
}

export const fetchdailydata = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifieddata = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifieddata;
    } catch (error){

    }
}

export const fetchcountries = async () => {
    try{
        const { data: { countries }} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    }catch(error){
        console.log(error);
    }
}