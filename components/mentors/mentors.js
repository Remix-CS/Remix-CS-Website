import { Box, Flex, Image } from 'rebass';
import './mentors.css';
import { mentors } from './mentors.json';

const Mentors = () => (
    <Box id='mentors' width={[0.9, 0.8, 0.7, 0.6]} ml='auto' mr='auto' mt='30px' style={{backgroundColor: '#f2fffa'}}>
        <h1 className='mentors-header'>Mentors</h1>
        <p>Check back soon for our fall 2022 mentor application!</p>
        {/* <p>Click <a href='https://forms.gle/y2g6Q2f365bgebvr9' target='_blank'>here</a> to apply to be a RemixCS mentor!</p> */}
        <h2 id="meet">Meet Our Past Mentors!</h2>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', margin: 'auto', width: '80%'}}>
        {
            mentors.map(({ name, picture }) => (
                <Box width={[0.6, 0.5, 0.4, 0.3]} ml='auto' mr='auto' mt='30px' className='meetMentors' key={name}>
                    <Flex flexDirection='column' flexWrap='wrap' justifyContent='center' alignItems='center'>
                        <Box className="mentors-img" width={[0.8, 0.5]} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Image src={picture} alt="" style={{margin: '5px'}} />
                        </Box>
                        <Box width={[0.8, 0.6]} className='mentors-bio'>
                            <h2>{name}</h2>
                        </Box>
                    </Flex>

                </Box>
            ))
        }
        </div>
    </Box>
)

export default Mentors;