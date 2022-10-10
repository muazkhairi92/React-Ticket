import React, { useState } from 'react';
import { useFormik,Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import {SignIn} from './SignIn';
import MyButton from '../components/MyButton';
import {NavLink, useNavigate} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { MyInput } from '../components/MyInput';
// import { getRoles, getUser } from '../api/users';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";




// import SignIn from './SignIn';

export const SignUp = () => {
  
  
  const [emai,setEmai]=useState("");
  const [pass,setPass]=useState();
  // const [rol,setRol]=useState([]);
  // const [cat,setCat]=useState([]);
  const navigate = useNavigate();
  const {register} = useAuth();

  const fetchRoles=()=>{
    return axios.get('http://127.0.0.1:8000/api/roles-list')
}
const {data, isLoading,isError,error,isFetching,refetch} = useQuery([],fetchRoles,{
    enabled:true,
    onSuccess:(res)=>{console.log('tahniah',res)
},
onError:(res)=>{console.log('error',res)}
});
console.log(data);

const{ Category, Roles} = data.data;






  return (
    <Formik 
    initialValues= {{email:"" ,name:"", password:"",roles:"", category:""}}
    validationSchema = {yup.object({
        name: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name').
        max(30,"Must be less than 30 characters")
        .required("Required"),

        password: yup
        .string().
        min(8,"Must be at least 8 character")
        .required("Required"),

        cpassword: yup
        .string().
        oneOf([yup.ref('password'),null],"Password don't match")
        .required("Required"),

        email: yup
        .string().
        email('invalid email address')
        .required("Required"),

        roles: yup
        .string(),

        category: yup
        .string()

    })}
    onSubmit = {(values) => {
        setEmai(values.email);
        setPass(values.password);
        register(values);
        navigate('/login');

       
        // getComponent();
    }}>
            <div>
            <Form className='flex'>
            <h3>Get Started</h3>
                <div className='flex'>
            <label htmlFor="name">Name: </label>
            <Field name="name" type="text" error={ErrorMessage} helperText={ErrorMessage.name.name}as={MyInput}/>
            <ErrorMessage name="name"/>
            </div>

            <div className='flex'>
            <label htmlFor="email">Email: </label>
            <Field name="email" type="text"  error={ErrorMessage} helperText={ErrorMessage.ErrorMessage} as={MyInput}/>

            <ErrorMessage name="email"/>
            </div>

            <div>
            <label htmlFor="password">Password: </label>
            <Field name="password" type="password"  error={ErrorMessage} helperText={ErrorMessage.name.password} as={MyInput} />
            <ErrorMessage name="password"/>
            </div>

            <div>
            <label htmlFor="cpassword">Retype Password: </label>
            <Field name="cpassword" type="password"  error={ErrorMessage} helperText={ErrorMessage.name.cpassword} as={MyInput} />
            <ErrorMessage name="cpassword"/>
            </div>

    
            <div>
            <label htmlFor="roles">Roles: </label>
            <Field as="select" name="roles">
            {Roles?.map((item)=><option value={item}>{item}</option>)}
            </Field>
            </div>

            <div>
            <label htmlFor="category">Category: </label>
            <Field as="select" name="category">
            {Category?.map((item)=><option value={item}>{item}</option>)}
            </Field>
            </div>


            <MyButton type='submit' > Sign Up</MyButton>        
        </Form>

   
    </div>
    
    </Formik>


  );
};

export default SignUp;
