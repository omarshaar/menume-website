import { useEffect } from 'react';
import { odescroll } from '../../../../odescroll/index';



const ItemsSection = () => {

    useEffect(()=>{
        odescroll.init({
            oneDirection: true
        });
    });


    return (
        <section className="items-section-container">
            <div className="items-section-body">
                
                <div className="fcc w-max">
                    <div className="section-head-shape"></div>
                    <h3 className="section-head"> Most Popural </h3> 
                </div>

                <div className="homeitems-container">
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"> <ItemCard image="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" /> </div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"> <ItemCard image="https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" /> </div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"> <ItemCard image="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" /> </div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"> <ItemCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /> </div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"> <ItemCard image="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" /> </div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"> <ItemCard image="https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" /> </div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"> <ItemCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /> </div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"> <ItemCard image="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" /> </div></div>
                </div>
            </div>
        </section>
    );
}

export default ItemsSection;



function ItemCard(p) {
    const shopIcon = <svg className="svgicon" width="17" height="17" viewBox="0 0 22 22" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="6" cy="19" r="2" /><circle cx="17" cy="19" r="2" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />    <path d="M15 6h6m-3 -3v6" /></svg>

    return(
        <div className="item-card-container">
            
            <div className="item-image-container">
                <img src={p.image} alt="" />
            </div>

            <div className="item-desription">
                <p className="item-title"> Cake with creme </p>
                <p className="item-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam at incidunt amet, commodi maiores illo.
                </p>
            </div>

            <div className="item-action fcb">
                <p className="itme-price"> Price: <span>12$</span> </p>
                <button className="buy-button"> { shopIcon } </button>

            </div>

        </div>
    )
}