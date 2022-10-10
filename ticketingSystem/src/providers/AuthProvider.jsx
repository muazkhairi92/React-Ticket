import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { array } from "yup";
import { loginAPI } from "../api/auth";
import { getUser, signIn, signUp } from "../api/users";
import AuthContext from "../context/AuthContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [cat, setCat] = useState();
  
  const navigate = useNavigate();
  
  const signin = async (luser) => {
    // console.log(luser);
    //     JSON.stringify(luser);
      const {data, isError} = await signIn(luser);
    //   console.log(data);
      if(data.message === 'Login Success' && data.data.token){
            setToken(data.data.token);
                setUser(data.data.user);
                navigate(`/tickets`);
      }
      else{
         navigate('not-authorized');

      }


    //   setUsers(userss);
    //   let emailSame = null;
    //   let passSame = null;

    //   userss.map((u)=>{
    //     emailSame = luser.email.match(u.email);
    //     if(emailSame){
    //         passSame = luser.cpassword.match(u.password);
    //         if(passSame){
    //             setToken(u.token);
    //             setUser(u);
    //             navigate(`/email/${u.id}`);
    //         }
    //         else{
    //         navigate('not-authorized');
    //         }
    //     }
    // }
    // );
    // if(!emailSame){
    //     if(!passSame){
    //     navigate('not-authorized');
    //     }
    // }
  };

  const signout = () => {
    setToken(null);
  };

  const register = async (ruser) => {
    const {data, isError} = await signUp(ruser);
    console.log(data);
    // if(data.message === 'Login Success' && data.data.token){
    //       setToken(data.data.token);
    //           // setUser(response.data);
    //           navigate(`/tickets`);
    // }
    // else if(isError){
    //    navigate('not-authorized');

    // }
    // return userss;
  }



  const gUser =async(token)=>{
    // console.log(token);
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    const {data} = await getUser(config);
    setUsers(data);
    // console.log(data);
      console.log(data);
      console.log(users);
  };




  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        users,
     
        signin,
        signout,
        register,
        gUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;