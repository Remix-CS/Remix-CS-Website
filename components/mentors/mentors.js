import { Box } from 'rebass';
import './mentors.css';

const Mentors = () => (
    <Box id='mentors' width={[0.9, 0.8, 0.7, 0.6]} ml='auto' mr='auto' mt='30px' style={{backgroundColor: '#f2fffa'}}>
        <h1 className='mentors-header'>Mentors</h1>
        <p>We are currently accepting mentor applications until 11:59 PM CST on Friday, September 10!</p>
        <div className='links'>
            <a href='https://forms.gle/hcoJEk1mfxEfGmDN9' target='_blank'><h3>Apply Here!</h3></a>
        </div>

    </Box>
)

export default Mentors;