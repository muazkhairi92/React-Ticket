import {NavLink,Outlet} from 'react-router-dom';
import { UpperNav } from './UpperNav';

export const LayoutTicket = () => {
    const style = ({ isActive }) => ({
      fontWeight: isActive ? 'bold' : 'normal',
      color:"black"
    });
  
    return (
      <>
      <UpperNav/>
        
            <nav
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
            <NavLink to="/create-ticket" style={style}>Create Tickets</NavLink>
            <NavLink to="/ticket-all" style={style}>All Tickets</NavLink>
        
            </nav>     
        <main style={{ padding: '1rem 0',backgroundColor:"#C996CC", borderRadius:"5%", 
        color:"#E3D2C8D",display:"flex", flexDirection:"column", alignContent:"center",justifyContent:"center",alignItems:"center", width:"500px", height:"350px"}}>
          <Outlet />
        </main>
        </>
    );
  };