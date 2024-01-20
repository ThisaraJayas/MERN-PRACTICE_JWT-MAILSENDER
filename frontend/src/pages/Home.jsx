import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const {userData} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if userData exists and navigate if not
    if (!userData) {
      navigate('/login');
    }
  }, [userData, navigate]);

  return (
    <div>
     <div>Home: {userData ? userData.userId : 'Loading...'}</div>
    </div>
    
  )
}
