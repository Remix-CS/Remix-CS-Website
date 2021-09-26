import { Box, Flex, Image } from 'rebass';
import './history.css';
import { partners } from './history.json';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const History = () => (
    <div id='history' style={{
        backgroundImage: 'url(../../static/background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left bottom',
        backgroundAttachment: 'fixed'
    }}>
        <h1 className='history-header'>History</h1>
        <h2>Affiliated Schools</h2>
        {
            partners.map(({ name, website, start, picture }) => (
                <Box width={[0.8, 0.7, 0.6, 0.5]} ml='auto' mr='auto' mt={20} mb={40} className='schools' key={name}>
                    <Flex flexDirection='row' flexWrap='wrap' justifyContent='center' alignItems='center'>
                        <Box width={[0.8, 0.2]} mr='10px' ml='10px' mb='10px' className='schools-img' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Image src={picture} alt="" />
                        </Box>
                        <Box width={[0.8, 0.7]} className='schools-info' mr='10px' ml='10px'>
                            <h1>{name}</h1>
                            <a href={website} target='_blank'><h3>School Website →</h3></a>
                            <h3>{start}</h3>
                        </Box>
                    </Flex>
                </Box>
            ))
        }

        <h2 id="testimonialsHeader">Testimonials</h2>
        <div id="testimonialCarousel">
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} dynamicHeight={true}>
                <div className="testimonial"><p>"Thank you so much for this opportunity. This is an experience I'll definitely remember and I'm glad I attended. The mentors were great and I want them to know they led the meetings wonderfully. I'm actually going to miss the program."</p></div>
                <div className="testimonial"><p>"My mentors took into consideration what we wanted to learn... The flexibility of the lessons were really enjoyable."</p></div>
                <div className="testimonial"><p>"I liked learning about what the CS major entailed, the different fields of the IT industry, and what the college application process is like. Hearing directly from college students helped a lot with setting my mind into preparing for the college application process. These sessions also helped me pinpoint what I plan to do with a CS major. It was really informative!"</p></div>
                <div className="testimonial"><p>"Cool college people!"</p></div>
            </Carousel>
        </div>
    </div>
)

export default History;