import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {useSelector, useDispatch} from 'react-redux';
// import { getUser } from "../api/users";
import { useEffect } from "react";


const UserDash = () => {

    // const {users} = useSelector(state=>state.user);
    // const dispatch = useDispatch();  
    // const setUsers = (data)=>dispatch({type:'SET_USER_STATE',payload:{users:data}})
  //   const fetchUsers = async()=>{
  //     const response = await getUser();
  //     console.log(response.data);
  //     if(response.status === 200 && response.data){
  //         setUsers(response.data);
  //     }
  // };

  const {token,gUser,users} = useAuth();

  gUser(token);
  // console.log(data);
  
  // useEffect(()=>{gUser(token);},[]);
  // console.log(users);

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <h2>This is the users database page</h2>
      <table class="table-auto">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Roles</th>
      <th>Email</th>
      <th>Categories</th>
    </tr>
  </thead>
  <tbody>
  { users?.map((u,i) => (
    <tr>
      <td>{u.id}</td>
      <td>{u.name}</td>
      <td>{u.roles}</td>
      <td>{u.email}</td>
      <td>{u.categories}</td>
    </tr>)) }
    </tbody>
    </table>
    </div>
  );
}

export default UserDash;