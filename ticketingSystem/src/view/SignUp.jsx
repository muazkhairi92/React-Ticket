import React, { useState } from 'react';
import { useFormik,Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import {SignIn} from './SignIn';
import MyButton from '../components/MyButton';
import {NavLink, useNavigate} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

// import SignIn from './SignIn';

export const SignUp = () => {
  
  
  const [emai,setEmai]=useState("");
  const [pass,setPass]=useState();
  const [reg,setReg]=useState("flex");
  const [log,setLog]=useState("none");
  const navigate = useNavigate();
  const {register} = useAuth();




  return (
    <Formik 
    initialValues= {{email:"" ,name:"", password:""}}
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
        .required("Required")

    })}
    onSubmit = {(values) => {
        setEmai(values.email);
        setPass(values.password);
        register(values);
        navigate('/login');

       
        // getComponent();
    }}>
            <div>
            <Form style={{display:reg, flexDirection:"column",alignItems:"center", justifyContent:"center",gap:"5%", height:"80px",width:"500px"}}>
            <h3>Get Started</h3>
                <div>
            <label htmlFor="name">Name: </label>
            <Field name="name" type="text" />
            <ErrorMessage name="name"/>
            </div>

            <div>
            <label htmlFor="password">Password: </label>
            <Field name="password" type="password" />
            <ErrorMessage name="password"/>
            </div>

            <div>
            <label htmlFor="cpassword">Retype Password: </label>
            <Field name="cpassword" type="password" />
            <ErrorMessage name="cpassword"/>
            </div>

            <div>
            <label htmlFor="email">Email: </label>
            <Field name="email" type="text" />
            <ErrorMessage name="email"/>
            </div>


            <MyButton type='submit' > Sign Up</MyButton>        
        </Form>

    <SignIn show={log} ema={emai} passwor={pass}/>
    </div>
    
    </Formik>


  );
};

export default SignUp;
