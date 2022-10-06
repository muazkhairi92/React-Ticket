import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import  {Home}  from './view/Home';
import {Nomatch}  from './view/Nomatch';
import {Layout}  from './Layout/Layout';
import {SignIn} from './view/SignIn';
import {SignUp} from './view/SignUp';
import { TicketDash } from './view/TicketDash';
import { LayoutTicket } from './Layout/LayoutTicket';
import CreateTicket from './CreateTicket';
import UserDash from './view/UserDash';
import { ProtectedRoute } from './routes/ProtectedRoutes';
import useAuth from './hooks/useAuth';
import { UserDet } from './view/UserDet';
import { NotAuthorized } from './view/NotAuthorized';


function App() {
  const { user } = useAuth();


  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route element={<Layout/>}>
        <Route path="login" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
        <Route path={"/profile"} element={<ProtectedRoute><UserDet/></ProtectedRoute>} />
        <Route path={"/users"} element={<ProtectedRoute isAllowed={user?.roles.includes('admin')} redirectPath={'/home'}><UserDash/></ProtectedRoute>} />
        <Route path="not-authorized" element={<NotAuthorized/>} />
        </Route>
        <Route path="*" element={<Nomatch/>} />
        <Route element={<LayoutTicket/>}>
        <Route path="/tickets" element={<TicketDash />} />
        <Route path="/create-ticket" element={<CreateTicket />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
