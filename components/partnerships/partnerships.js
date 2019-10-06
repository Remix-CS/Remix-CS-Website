import { Box, Flex, Image } from 'rebass';
import './partnerships.css';
import { partners } from './partnerships.json';

const Partnerships = () => (
    <div className='partnerships-page'>
        {
            partners.map(({ name, website, start, picture }) => (
                <Box width={[0.8, 0.7, 0.6, 0.5]} ml='auto' mr='auto' mt={40} className='partnerships' key={name}>
                    <Flex flexDirection='row' flexWrap='wrap' justifyContent='center'>
                        <Box width={[0.8, 0.2]}>
                            <Image src={picture} alt="" />
                        </Box>
                        <Box width={[0.8, 0.7]} className='partnerships-info'>
                            <h1>{name}</h1>
                            <a href={website}><h3>School Website →</h3></a>
                            <h3>{start}</h3>
                        </Box>
                    </Flex>

                </Box>
            ))
        }
    </div>
)

export default Partnerships;