import { Box, Flex, Image } from 'rebass';
import './homepage.css';

const Homepage = () => (
    <div className='home-page' marginTop="10px">
        <Flex width={[0.8, 0.55]} className="remix-logo" ml='auto' mr='auto' flexDirection="column" justifyContent="flex-end">
            <Image src='../../static/remixHeader.svg' alt="" />
            <Flex alignItems="center" flexWrap="nowrap" style={{
                margin: '0 0 10px auto'
            }}>
                Sponsored by
                <Image src='../../static/twoSigma.svg' alt="" width="135px" ml="10px" />
            </Flex>
        </Flex>
        <Box className='bullets' width={[0.8, 0.7, 0.6, 0.5]} ml='auto' mr='auto'>
            <h1>Grow</h1>
            <p>
                Our mission is to provide a platform for CS outreach to the greater Houston K-12 community to inspire future computer scientists of all backgrounds, specifically underrepresented minorities in CS. 
                For more information about our volunteer work, please click <a href="https://csweb.rice.edu/news/remixcs-offers-cs-training-local-high-school" target="_blank">here</a>.
                </p>
            <h1>Learn</h1>
            <p>
                Our curriculum is designed to teach foundational python programming skills, as well as provide an introduction to concepts fundamental to computer science as a whole.
                </p>
            <h1>Inspire</h1>
            <p>
                We're a group of Rice University student volunteers whose goal is to introduce high school students to computer science and the college application process. We hope that our 
                mentorship program can inspire the next generation of innovators and leaders.
            </p>
        </Box>
    </div>
)

export default Homepage;