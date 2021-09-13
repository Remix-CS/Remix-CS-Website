import { Box } from 'rebass';
import './mentors.css';

const Mentors = () => (
    <Box id='mentors' width={[0.9, 0.8, 0.7, 0.6]} ml='auto' mr='auto' mt='30px' style={{backgroundColor: '#f2fffa'}}>
        <h1 className='mentors-header'>Mentors</h1>
        <p>Mentor applications for fall 2021 are closed. Check back next spring for updates!</p>
    </Box>
)

export default Mentors;