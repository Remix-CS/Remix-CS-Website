import React from 'react';
import { Box } from 'rebass';
import './mentorship.css';

export default function Mentorship() {

    return (
        <Box>
            {/* Title */}
            <Box className='mentorship-page' mt={30}>
                <h1>Summer Pilot Program</h1>
                <h2>July 20 - August 17</h2>

                {/* Description */}
                <p className='mentorship-description'>
                    This summer, we
                    will be hosting a mentorship program to teach students interested
                    in Computer Science about life in tech. Students will be put into
                    groups and paired with a Rice Computer Science student who will serve
                    as a mentor for 4 weeks. Students and mentors will
                    meet for 1 hour per week in a remote setting. Based on your schedule,
                    we will schedule a time that works for you and your mentor. Please fill out
                 <a href="https://bit.ly/2BXDtk6" target="_blank"> this form </a>
                by 11:59 PM on July 17th if you are interested in signing up for this opportunity.
                If you have any questions, please reach out to riceremixcs@gmail.com.</p>

                <img className="mentorship-img" src="/static/pilot.png" alt="pilot"></img>

                <div className="form-desktop">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd1VVyLJ834MzJzD-9yBF-HUoH3AgI1JTwb6plWfNmAUc5Hxg/viewform?embedded=true" width="640" height="2700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
                <div className="form-mobile">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd1VVyLJ834MzJzD-9yBF-HUoH3AgI1JTwb6plWfNmAUc5Hxg/viewform?embedded=true" width="350" height="3200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </Box>



        </Box>
    );
}
