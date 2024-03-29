import React from 'react';
import { Box } from 'rebass';
import './program.css';
import { Carousel } from 'react-responsive-carousel';

export default function Program() {

    return (
        <Box id='our-program' style={{backgroundColor: '#f2fffa'}}>
            {/* Title */}
            <Box className='program-page' mt={30} style={{marginTop: '0'}}>
                <h1>Our Program</h1>
                <h2>September 26 - December 2, 2022</h2>
                <h3>(with breaks for the weeks of October 10 - 14 and November 21 - 25)</h3>

                {/* Description */}
                <p className='program-description'>
                    This fall, we
                    will be hosting a mentorship program for students interested
                    in computer science and related fields. Students will be put into
                    groups led Rice computer science students. Students and mentors will
                    meet for 1 hour per week for 7 weeks.
                If you have any questions, please reach out to riceremixcs@gmail.com.</p>

                <p className='program-description'>Click <a href='https://forms.gle/ErHdJvwTAzai9G7DA' target='_blank'>here</a> to fill out our interest form!</p>
            </Box>

            <h2 id="testimonialsHeader">Testimonials</h2>
            <div id="testimonialCarousel">
                <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} dynamicHeight={true}>
                    <div className="testimonial"><p>"Thank you so much for this opportunity. This is an experience I'll definitely remember and I'm glad I attended. The mentors were great and I want them to know they led the meetings wonderfully. I'm actually going to miss the program."</p></div>
                    <div className="testimonial"><p>"My mentors took into consideration what we wanted to learn... The flexibility of the lessons were really enjoyable."</p></div>
                    <div className="testimonial"><p>"I liked learning about what the CS major entailed, the different fields of the IT industry, and what the college application process is like. Hearing directly from college students helped a lot with setting my mind into preparing for the college application process. These sessions also helped me pinpoint what I plan to do with a CS major. It was really informative!"</p></div>
                    <div className="testimonial"><p>"Cool college people!"</p></div>
                </Carousel>
            </div>

        </Box>
    );
}
