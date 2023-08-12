import  axios from "axios";

const instance=axios.create({
    baseURL:"https://hp-api.onrender.com/api/characters",
});

export default  instance;