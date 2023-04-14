import axios from "axios";

const Base_url = "https://youtube138.p.rapidapi.com"

const options = {
    params: { hl: 'en', gl: 'US' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_APP_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (URL) => {
    const { data } = await axios.get(`${Base_url}/${URL}`, options);
    return data;
}