import './curriculum.css';
import { Box } from 'rebass';
import { modules } from './curriculum.json'

const Curriculum = () => {
    let module_components = []
    for (let i = 0; i < modules.length; i++) {
        module_components.push(
            <Box className='module' width={[0.7, 0.7, 0.6, 0.5]} ml='auto' mr='auto' key={modules[i].name} mt={30}>
                <h2>{`${i + 1}. ` + modules[i].name}</h2>
                <a href={modules[i].presentation} target="_blank" rel="noopener noreferrer"><h3>View the Lesson</h3></a>
                {/* <a href={modules[i].problems}><h3>Work on the Problem Set</h3></a> */}
            </Box>
        )
    }
    return (
        <div id='legacy-curriculum' style={{
            backgroundImage: 'url(../../static/background.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'left bottom',
            backgroundAttachment: 'fixed'
        }}>
            <h1 className='curriculum-header'>Past Curriculum</h1>
            {module_components}
        </div>
    )
}

export default Curriculum