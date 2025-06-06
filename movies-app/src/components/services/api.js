import axios from 'axios'
import qs from 'qs'
import { APP_TOKEN, BASE_URL } from "../../config/apiConfig";

const getData = async (type, genre) => {
    const url = BASE_URL
    console.log("getMovies called with type:", type);
    try {
        const response = await axios.get(`${url}/${genre}/${type}?language=en-US&page=1`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${APP_TOKEN}`,
            },
        });
        console.log("Response from getMovies:");
        console.log(response.data);
        return response.data.results;
    } catch (err) {
        console.error(err.response || err.message || err)
        if (err.response) {
            console.error('Status:', err.response.status);
            console.error('Data:', err.response.data);
            console.error('Header:', err.response.header);
          } else {
            console.error('Error:', err.message);
          }
    }
}

// const getMovies = async (type) => {
//     const url = BASE_URL
//     console.log("getMovies called with type:", type);
//     try {
//         const response = await axios.get(`${url}/movie/${type}?language=en-US&page=1`, {
//             headers: {
//                 accept: 'application/json',
//                 Authorization: `Bearer ${APP_TOKEN}`,
//             },
//         });
//         console.log("Response from getMovies:");
//         console.log(response.data);
//         return response.data.results;
//     } catch (err) {
//         console.error(err.response || err.message || err)
//         if (err.response) {
//             console.error('Status:', err.response.status);
//             console.error('Data:', err.response.data);
//             console.error('Header:', err.response.header);
//           } else {
//             console.error('Error:', err.message);
//           }
//     }
// }
// const getMovieDetail = async (id) => {
//     const url = BASE_URL
//     try {
//         const response = await axios.get(`${url}/movie/${id}?language=en-US`, {
//             headers: {
//                 accept: 'application/json',
//                 Authorization: `Bearer ${APP_TOKEN}`,
//             },
//         });
//         console.log(response);
//         return response.data;
//     } catch (err) {
//         console.error('Error fetching movies:', err);
//         return;
//     }
// }

// const getTVShows = async (type) => {
//     const url = BASE_URL
//     try {
//         const response = await axios.get(`${url}/tv/${type}?language=en-US&page=1`, {
//             headers: {
//                 accept: 'application/json',
//                 Authorization: `Bearer ${APP_TOKEN}`,
//             },
//         });
//         return response.data.results;
//     } catch (err) {
//         console.error('Error fetching tv:', err);
//         return;
//     }

// }

// const getTVDetail = async (id) => {
//     const url = BASE_URL
//     try {
//         const response = await axios.get(`${url}/tv/${id}?language=en-US`, {
//             headers: {
//                 accept: 'application/json',
//                 Authorization: `Bearer ${APP_TOKEN}`,
//             },
//         });
//         return response.data;
//     } catch (err) {
//         console.error('Error fetching tv:', err);
//         return;
//     }

// }
const getDetail = async (id, genre) => {
    const url = BASE_URL
    try {
        const response = await axios.get(`${url}/${genre}/${id}?language=en-US`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${APP_TOKEN}`,
            },
        });
        return response.data;
    } catch (err) {
        console.error('Error fetching tv:', err);
        return;
    }

}
const searchContent = async (input, type) => {
    const url = BASE_URL
    try {
        const response = await axios.get(`${url}/search/${type}?query=${input}&include_adult=false&language=en-US&page=1`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${APP_TOKEN}`,
            },
        });
        return response.data.results;
    } catch (err) {
        console.error('Error fetching tv:', err);
        return;
    }
}



export {
    getData,
    getDetail,
    searchContent
};
