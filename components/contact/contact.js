import { Box, Flex, Image } from 'rebass';
import './contact.css';
import { leadership } from './contact.json';

const Contact = () => (
    <div className='contact-page'>
        {
            leadership.map(({ name, position, email, picture, year }) => (
                <Box width={[0.8, 0.7, 0.6, 0.5]} ml='auto' mr='auto' className='contact' key={name}>
                    <Flex flexDirection='row' flexWrap='wrap' justifyContent='center'>
                        <Box width={[0.8, 0.3]}>
                            <Image src={picture} alt="" />
                        </Box>
                        <Box width={[0.8, 0.6]} className='contact-bio'>
                            <h1>{name}</h1>
                            <h3>{position}</h3>
                            <h3>{email}</h3>
                            <h3>{year}</h3>
                        </Box>
                    </Flex>

                </Box>
            ))
        }
    </div>
)

export default Contact;