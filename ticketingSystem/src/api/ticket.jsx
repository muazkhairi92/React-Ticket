
import { destroy, get, post, put } from ".";

export const getTickets = async (config)=>{
    const res = await get(
        'http://127.0.0.1:8000/api/ticket',config
    );
    return res;
};
export const createTickets = async (data,config)=>{
    const res = await post(
        'http://127.0.0.1:8000/api/ticket',data,config
    );
    return res;
};

export const editTicket = async (config,data,id)=>{
    const res = await put(
        `http://127.0.0.1:8000/api/ticket/${id}`,data,config
    );
    return res;
};


export const delTicket = async (config,id)=>{
    const res = await destroy(
        `http://127.0.0.1:8000/api/ticket/${id}`,config
    );
    return res;
};

export const getStatus = async (token)=>{
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const {Category, PriorityLevel,Status,Developer}  = await get(
        'http://127.0.0.1:8000/api/ticket-lookup',config
    );
    return Status;
};