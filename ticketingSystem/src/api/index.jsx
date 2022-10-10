import axios from "axios";

// axios.interceptors.request.use(
//     async (config) => {
//       config.headers['Accept'] = 'application/json';
//       config.headers['Content-Type'] = 'application/json';
//       return config;
//     },
//     (error) => {
//       Promise.reject(error)
//     }
//   );
  
export const get = async (endpoint, body,options,config)=>{
    try {
        const response = await axios.get(
            endpoint,
            body,
            options,
            config
            );
            return {data:response.data, status: response.status};
    }
    catch(e){
        console.log(e);
        // throw e;
    }
};

export const post = async (endpoint, body,options, data)=>{
    try {
        const response = await axios.post(
            endpoint,
            body,
            options,
            data,
            );
            return response;
    }
    catch(e){
        console.log(e);
        // throw e;
        return e.response;
    }
};

export const put = async (endpoint, body,options)=>{
    try {
        const response = await axios.post(
            endpoint,
            body,
            options
            );
            return response;
    }
    catch(e){
        console.log(e);
        throw e;
    }
};
