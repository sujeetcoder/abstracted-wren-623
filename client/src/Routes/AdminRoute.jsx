import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminRoute = ({children}) => {
    const role = useSelector((store)=>store.Auth.userData.role)
    const adminCheck1 = role === "admin"
    if(!adminCheck1){
      return <Navigate to="/" />
    }
    
  return children
}

export default AdminRoute