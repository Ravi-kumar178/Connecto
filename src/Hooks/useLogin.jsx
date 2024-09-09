import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';

const useLogin = () => {
   const[loading,setLoading] = useState(false);

   const{setAuthUser} = useAuthContext();

   const login = async(userName,password)=>{
        const success = handleInputError({userName,password});
        if(!success) return
        setLoading(true);

        try {
            const res = await fetch("http://localhost:4000/auth/login",{
                method:"post",
                headers:{"content-type":"application/json"},
                body:JSON.stringify({userName,password})
            })

            const data = await res.json();
            console.log(data);
            if(!data.success){
                throw new Error(data.error);
            }
            toast.success("Logged in");
            //localstorage
            localStorage.setItem("chat-user",JSON.stringify(data));
            //context
            setAuthUser(data);
            
        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
   }
   return {loading,login}

}

export default useLogin

const handleInputError = ({userName,password}) =>{
    if(!userName || !password){
        
        toast.error("Please fill all the field")
        return false
    }
    if(password.length < 6){
        
        toast.error("password must have atleast 6 character");
        return false;
    }
    return true;
}