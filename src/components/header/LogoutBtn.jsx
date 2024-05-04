import React from "react";
import { UseDispatch } from "react-redux";
import authService from "../../Appwrite/Auth";
import { logout } from "../../store/authSlice";

function LogoutBtn(){
    const dispatch=useDispatch()
    const inputHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
    return (
        <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
            Logout
            </button>
    )
}

export default LogoutBtn