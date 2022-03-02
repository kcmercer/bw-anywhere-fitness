import React from "react";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate()

  const redirectToHome = () => {
    navigate('/')
  }

  if(localStorage.getItem('token')){
      localStorage.removeItem('token')
      redirectToHome()
  }else {
    redirectToHome()
  }
    return (
        <></>
    )
}

export default Logout;