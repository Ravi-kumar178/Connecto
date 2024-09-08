import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="p-4 h-screen flex justify-center items-center">
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          
       </Routes>
    </div>
  );
}

export default App;
