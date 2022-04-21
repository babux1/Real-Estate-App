import axios from "axios";


export const baseUrl = "http://bayut.p.rapidapi.com"



export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '48bcd54e20msh39d427025e3cf1bp10c169jsnc471ae0a8b26'
          }        
    })

    return data;
}