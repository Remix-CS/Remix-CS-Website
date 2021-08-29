import { Box } from 'rebass';
import './resources.css';

const Resources = () => (
    <Box className='resources-page' width={[0.9, 0.8, 0.7, 0.6]} ml='auto' mr='auto' mt='30px'>
        <h1 className='resources-header'>Resources</h1>
        <h2>For More Practice Check out these Python Courses</h2>
        <div className='links'>
            <a href='https://www.codecademy.com/learn/learn-python-3' target='_blank'><h3>Codecademy Python Course</h3></a>
            <a href='https://www.coursera.org/specializations/introduction-scripting-in-python' target='_blank'><h3>Rice Coursera Python Course</h3></a>
        </div>
        <div align="center" id="python"><img src="/static/python.png" alt="python"></img></div>
        
        <div className='links'>
        <h2>Or Check Out the Python Documentation</h2>
            <a href='https://docs.python.org/3/tutorial/index.html' target='_blank'><h3>Official Python Tutorial</h3></a>
            <a href='https://docs.python.org/3/' target='_blank'><h3>Official Python Documentation</h3></a>
        </div>

    </Box>
)

export default Resources;