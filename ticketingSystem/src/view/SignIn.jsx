import React, { useEffect, useState } from 'react';
import {NavLink, useNavigate} from 'react-router-dom';


import { useFormik,Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import MyButton from '../components/MyButton';
import useAuth from '../hooks/useAuth';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { MyInput } from '../components/MyInput';

export const SignIn = ({show,ema,passwor}) => {
 
  const[msg,setMsg]=useState("");
  const[el,setEl]=useState("");
  const[ps,setPs]=useState("");
  const[disp,setDisp]=useState("none");
  const navigate = useNavigate();
  const {signin} = useAuth();

  // const checkPass=()=>{
  //   if(ps === passwor && el === ema){
  //     navigate('/tickets')
  //   }
  //   else if (ps === "" || el === ""){
  //     setMsg("")
  //   }
  //   else{
  //     setMsg("invalid credentials");
  //     setDisp("none");
  //   }
  // };

  // useEffect(()=>{checkPass()},[ps,el]);



  return (
    <Formik 
    initialValues= {{email:"", password:""}}
    validationSchema = {yup.object({
      
      email: yup
      .string().
      email('invalid email address')
      .required("Required"),

        password: yup
        .string().
        min(8,"Must be at least 8 character")
        .required("Required")

    })}
    onSubmit = {(values) => {
      setEl(values.email);
      setPs(values.password);
      // mutate(values);
      signin(values);
      console.log(values);

      // checkPass();
    }}>
            <Form style={{display:show,flexDirection:"column", alignItems:"center", width:"500px"}}>
            <h3>Sign In</h3>
            <div style={{display:"flex",justifyContent:'center', alignItems:"center"}}>
            <label htmlFor="email">Email: </label>
            <div style={{display:"flex",flexDirection:"column"}}>
            <Field name="email" type="text" />
            {/* <MyInput         
            // id="email"
          name="email"
          label="Email"
          // value={email}
          helperText={<ErrorMessage name="email"/>}
          error={(<ErrorMessage name="email"/>)}
            /> */}
            <ErrorMessage name="email"/>
        </div>
            </div>

            <div style={{display:"flex",justifyContent:'center', alignItems:"center"}}>
            <label htmlFor="password">Password: </label>
            <div style={{display:"flex",flexDirection:"column"}}>
            <Field name="password" type="password" />
            <ErrorMessage name="password"/>
            </div>
            </div>

            <div style={{marginTop:"5%", display:"flex",justifyContent:"center",alignItems:"center",gap:"5%"}}>
            <MyButton type='submit'> Sign In</MyButton> 
            <NavLink to="/register">Not a user yet?</NavLink>
            </div>
        </Form>
    </Formik>
 

  );
};

export default SignIn;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import {TextField,Button} from "@mui/material";
// import useAuth from '../hooks/useAuth';

// const validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
// });

// const {signin} = useAuth();

//  export const SignIn = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       JSON.stringify(values, null, 2);
//           signin(values);

//     },
//   });

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <TextField
//           fullWidth
//           id="email"
//           name="email"
//           label="Email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//         />
//         <TextField
//           fullWidth
//           id="password"
//           name="password"
//           label="Password"
//           type="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//         />
//         <Button color="primary" variant="contained" fullWidth type="submit">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };
// export default SignIn;
