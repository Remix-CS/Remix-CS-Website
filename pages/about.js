import Header from '../components/header';
import Navbar from '../components/navbar/navbar';
import './page.css';

const About = () => (
    <div>
        <Header />
        <Navbar />
        <h1 style={{textAlign: 'center'}}>This is the about page.</h1>
    </div>
)

export default About;