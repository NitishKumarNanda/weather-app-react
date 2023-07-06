import { Container } from "react-bootstrap";
import SignUp from "./components/signup/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from "./components/context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import WrongRoute from "./components/WrongRoute";
import Dashboard from "./components/home/Dashboard";

function App() {
  return (

    <AuthProvider>
      
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Dashboard />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="*" element={<WrongRoute />} />
            </Route>
          </Routes>
          
    </AuthProvider>

  );
}

export default App;
