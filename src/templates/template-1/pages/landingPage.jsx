import '../styles/index.css';
import '../styles/resp.css';
// Private Components
import { HeroSection, Header, ItemsSection} from '../components';
// Global Components
import { ContactSection } from '../../../components';




const LandingPage = () => {
    return (
        <div className="restaurant-landingpage-container">
            <Header />
            <HeroSection />
            <ItemsSection />
            <ContactSection />
        </div>
    );
}

export default LandingPage;