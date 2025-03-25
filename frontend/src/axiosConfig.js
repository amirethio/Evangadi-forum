// import axios from 'axios';

// const Instance = axios.create({
//   baseURL: "https://evangadi-forum-backend-i25l.onrender.com/api",
// });

// export default Instance;

import axios from 'axios'  

const Instance = axios.create({ 
    baseURL: 'http://localhost:5500/api',
})

export default Instance

