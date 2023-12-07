import React from 'react';
import './Hero.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
const Hero = () => {
    return (
        <main >
      <div class="hero-image">
       
  <div class="hero-text">
    <h1 style={{fontSize:'60px'}}>Education is power!!!</h1>
    <br></br>
    <p>Focus your creative journey with Online Learning Paths. Deepen your skillset with a skill </p>
    
    <p>of curated classes that build on one another, reinforcing lessons.Availbale in a range of</p>
 
   <p>experience levels from beginner to advance .</p>
  </div>
  <div style={{position:'relative',top:'190px',marginLeft:'60px'}}>

   <Button colorScheme='gray'>Explore Courses</Button>
  </div>
</div>      
        </main>
    );
}

export default Hero;
