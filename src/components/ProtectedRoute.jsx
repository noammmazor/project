import React from 'react'
import { useUserAuth } from '../context/Context'
import { Navigate } from 'react-router-dom'


export default function ProtectedRoute({chidren}) {
const {user } = useUserAuth();

console.log("chack user in private :",user);

  return (
    <div>
        <Navigate to="/"/>
    </div>
  )
}
