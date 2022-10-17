import { destroy, get, post, put } from ".";



export const signIn = async (data)=>{
    const res = await post(
        'http://127.0.0.1:8000/api/login',data
        );
        return res;
    };

export const signUp = async (data)=>{
    const res = await post(
        'http://127.0.0.1:8000/api/register',
        data);
        return res;
    };


export const getUser = async (config)=>{
        const res = await get(
            'http://127.0.0.1:8000/api/user',config
        );
        return res;
    };

export const editUser = async (config,data,id)=>{
        const res = await put(
            `http://127.0.0.1:8000/api/user/${id}`,data,config
        );
        return res;
    };


export const delUser = async (config,id)=>{
        const res = await destroy(
            `http://127.0.0.1:8000/api/user/${id}`,config
        );
        return res;
    };


export const getRoles = async ()=>{
        const res = await get(
            'http://127.0.0.1:8000/api/roles-list',
        );
        return res;
    };