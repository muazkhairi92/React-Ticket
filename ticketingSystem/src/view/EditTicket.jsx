import { ErrorMessage, Field, Form, Formik } from "formik";
import MyButton from "../components/MyButton";
import * as yup from "yup";
import { MyInput } from "../components/MyInput";


export const EditTicket= ({ticket})=> {

return(
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
      eTick(values,ticket.id)
      SetEdit(Edit)

    //  pTick(values,token);
      // getComponent();
  }}>
          <div>
          <Form style={{display:"flex",flexDirection:"column",gap:"2%"}}>
          <h3>Update Ticket</h3>
          <h3>#{ticket.id}:{ticket.title}</h3>
          <p>Description: {ticket.description}</p>

  
          <div>
              <div  style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>

          <label htmlFor="developer_notes">Developer Notes: </label>
          <Field name="developer_notes" type="text" as={MyInput} />
          <ErrorMessage name="developer_notes"/>
          </div>

          {/* <div>
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

)
}
