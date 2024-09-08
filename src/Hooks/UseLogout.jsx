import /* React, */ { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';

const UseLogout = () => {
    const [loading,setLoading] = useState(false);
    const {/* authUser, */setAuthUser}=useAuthContext();
  const logout = async() => {
    setLoading(true);
    try {
    
        const res = await fetch('http://localhost:4000/auth/logout',{
            method:'post',
            headers:{"content-type":"application/json"},
        })
        const data = await res.json();
        console.log(data);
        if(!data.success){
            throw new Error(data.error);
        }
         //localstorage
         localStorage.removeItem("chat-user");
         //context
         setAuthUser(null);
        toast.success("Log out");
       
        
    } catch (error) {
      toast.error("not logged out");
    }finally{
        setLoading(false);
    }
  }
  return{loading,logout};
}

export default UseLogout