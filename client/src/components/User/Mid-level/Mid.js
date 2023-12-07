import React from 'react';
import videoLogo from '../Images/online-video.png'
import insturctorLogo from '../Images/instructor.png'
import "./Mid.css"
import scheduleLogo from '../Images/event.png'
const Mid = () => {
    return (
        <div className='mid-outer'>
            <div className='video_img'>

            <img style={{width:'200px',height:'200px'}} src={videoLogo}/>
            <h1 className='mid_description'>Unlimited Acess</h1>
            <p className='mid_description_paragraph'>Choose what you'd like to learn from</p>
            <p className='mid_description_paragraph'>our extensive subscription library</p>
            </div>
            <div className='instructor_img'>
            <img style={{width:'200px',height:'200px'}} src={insturctorLogo}/>
            <h1 className='mid_description'>Expert instructors</h1>
            <p className='mid_description_paragraph'>Learn from industry experts who</p>
            <p className='mid_description_paragraph'>are passionate about teaching</p>
            </div>
            <div className='schedule_img'>
            <img style={{width:'200px',height:'200px'}} src={scheduleLogo}/>
            <h1 className='mid_description'>On your schedule</h1>
            <p className='mid_description_paragraph'>Switch bettween your computer or mobile</p>
            <p className='mid_description_paragraph'>device</p>
            </div>
        </div>
    );
}

export default Mid;
