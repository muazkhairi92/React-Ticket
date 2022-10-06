import { get, post } from ".";



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


export const getUser = async ()=>{
        const res = await get(
            'http://127.0.0.1:8000/api/user',
        );
        return res;
    };