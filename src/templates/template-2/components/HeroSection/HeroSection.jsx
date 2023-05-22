import { Button } from "../../../../components";
import {SubTitle} from "../";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="hero-section-container">
            <div className="hero-sec-image"> </div>

            <div className="hero-body fcc flex-col">
                <SubTitle>delightful experience</SubTitle>
                <div> <p className="title-text">For the love of <br /> delicious food </p> </div>
                <div> <p className="text">Come with family & feel the joy of mouthwatering food</p> </div>
                <Link to={"/menu"}> <Button className="button"> <span className="btn-span-1">View Our Menu</span> <span className="btn-span-2">View Our Menu</span> </Button> </Link>
            </div>

        </section>
    );
}

export default HeroSection;