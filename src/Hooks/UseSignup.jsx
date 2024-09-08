import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UseSignup = () => {
   const [loading,setLoading] = useState(false);
   const navigate = useNavigate();

   const signup = async({fullName,userName,password,confirmPassword,gender}) => {
        const success = handleInputError({fullName,userName,password,confirmPassword,gender});
        if(!success) return
        setLoading(true);
        try {
            const res = await fetch('http://localhost:4000/auth/signup',{
                method:'post',
                headers:{"content-type":"application/json"},
                body:JSON.stringify({fullName,userName,password,confirmPassword,gender})
            })
            const data = await res.json();
            console.log(data);
            /* if(data.error){
                throw new Error(data.error);
            } */
            if(data.message === "User already existing"){
              navigate("/");
            }
            toast.error(data.message);
            //localstorage
            //context
        } 
        catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
   }
   return {signup,loading}
}

export default UseSignup

const handleInputError = ({fullName,userName,password,confirmPassword,gender}) =>{
    if(!fullName || !userName || !password || !confirmPassword ||!gender){
        
        toast.error("Please fill all the field")
        return false
    }
    if(password.length < 6){
        
        toast.error("password must have atleast 6 character");
        return false
    }
    if(password !== confirmPassword){
        
        toast.error("password don't match")
        return false
    }
    
    return true;
}