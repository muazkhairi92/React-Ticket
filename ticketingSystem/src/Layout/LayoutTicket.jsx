import {NavLink,Outlet} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { UpperNav } from './UpperNav';

export const LayoutTicket = () => {
    const style = ({ isActive }) => ({
      fontWeight: isActive ? 'bold' : 'normal',
      color:"white"
    });
  
    const { user,token } = useAuth();

    return (
      <>
      <UpperNav/>
        
            <nav
            style={{
                borderTop: 'solid 1px',
                paddingBottom: '1rem',
                paddingTop: '1rem',
                paddingLeft: '1rem',
                marginLeft:"1%",
                width:"20%",
                display:"flex",
                gap:"10%",
                height:"30vh",
                position:"fixed",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center",
                bottom:"10",
                left:"0",
                backgroundColor:"#3D2C8D",
                borderRadius:"10%"
            }}
          >
          {user?.roles.includes('support') && token ?<NavLink to="/create-ticket" style={style}>Create Tickets</NavLink> : null}

            {/* <NavLink to="/create-ticket" style={style}>Create Tickets</NavLink> */}
            <NavLink to="/tickets" style={style}>Pending Tickets</NavLink>
            <NavLink to="/my-tickets" style={style}> My Tickets</NavLink>
            <NavLink to="/tickets-complete" style={style}>Completed Tickets</NavLink>
        
            </nav>     
        <main style={{ padding: '1rem 0',backgroundColor:"#C996CC", 
        color:"#E3D2C8D",display:"flex", flexDirection:"column", alignContent:"center",justifyContent:"center",alignItems:"center", width:"60vw", height:"70vh",marginLeft:"20%"}}>
          <Outlet />
        </main>
        </>
    );
  };