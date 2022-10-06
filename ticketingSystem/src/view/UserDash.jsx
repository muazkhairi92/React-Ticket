import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {useSelector, useDispatch} from 'react-redux';
import { getUser } from "../api/users";


const UserDash = () => {

    const {users} = useSelector(state=>state.user);
    const dispatch = useDispatch();  
    const setUsers = (data)=>dispatch({type:'SET_USER_STATE',payload:{users:data}})
    const fetchUsers = async()=>{
      const response = await getUser();
      console.log(response.data);
      if(response.status === 200 && response.data){
          setUsers(response.data);
      }
  };
  
  useEffect(()=>{fetchUsers();},[]);
  console.log(users);

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <h2>This is the users database page</h2>


     <ol>
      { users.map((u,i) => (
        <li key={i}>
          <p>Name: {u.name}</p>
          <p>roles: {u.roles}</p>
          <p>Email: {u.email}</p>
        </li>
      ))}
      </ol>
    </div>
  );
}

export default UserDash;