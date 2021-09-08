import React from 'react';
import { Box } from 'rebass';
import './program.css';

export default function Program() {

    return (
        <Box id='our-program' style={{backgroundColor: '#f2fffa'}}>
            {/* Title */}
            <Box className='program-page' mt={30} style={{marginTop: '0'}}>
                <h1>Our Program</h1>
                <h2>September - November 2021</h2>

                {/* Description */}
                <p className='program-description'>
                    This fall, we
                    will be hosting a mentorship program for students interested
                    in Computer Science and related fields. Students will be put into
                    groups led Rice Computer Science students. Students and mentors will
                    meet for 1 hour per week for 8 weeks. Based on your availability,
                    we will schedule a time that works for you, your group, and your mentors.
                If you have any questions, please reach out to riceremixcs@gmail.com.</p>

                <p className='program-description'>Registration is now open. Sign up by 11:59 PM CST on Friday, September 10!</p>

                <div className='links'>
                    <a href='https://forms.gle/ecRL6UJ3njvPbpA39' target='_blank'><h3>Register Here!</h3></a>
                </div>
            </Box>



        </Box>
    );
}
