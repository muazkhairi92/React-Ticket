import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import {useSelector, useDispatch} from 'react-redux';
// import { getUser } from "../api/users";
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Avatar, Dialog, DialogTitle, IconButton, List, ListItem, Paper } from "@mui/material";
import { editTicket, getStatus } from "../api/ticket";
import { fontSize } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import MyButton from "../components/MyButton";
import * as yup from "yup";
import { MyInput } from "../components/MyInput";
import { EditTicket } from "./EditTicket";






export const TicketDash= ()=> {

  const {token,delTick,eTick} = useAuth();
  const[Edit,SetEdit] = useState(true);
  // const Status = getStatus(token);
  // console.log(Status);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const config = {
    headers: { Authorization: `Bearer ${token}` }
};
  const fetchTicket= ()=>{
    return  axios.get('http://127.0.0.1:8000/api/ticket',config)
}
//   const fetchStatus= async()=>{
//     return  await axios.get('http://127.0.0.1:8000/api/ticket-lookup',config)
// }
  
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

// const {Category, PriorityLevel,Status,Developer} = getStatus(token);

const Tickets = data?.data?.data;



  return (

  <div style={{ height:"100%",width: '80%', display:"flex", flexDirection:"column", alignItems:"center" }}>
    <h2> Pending Tickets</h2>
    <div style={{backgroundColor:"blue", fontSize:"70%",width:"20%",borderRadius:"10%",fontWeight:"bold"}}><p onClick={()=>handleFetch()}>refresh</p></div>

  <div style={{width:"100%", display:"flex", flexWrap:"wrap", gap:"5%", marginTop:"5%"}}>
  { Tickets.map((ticket)=>(
    (ticket.status !== "complete")?
  <Paper elevation={4} style={{width:"30%", fontSize:"50%", padding:"1%",gap:"0%", display:"flex", flexDirection:"column"}}>
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <h3>#{ticket.id}:{ticket.title}</h3>
      <div>
      <p onClick={()=>delTick(ticket.id)}>delete</p>
      <p onClick={handleClickOpen}>edit</p>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Ticket</DialogTitle>
        <Formik 
  initialValues= {{developer_notes:ticket.developer_notes , statuses_id:ticket.statuses_id}}
  validationSchema = {yup.object({
 

      developer_notes: yup
      .string().
      min(8,"Must be at least 8 character"),

      // statuses_id:yup
      // .number()


  })}
  onSubmit = {(values) => {

      console.log(values);
      eTick(values,ticket.id);
      handleClose;


  }}>
          <div>
          <Form style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"2%", padding:"2% 2%"}}>
          <h3>#{ticket.id}:{ticket.title}</h3>
          <p>Description: {ticket.description}</p>

  
          <div>
              <div  style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>

          <label htmlFor="developer_notes">Developer Notes: </label>
          <Field name="developer_notes" type="text" as={MyInput} />
          <ErrorMessage name="developer_notes"/>
          </div>
{/* 
          <div>
            <label htmlFor="statuses_id">Status: </label>
            <Field as="select" name="statuses_id" style={{padding:"2%"}}>
            {Status.map((item,i)=><option value={i+1}>{item}</option>)}
            </Field>
            </div> */}

          </div>
          <MyButton type='submit' > Update</MyButton>        
      </Form>

  </div>
  
  </Formik>
        </Dialog>
      </div>
      </div>
    <p>Description: {ticket.description}</p>
    <p>Created By: {ticket.support_name}</p>
    <p>Assign to: {ticket.developer_name}</p>
  </Paper>:null
  
  ))
  }
  </div>
</div>
  )
};