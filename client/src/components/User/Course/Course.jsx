import React from 'react';
import './Course.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
const Course = () => {
    return (
        <div className='course_section' style={{display:'flex',justifyContent:'space-around'}}>


            <div className='first_course_section'>
                <div className="form_container1">

                    <form>
                        <div className='first_image_section'>


                        </div>
                        <p style={{ fontSize: '20px' }}>React,Nodejs,expresjs & mongodb - The Mern
                            stack full guide
                        </p>
                        <p>Mathew Alex</p>
                        <Button colorScheme='red'>Buy now</Button>




                    </form>

                </div>
            </div>
            <div className='first_course_section'>
                <div className="form_container1">

                    <form>
                        <div className='first_image_section'>


                        </div>
                        <p style={{ fontSize: '20px' }}>React,Nodejs,expresjs & mongodb - The Mern
                            stack full guide
                        </p>
                       <p>John Straut</p>
                        <Button colorScheme='red'>Buy now</Button>




                    </form>

                </div>
            </div>
        </div>
    );
}

export default Course;
