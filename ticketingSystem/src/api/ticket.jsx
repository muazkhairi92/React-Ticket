
import { destroy, get, post, put } from ".";

export const getTickets = async (config)=>{
    const res = await get(
        'https://ba47-49-124-200-218.ap.ngrok.io/api/ticket',config
    );
    return res;
};
export const createTickets = async (data,config)=>{
    const res = await post(
        'https://ba47-49-124-200-218.ap.ngrok.io/api/ticket',data,config
    );
    return res;
};

export const editTicket = async (config,data,id)=>{
    const res = await put(
        `https://ba47-49-124-200-218.ap.ngrok.io/api/ticket/${id}`,data,config
    );
    return res;
};


export const delTicket = async (config,id)=>{
    const res = await destroy(
        `https://ba47-49-124-200-218.ap.ngrok.io/api/ticket/${id}`,config
    );
    return res;
};

export const getStatus = async (token)=>{
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const res  = await get(
        'https://ba47-49-124-200-218.ap.ngrok.io/api/ticket-lookup',config
    );
    return res;
};