import axios from 'axios';



export default axios.create({
// to solve cors problem add below code
//  baseURL: 'https://9c96-103-106-239-104.ap.ngrok.io',
//  headers:{"ngrok-skip-browser-warning": "true"}

// use localhost:8080 instead of ngrok link.
baseURL: 'http://localhost:8080/',

});
