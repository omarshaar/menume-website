import {SubTitle} from "../";


const OffersSection = () => {
    return (
        <section className="offers-section-container fcc">
            <div className="offers-section-body">
                <div>
                    <img className="bg-img-top-r" src="https://mediacity.co.in/delici/static/media/bg-2.8bae21f85dd8fdf29a8d.png" alt="image" />
                    <img className="bg-img-bottom-l" src="https://mediacity.co.in/delici/static/media/bg-1.8f7891ade2cf907c12b1.png" alt="image" />
                </div>

                <div className="fcc flex-col relative">
                    <SubTitle> flavors for royalty </SubTitle>
                    <div> <p className="title-text title-text-sm text-white"> We Offer Top Notch </p> </div>
                    <div> <p className="text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error doloribus libero mollitia animi quisquam</p> </div>
                    <div className="offer-items-container fcb">
                    <OfferItem title="Breakfast" img="https://mediacity.co.in/delici/static/media/offer-image-1.c020474aea0ed9a09d2a.jpg" />
                    <OfferItem title="Appetizers" img="https://mediacity.co.in/delici/static/media/offer-image-2.d655d2ba6f4b2c6f7ac9.jpg" />
                    <OfferItem title="Drinks" img="https://mediacity.co.in/delici/static/media/offer-image-3.2220579532c7ff25ef9c.jpg" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OffersSection;




function OfferItem(p) {

    return(
        <div className="offer-item-container">
            <div className="offer-item-image"> <img src={p.img} alt="itme image" /> </div>
            <div className="offer-title"> <p> Breakfast </p> </div>
            <div className="offer-actions fcc"> <p>View Menu</p> </div>
        </div>
    )
}