import { Box } from 'rebass';
import './resources.css';

const Resources = () => (
    <Box className='resources-page' width={[0.9, 0.8, 0.7, 0.6]} ml='auto' mr='auto'>
        <h1>For More Practice Check out these Python Courses</h1>
        <div className='links'>
            <a href='https://www.codecademy.com/learn/learn-python-3'><h3>Codecademy Python Course</h3></a>
            <a href='https://www.coursera.org/specializations/introduction-scripting-in-python'><h3>Rice Coursera Python Course</h3></a>
        </div>
        <div align="center" id="python"><img src="/static/python.png" alt="python"></img></div>
        
        <div className='links'>
        <h1>Or Check Out the Python Documentation</h1>
            <a href='https://docs.python.org/3/tutorial/index.html'><h3>Official Python Tutorial</h3></a>
            <a href='https://docs.python.org/3/'><h3>Official Python Documentation</h3></a>
        </div>

    </Box>
)

export default Resources;