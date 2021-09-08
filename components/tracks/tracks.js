import './tracks.css';
import { Box } from 'rebass';
import { tracks } from './tracks.json';

const Tracks = () => {
    let trackComponents = [];
    for (let i = 0; i < tracks.length; i++) {
        trackComponents.push(
            <Box className='track' width={[0.8, 0.7, 0.6, 0.5]} ml='auto' mr='auto' key={i}>
                <h2>{tracks[i].title}</h2>
                <h3>Experience Needed: {tracks[i].experience}</h3>
                <p>{tracks[i].description}</p>
            </Box>
        )
    }
    
    return (
        <div id='curriculum' style={{
            backgroundImage: 'url(../../static/background.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'left bottom',
            backgroundAttachment: 'fixed'
        }}>
            <h1 className='curriculum-header'>Curriculum</h1>
            {trackComponents}
            <p className='legacyLink'>Click <a href='/curriculum'>here</a> to view curriculum from past years!</p>
        </div>
    )
}

export default Tracks