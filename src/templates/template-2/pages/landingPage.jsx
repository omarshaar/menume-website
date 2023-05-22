import '../styles/index.css';
import '../styles/resp.css';
import {Header, HeroSection, OffersSection, ItemsSection, BookSectiion, Footer} from '../components';


const LandingPage = () => {
    return (
        <div className="restaurant-landingpage-container">
            <Header />
            <HeroSection />
            <OffersSection />
            <ItemsSection />
            <BookSectiion />
            <Footer />
        </div>
    );
}

export default LandingPage;

