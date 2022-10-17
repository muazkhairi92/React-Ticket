import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {useSelector, useDispatch} from 'react-redux';
// import { getUser } from "../api/users";
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import {  useQuery } from "@tanstack/react-query";
import { IconButton } from "@mui/material";

const UserDash = () => {

    // const {users} = useSelector(state=>state.user);
    const {token,gUser,users} = useAuth();
    // const dispatch = useDispatch();  
    // const setUsers = (data)=>dispatch({type:'SET_USER_STATE',payload:{users:data}})
  //   const fetchUsers = async()=>{
  //     const response = await getUser();
  //     console.log(response.data);
  //     if(response.status === 200 && response.data){
  //         setUsers(response.data);
  //     }
  // };
  const [rows, setRows] = useState([]);
const [selectionModel, setSelectionModel] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'roles', headerName: 'Roles', width: 130 },
    {
      field: "delete",
      width: 75,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <IconButton
            onClick={() => {
              const selectedIDs = new Set(selectionModel);
              // you can call an API to delete the selected IDs
              // and get the latest results after the deletion
              // then call setRows() to update the data locally here
              setRows((r) => r.filter((x) => !selectedIDs.has(x.id)));
            }}
          >Delete
        
          </IconButton>
        );
      }
    }
  ];
  


  gUser(token);
  // console.log(data);
  
  // useEffect(()=>{gUser(token);},[]);
  // console.log(users);

  return (
  //   <div style={{display:"flex",flexDirection:"column"}}>
  //     <h2>This is the users database page</h2>
  //     <table class="table-auto">
  // <thead>
  //   <tr>
  //     <th>Id</th>
  //     <th>Name</th>
  //     <th>Roles</th>
  //     <th>Email</th>
  //     <th>Categories</th>
  //   </tr>
  // </thead>
  // <tbody>
  // { users?.map((u,i) => (
  //   <tr>
  //     <td>{u.id}</td>
  //     <td>{u.name}</td>
  //     <td>{u.roles}</td>
  //     <td>{u.email}</td>
  //     <td>{u.categories}</td>
  //   </tr>)) }
  //   </tbody>
  //   </table>
  //   </div>
  <div style={{ height: 300, width: '80%', display:"flex", flexDirection:"column" }}>
    <h2>Users Database</h2>
  <DataGrid
    rows={users}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    checkboxSelection
    onSelectionModelChange={(ids) => {
      setSelectionModel(ids);
    }}
  />
</div>
    
  );
}

export default UserDash;