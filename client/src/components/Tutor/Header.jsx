import React from 'react';
import './Header.css'
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Button, ButtonGroup } from '@chakra-ui/react'
const Header = () => {
   
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
    const Logout = () => {
        removeCookie("token");
        navigate("/tutor/signup");
      };
    return (
        <header>
         <h1>E-Learning</h1>   
         <div className='header_last_section'>
            <h1>Welcome Instructor</h1>
            <Button onClick={Logout} colorScheme='gray'>Logout</Button>
         </div>
        </header>
    );
}

export default Header;
