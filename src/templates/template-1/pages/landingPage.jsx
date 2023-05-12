import '../styles/index.css';
import '../styles/resp.css';
// Private Components
import { HeroSection, Header, ItemsSection} from '../components';
// Global Components
import { ContactSection, BookTableSection,Footer } from '../../../components';




const LandingPage = () => {
    return (
        <div className="restaurant-landingpage-container">
            <Header />
            <HeroSection />
            <ItemsSection />
            <BookTableSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default LandingPage;