import { Box, Flex, Image } from 'rebass';
import './history.css';
import { partners } from './history.json';

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
    </div>
)

export default History;