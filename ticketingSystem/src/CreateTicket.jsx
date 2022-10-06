import React, { useState } from 'react';
import { useFormik,Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import {NavLink, useNavigate} from 'react-router-dom';
import MyButton from './components/MyButton';

// import SignIn from './SignIn';

export const CreateTicket = () => {
  
  
  const [emai,setEmai]=useState("");
  const [pass,setPass]=useState();
  const [reg,setReg]=useState("flex");
  const [log,setLog]=useState("none");
  const navigate = useNavigate();

  const[drop,setDrop] =useState(false);
  const[cat,setCat] =useState("");
  const toggle =()=>setDrop(!drop);

  const[dropl,setDropl] =useState(false);
  const[lvl,setLvl] =useState("");
  const togglel =()=>setDropl(!dropl);



  const cate = ["Adnexio", "Meniaga","CISTA"];
  const level = ["High", "Medium","Low"];



  return (
    <Formik 
    initialValues= {{title:"" ,desc:"", category:"Adnexio", level:"High"}}
    validationSchema = {yup.object({
        title: yup
        .string().
        max(30,"Must be less than 30 characters")
        .required("Required"),

        desc: yup
        .string().
        min(8,"Must be at least 8 character")
        .required("Required"),

        category: yup
        .string(),

        level: yup
        .string()

    })}
    onSubmit = {(values) => {
  
        console.log(values);

       
        // getComponent();
    }}>
            <div>
            <Form style={{display:reg, flexDirection:"column",alignItems:"center", justifyContent:"center",gap:"5%", height:"80px"}}>
            <h3>Create A Ticket</h3>
                <div>
            <label htmlFor="title">Title: </label>
            <Field name="title" type="text" />
            <ErrorMessage name="title"/>
            </div>

            <div>
            <label htmlFor="desc">Description: </label>
            <Field name="desc" type="text" style={{height:"50px"}}/>
            <ErrorMessage name="desc"/>
            </div>

            <div>
            <label htmlFor="category">Category: </label>
            <Field as="select" name="category">
            {cate.map((item)=><option value={item}>{item}</option>)}
            </Field>
            </div>

            <div>
            <label htmlFor="level">Priority Level: </label>
            <Field as="select" name="level">
            {level.map((item)=><option value={item}>{item}</option>)}
            </Field>
            </div>



            <MyButton type='submit' > Create</MyButton>        
        </Form>

    </div>
    
    </Formik>


  );
};

export default CreateTicket;
