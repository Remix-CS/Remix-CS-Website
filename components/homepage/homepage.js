import { Box, Flex, Image } from 'rebass';
import './homepage.css';

const Homepage = () => (
    <div className='home-page'>
        <Box width={[0.8, 0.55]} className="remix-logo" ml='auto' mr='auto'>
            <Image src='../../static/remixHeader.svg' alt="" />
        </Box>
        <Box className='bullets' width={[0.8, 0.7, 0.6, 0.5]} ml='auto' mr='auto'>
            <h1>Grow</h1>
            <p>
                Our mission is to provide a platform for CS outreach to the greater Houston K-12 community to inspire future computer scientists of all backgrounds, specifically underrepresented minorities in CS.
                </p>
            <h1>Learn</h1>
            <p>
                Our curriculum is designed to teach foundational python programming skills, as well as provide an introduction to concepts fundamental to computer science as a whole.
                </p>
            <h1>Explore</h1>
            <p>
                According to the bureau of labor statistics the number of jobs for software developers will increase by 30% by 2026. With knowledge of computer science, countless opportunities and doors will open for you. 
                For more information about our work, please click <a href = "https://csweb.rice.edu/content/remixcs-offers-cs-training-local-high-school">here</a>.
                </p>
        </Box>
    </div>
)

export default Homepage;