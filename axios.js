import  axios from "axios";

// // const instance=axios.create({
// //     baseURL:"https://hp-api.onrender.com/api/characters",
// // });

// // export default  instance;// axiosInstances.js



// // Base URLs for different endpoints
const charactersBaseUrl = "https://hp-api.onrender.com/api/characters/students";
const staffBaseUrl = "https://hp-api.onrender.com/api/characters/staff";
const houseBaseUrl = "https://hp-api.onrender.com/api/characters/house";
const spellsBaseUrl = "https://hp-api.onrender.com/api/spells";

// Create instances for each endpoint
export const charactersInstance = axios.create({
  baseURL:charactersBaseUrl,
});

export const staffInstance = axios.create({
  baseURL: staffBaseUrl,
});

export const houseInstance = axios.create({
  baseURL: houseBaseUrl,
});

export const spellsInstance = axios.create({
  baseURL: spellsBaseUrl,
});
 export default axios;
 

