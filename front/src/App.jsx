import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from './components/header/PageHeader';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import TicketRegistration from './pages/TicketRegistration/TicketRegistration';
import ProtectedRoute from "./routes/ProtectedRoute";
import AccessDenied from "./pages/AccessDenied/AccessDenied";
import About from "./pages/About/About";
import RecoveryEmail from "./pages/ChangePassword/RecoveryEmail";
import ResetPassword from "./pages/ChangePassword/ResetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/accessDenied" element={<AccessDenied />} />
        <Route path="/about" element={<About />} />
        <Route path="/recovery" element={<RecoveryEmail />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route
          path="/ticketRegistration"
          element={
            <ProtectedRoute>
              <TicketRegistration />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App;
