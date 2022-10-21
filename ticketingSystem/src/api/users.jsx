import { destroy, get, post, put } from ".";



export const signIn = async (data)=>{
    const res = await post(
        'https://ba47-49-124-200-218.ap.ngrok.io/api/login',data
        );
        return res;
    };

export const signUp = async (data)=>{
    const res = await post(
        'https://ba47-49-124-200-218.ap.ngrok.io/api/register',
        data);
        return res;
    };


export const getUser = async (config)=>{
        const res = await get(
            'https://ba47-49-124-200-218.ap.ngrok.io/api/user',config
        );
        return res;
    };

export const editUser = async (config,data,id)=>{
        const res = await put(
            `https://ba47-49-124-200-218.ap.ngrok.io/api/user/${id}`,data,config
        );
        return res;
    };


export const delUser = async (config,id)=>{
        const res = await destroy(
            `https://ba47-49-124-200-218.ap.ngrok.io/api/user/${id}`,config
        );
        return res;
    };


export const getRoles = async ()=>{
        const res = await get(
            'https://ba47-49-124-200-218.ap.ngrok.io/api/roles-list',
        );
        return res;
    };