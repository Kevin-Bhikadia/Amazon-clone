import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-1ec4e.cloudfunctions.net/api' 
    // 'http://localhost:5001/clone-1ec4e/us-central1/api' // API (Cloud function) URL
})

export default instance;