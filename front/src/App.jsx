import "./App.css";
import { Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home/Home";
import Header from './components/header/Header';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { TicketRegistration } from "./pages/TicketRegistration/TicketRegistration";

function App() {
  return (
    <>
    <Routes>
      <Route path="/header" element={<Header/>}/> 
      <Route path="/" element={<Home/>}/> 
      <Route path="/register" element={<Register/>}/> 
      <Route path="/login" element={<Login/>}/> 
      <Route path="/ticketRegistration" element ={<TicketRegistration/>}/>
    </Routes>
    </>
  )
}

export default App;
