import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import {useSelector, useDispatch} from 'react-redux';
// import { getUser } from "../api/users";
import { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Avatar, Dialog, DialogTitle, IconButton, List, ListItem, Paper } from "@mui/material";
import { editTicket } from "../api/ticket";
import { fontSize } from "@mui/system";





export const CompleteTicket= ()=> {

    const {token,delTick} = useAuth();


  const config = {
    headers: { Authorization: `Bearer ${token}` }
};
  const fetchTicket= ()=>{
    return  axios.get('http://127.0.0.1:8000/api/ticket',config)
}
  
  const {data, isLoading,isError,error,isFetching,refetch} = useQuery(["tick"],fetchTicket,{
    enabled:true,
    onSuccess:(res)=>{console.log('tahniah',res)
},
onError:(res)=>{console.log('error',res)}
});

if (isLoading) {
  return <div>Loading...</div>
}
if (isError) {
  return <div>Error! {error.message}</div>
}

const handleFetch = () =>{
  refetch();
}

const editTick= () =>{
  
}
const Tickets = data?.data?.data;
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'description', headerName: 'Description', width: 130 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'level', headerName: 'Priority Level', width: 130 },
  { field: 'developer_name', headerName: 'Developer', width: 130 },
  { field: 'support_name', headerName: 'Support', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'developer_notes', headerName: 'Developer Notes', width: 130 },

];


  return (

  <div style={{ height:"100%",width: '80%', display:"flex", flexDirection:"column", alignItems:"center" }}>
    <h2> Completed Tickets</h2>
    <div style={{backgroundColor:"blue", fontSize:"70%",width:"20%",borderRadius:"10%",fontWeight:"bold"}}><p onClick={()=>handleFetch()}>refresh</p></div>
  {/* <DataGrid
    rows={Tickets}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection
  /> */}
  {/* <h2>tesss</h2> */}
  <div style={{width:"100%", display:"flex", flexWrap:"wrap", gap:"5%", marginTop:"5%"}}>
  { Tickets.map((ticket)=>(
    (ticket.status === "complete")?
  <Paper elevation={4} style={{width:"30%", fontSize:"50%", padding:"1%",gap:"0%"}}>
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <h3>#{ticket.id}:{ticket.title}</h3>
      <div>
      <p onClick={()=>delTick(ticket.id)}>delete</p>
      </div>
      </div>
    <p>Description: {ticket.description}</p>
    <p>Created By: {ticket.support_name}</p>
    <p>Assign to: {ticket.developer_name}</p>
  </Paper>:null))
  }
  </div>
</div>
  )
};