import '../App.css'
import {NavLink} from 'react-router-dom';
import { UpperNav } from '../Layout/UpperNav';
import { Paper } from '@mui/material';


export const Home= ()=> {
    const style = ({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        color:"white",
        backgroundColor:"#1C0C5B",
        padding:"5% 3% 5% 3%",
        borderRadius:"5px"
      });
  return (
    <div style={{display:"flex", width:"100%"}}>
    <UpperNav/>
    {/* <main style={{backgroundColor:"#C996CC", borderRadius:"5%", 
    color:"#E3D2C8D",display:"flex", flexDirection:"column", alignContent:"center",justifyContent:"center",alignItems:"center", width:"400px", height:"350px", padding:"5% 3% 5% 3%", }} > */}
    <Paper elevation={3}>
  <h2>Welcome to Ticketing System</h2>
  <h3>Search your ticket</h3>

    </Paper>

{/* </main> */}
</div>
  )
};

