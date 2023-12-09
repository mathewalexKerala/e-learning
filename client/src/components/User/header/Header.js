import React, { useState } from 'react';
import './Header.css'
import imgLogo from '../Images/WhatsApp Image 2023-10-29 at 12.23.05 AM.jpeg'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { Search2Icon} from '@chakra-ui/icons'





const Header = () => {



  
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [open,setOpen] = useState(false)
  const [activeItem,setActiveItem] = useState(0)
  useEffect(() => {
    const verifyCookie = async () => {
      let user1,status1
      if (!cookies.token) {
        navigate("/login");
      }
      const data = await axios.post(
        "http://localhost:3000",
        {},
        { withCredentials: true }
      ).then((data) => { 
        console.log('this is inside then',data)
        console.log('Home page in') })
        .catch((err) => { console.log('error occured during going to Homepage',err) })
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
          position: "top-right",
        })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  }
  
  return (
    <header>
      <nav>
        <div className='container'>
          <h2 style={{color:'white'}}>E-learning</h2>
        <div className='search-bar'>
        
  <Search2Icon />
         <input  type='text'/>

        </div>
        <div className='button'>
          <p className='link'>Home</p>
          <p className='link'>courses</p>
          {/* <p className='link'>Login</p> */}
         <button  onClick={Logout} className='signup btn'>Logout</button>
   
    {/* <Avatar onClick={Logout} name='Mathew Alex' src={imgLogo} /> */}
  
        </div>
        </div>
      </nav>
    </header>

  );
}

export default Header;
