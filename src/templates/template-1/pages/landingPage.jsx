import '../styles/index.css';
import '../styles/resp.css';
import { HeroSection, Header, ItemsSection} from '../components';


const LandingPage = () => {
    return (
        <div className="restaurant-landingpage-container">
            <Header />
            <HeroSection />
            <ItemsSection />
        </div>
    );
}

export default LandingPage;