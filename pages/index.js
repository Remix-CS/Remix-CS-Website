import Header from '../components/header';
import Navbar from '../components/navbar/navbar';
import Homepage from '../components/homepage/homepage';
import './page.css';
import Program from '../components/program/program';
import Tracks from '../components/tracks/tracks';
import History from '../components/history/history';
import Mentors from '../components/mentors/mentors';
import Contact from '../components/contact/contact';

const Home = () => (
    <div>
        <Header />
        <Navbar />
        <Homepage />
        <Program />
        <Tracks />
        <Mentors />
        <History />
        <Contact />
    </div>
)

export default Home;