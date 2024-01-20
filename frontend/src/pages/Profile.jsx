import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function Profile() {
    const {userData}=useContext(UserContext)
    
    const emailto = userData.email

    const sendMail=async()=>{
        const response = await fetch('http://localhost:8000/user/send-email',{
            method:'POST',
            body: JSON.stringify({emailto}),
            credentials:"include",
            headers: { 'Content-Type': 'application/json' },
        })
        if(response.ok){
            const result = await response.json()
            console.log(result);
        }else{
            console.log('email Send Failed');
        }
    }
  return (
    <div className=" md:flex md:items-center md:inset-y-3 md:right-1 space-x-4">
        <div className="inline-flex rounded-full shadow">
            <div className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50">
                <a onClick={sendMail}>Send Email</a>
            </div>
        </div>
    </div>
  )
}
