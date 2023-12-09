import React from 'react';
import instaLogo from '../Images/pngtree-instagram-black-amp.png'
import twitterLogo from '../Images/twitter.png'
import whatsappLogo from '../Images/whatsapp.png'

import './Footer.css'
const Footer = () => {
   
    return (
        <>
            <div className='course_outer_div'>
                <div className='course_first_section'>
                    <div className='first1_section'>
                        <span className='first_section_title'>Company</span>
                        <span className='first_section_subtitle'>About Us</span>
                        <span className='first_section_subtitle'>Customers</span>
                        <span className='first_section_subtitle'>Contacts</span>

                    </div>
                    <div className='second_section'>
                        <span className='second_section_title'>Company</span>
                        <span className='second_section_subtitle'>About Us</span>
                        <span className='second_section_subtitle'>Customers</span>
                        <span className='second_section_subtitle'>Contacts</span>

                    </div>
                    <div className='third_section'>
                        <span className='third_section_title'>Work with us</span>
                        <span className='third_section_subtitle'>Become an instructor</span>
                        <span className='third_section_subtitle'>Blog as guest</span>
                       

                    </div>
                    <div className='last_section'>
                        <h1 className='last_section_title'>Follow us on</h1>
                        <img className='last_section_subtitle' style={{ height: '50px', width: '50px', position: 'relative', top: '5px' }} src={instaLogo} />
                        <img className='last_section_subtitle' style={{ height: '40px', width: '40px' }} src={twitterLogo} />
                        <img className='last_section_subtitle' style={{ height: '40px', width: '40px' }} src={whatsappLogo} />
                    </div>
                </div>
            </div>
            <div className='course_second_section'  style={{}}>
                <div className='second_section_content'>


                    <div className='second_section_heading'>
                        Trending Free Courses

                    </div>

                    <div className='second_section_course_list'>
                        <p>Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence </p>
                        <p>Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence </p>
                        <p>Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence Basics</p>
                        <p>Artificial Intelligence Basics | MS Excel Free Taining </p>

                    </div>
                </div>
            </div>
            <div className='category_section'>
                <div className='category_section_content'>

        <div className='category_Name_section'>
            Trending Category
        </div>
        <div className='category_list'>
        <p>Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence </p>
                        <p>Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence </p>
                        <p>Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence Basics | MS Excel Free Taining |Artificial Intelligence Basics</p>
                        <p>Artificial Intelligence Basics | MS Excel Free Taining </p>
        </div>
                </div>

            </div>

            <div className='footer_last_section'>
                <div className='footer_list_section'>

             <div className='footer_last_section_list'>
                2001-2003 Online Learning All rights reserved .
             </div>
             <div className='footer_last_section_list'>
                Terms And Services| Privacy Policy
             </div>
                </div>

            </div>


        </>
    );
}

export default Footer;
