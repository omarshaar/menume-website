import {Header, Footer, SubTitle, ItemCard, CategorysSection} from '../components';

const MenuPage = () => {


    return (
        <div className="menu-page-container">
            <Header />
            <MenuHero />
            <MenuBody />
            <Footer />
        </div>
    );
}

export default MenuPage;


function MenuHero(params) {
    return(
        <div className='menu-page-hero fcc'>
            <div className='black-over'></div>

            <div className='relative fcc flex-col'>
                <SubTitle>delicious & amazing</SubTitle>
                <div> <p className="title-text">Our Menu</p> </div>
            </div>
        </div>
    )
}


function MenuBody(params) {
    return(
        <div className='menu-page-body'>
            <CategorysSection />

            <div className='menu-itmes w-full h-max flex justify-between'>
                <div className='w-2/4 h-max menu-side-l'>
                    <div className='w-full'>
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </div>
                </div>

                <div className='w-2/4 h-max flex flex-row-reverse menu-side-r'>
                    <div className='w-full'>
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </div>
                </div>

            </div>
        </div>
    )
}
