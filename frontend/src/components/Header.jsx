import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


export default function Header() {

  const {userData, setUserData} = useContext(UserContext)
  const navigate = useNavigate()

  const logOut = async()=>{

    const response = await fetch('http://localhost:8000/user/logout',{
      method: 'POST',
      credentials:'include',
    })
    if(response.ok){
      setUserData(null)
      navigate('/login')
    }else{
      console.log('Logout Falied');
    }
      

  }
  
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6">
    <div className="relative pt-6 pb-16 sm:pb-24">
      <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span className="sr-only">Company Name</span>
              <img className="w-auto h-8 sm:h-10" src="https://www.svgrepo.com/show/448244/pack.svg" loading="lazy" width="202" height="40" alt="Company Logo" />
            </a>
          </div>
        </div>
        <div className="md:flex md:space-x-10 list-none">
          <li>
            <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900" target="">Pricing</a>
          </li>
          <li>
            <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900" target="">Gallery</a>
          </li>
          <li>
            <a href="#" className="text-base font-normal text-gray-500 hover:text-gray-900" target="_blank">Blog</a>
          </li>
        </div>
        <div className="md:absolute md:flex md:items-center md:justify-end md:inset-y-5 md:right-1 space-x-4">
          {userData &&
        <div className="inline-flex rounded-full shadow">
            <div className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50">
                <Link to='/profile'>
                     Profile                   
                </Link>

            </div>
          </div>
          }
          {!userData &&
          <div className="inline-flex rounded-full shadow">
            <div className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50">
                <Link to='/login'>
                     Login                   
                </Link>

            </div>
          </div>
          }{!userData &&
          <div className="inline-flex rounded-full shadow">
            <div className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50">
                <Link to='/register'>
                    Sign in
                </Link>
            </div>
          </div>
          }{userData &&
            <div className="inline-flex rounded-full shadow">
              <div className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50">
                  <a onClick={logOut}>Logout</a>
  
              </div>
            </div>
            }
        </div>
      </nav>
    </div>
  </div>
  );
}