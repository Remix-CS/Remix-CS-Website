import React from 'react';
import { Box } from 'rebass';
import './mentorship.css';

export default function Mentorship() {

    return (
        <Box>
            {/* Title */}
            <Box className='mentorship-page' mt={30}>
                <h1>Mentorship</h1>
                <h2>September - November 2021</h2>

                {/* Description */}
                <p className='mentorship-description'>
                    This fall, we
                    will be hosting a mentorship program for students interested
                    in Computer Science and related fields. Students will be put into
                    groups led Rice Computer Science students. Students and mentors will
                    meet for 1 hour per week for 8 weeks. Based on your availability,
                    we will schedule a time that works for you, your group, and your mentors.
                If you have any questions, please reach out to riceremixcs@gmail.com.</p>

                <p className='mentorship-description'>More info coming soon!</p>
            </Box>



        </Box>
    );
}
