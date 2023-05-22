import { useEffect } from 'react';
import { odescroll } from '../../../../odescroll/index';
import { RecipCard } from '../../../../components';
import { CategorysSection, ItemCard, SubTitle } from '../';

const ItemsSection = () => {


    return (
        <section className="items-section-container">
            <div>
                <img src="https://mediacity.co.in/delici/static/media/bg-5.aada0ae02d8a7acdeaf7.png" alt="image" className='bg-menu-image' />
            </div>
            <div className='items-section-body fcc flex-col'>
                <SubTitle>special selection</SubTitle>
                <div> <p className="title-text title-text-sm text-white"> Delicious Menu </p> </div>

                <CategorysSection />

                <div className='menu-itmes w-full h-max flex justify-between items-center '>

                    <div className='w-2/4 h-max menu-side-l'>
                        <div className='w-full'>
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
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default ItemsSection;


