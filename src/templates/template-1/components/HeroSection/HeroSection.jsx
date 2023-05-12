

const HeroSection = () => {
    return (
        <section className="hero-section-container">
            <div className="hero-shape1"></div>

            <div className="hearo-section-body fcc">

                <div className="hero-section1 f-c">
                    <div className="hero-shape2"> </div>

                    <div className="hero-image-container">
                        <img draggable="false" src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/1429b54082245b0a97199ae0/342-min.jpg" alt="" />
                    </div>
                </div>

                <div className="hero-section2 fc fcol">

                    <div>
                        <h2> <span> Easy chocolate </span> </h2>
                        <h2> cake recipe </h2>
                    </div>

                    <div className="hearo-desc">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nobis iste dolor praesentium fugiat itaque culpa placeat ipsum atque dicta alias tempore aliquam, cumque provident doloribus asperiores quam non ab?
                        </p>
                    </div>

                    <div className="hero-actions">
                        <button onClick={()=> document.exitFullscreen()}> OEDER NOW </button>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default HeroSection;