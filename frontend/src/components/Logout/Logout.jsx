import React from 'react'
import { useAuthHook } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {

    const { authUser, setAuthUser } = useAuthHook();

    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser, user : null
            })
            localStorage.removeItem("Users");   
            
            setTimeout(() => {
                window.location.reload();  
                toast.success("Logout successfuly")          
            }, 3000)
            
        } catch (error) {
            toast.error("Error", error.message)
            setTimeout(() => {}, 3000)
        }
    }

  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogout}>Logout</button>
    </div>    
  )
}

export default Logout