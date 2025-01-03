import axios from 'axios';
const api = `https://github.com/hridesh-bharati/user_api/blob/main/api.js`
const diit = async () => {
    try {
        const res = await axios.get(api);
        const data = res.data;
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

diit();
