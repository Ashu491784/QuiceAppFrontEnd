import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
// import ProtectedRoute from "./compnents/Auth/ProtectedRoute";
import Login from './components/Auth/Login';
import Register from './components/Auth/register';
import Dashboard from "./pages/dashboard";
import Quiz from "./pages/quize";
import FinalScore from "./pages/score";


function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
      <Routes>
      
         <Route path="/login" element={<Login />}/>
         <Route path="/register" element={<Register />}/>
         <Route path="/" element={<Dashboard/>}/>
         <Route path="/quize" element={<Quiz/>}/>
         <Route path="/score" element={<FinalScore/>}/>
         

      </Routes>
      </BrowserRouter>
    </AuthProvider>
  );

}
export default App;
