import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthRoute = ({children}) => {
    const isAuth = useSelector((store)=>store.Auth.isAuth)
    /* console.log(isAuth) */
    if(isAuth){
        return <Navigate to="/" replace={true} />
    }
  return children
}

export default AuthRoute