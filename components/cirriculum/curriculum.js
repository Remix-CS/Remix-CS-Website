import './curriculum.css';
import { Box } from 'rebass';
import { modules } from './curriculum.json'

const Curriculum = () => {
    let module_components = []
    for (let i = 0; i < modules.length; i++) {
        module_components.push(
            <Box className='module' width={[1, 0.8, 0.6, 0.6]} ml='auto' mr='auto' key={modules[i].name} mt={30}>
                <h1>{`${i + 1}. ` + modules[i].name}</h1>
                <a href={modules[i].presentation} target="_blank" rel="noopener noreferrer"><h3>View the Lesson</h3></a>
                {/* <a href={modules[i].problems}><h3>Work on the Problem Set</h3></a> */}
            </Box>
        )
    }
    return (
        <div className='curriculum-page'>
            <h1 className='curriculum-header'>Curriculum</h1>
            {module_components}
        </div>
    )
}

export default Curriculum