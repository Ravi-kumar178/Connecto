import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { useAuthContext } from "./Context/AuthContext";

function App() {
  const {authUser} = useAuthContext()
  return (
    <div className="p-4 h-screen flex justify-center items-center">
       <Routes>
          <Route path="/" element={authUser?<Home/>:<Navigate to={"/login"}/>}/>
          <Route path="/signup" element={authUser?<Navigate to={"/"}/>:(<Signup/>)} />
          <Route path="/login" element={authUser?<Navigate to={"/"}/>:(<Login/>)}/>
          
       </Routes>
    </div>
  );
}

export default App;
