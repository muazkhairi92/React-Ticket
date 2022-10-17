import { Paper } from '@mui/material';
import {NavLink,Outlet} from 'react-router-dom';
import { UpperNav } from './UpperNav';

export const Layout = () => {
    const style = ({ isActive }) => ({
      fontWeight: isActive ? 'bold' : 'normal',
      color:"black"
    });
  
    return (
    
      <div>
      <UpperNav/>
      <div style={{display:"flex", justifyItems:'center',justifyContent:'center', alignItems:"center", gap:"15%", height:"70vh"}}>
        {/* <main style={{backgroundColor:"#C996CC", borderRadius:"5%", 
        color:"#E3D2C8D",display:"flex", flexDirection:"column", alignContent:"center",justifyContent:"center",alignItems:"center", height:"350px", padding:"5% 3% 5% 3%"}} >
      <h2>Welcome to Ticketing System</h2>
    </main> */}
    <img src='../src/assets/ticketing-banner-image.png' style={{width:"35%",height:"45%"}}/>

        {/* <main style={{ padding: '1rem 0',backgroundColor:"#C996CC", borderRadius:"5%", 
        color:"#E3D2C8D",display:"flex", flexDirection:"column", alignContent:"center",justifyContent:"center",alignItems:"center", height:"350px"}}> */}
          
          <Paper elevation={3} sx={{width:"50vw", padding:"5%"}}>
          <Outlet />
          </Paper>
        {/* </main> */}
        </div>
        {/* <nav
        style={{
            borderTop: 'solid 1px',
            paddingBottom: '1rem',
            paddingTop: '1rem',
            paddingLeft: '1rem',
            width:"100%",
            display:"flex",
            gap:"5%",
            position:"fixed",
            bottom:"0",
            left:"0",
            backgroundColor:"white"
        }}
      >
        <NavLink to="/home" style={style}>Home</NavLink>
        <NavLink to="/home" style={style}>Home</NavLink>

      </nav>      */}
       </div>
    );
  };