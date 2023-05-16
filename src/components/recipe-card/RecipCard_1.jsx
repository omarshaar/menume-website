const RecipCard = (p) => {
    const shopIcon = <svg className="svgicon" width="17" height="17" viewBox="0 0 22 22" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><circle cx="6" cy="19" r="2" /><circle cx="17" cy="19" r="2" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />    <path d="M15 6h6m-3 -3v6" /></svg>

    return (
        <div className="item-card-container">
            
            <div className="item-image-container">
                <img src={p.image} alt="" />
            </div>

            <div className="item-desription">
                <p className="item-title"> Cake with creme </p>
                <p className="item-description" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam at incidunt amet, commodi maiores illo.">
                    Lorem ipsum dolor sit amet...
                </p>
            </div>

            <div className="item-action fcb">
                <p className="itme-price"><span>12$</span> </p>
                <button className="buy-button"> { shopIcon } </button>
            </div>

        </div>
    );
}

export default RecipCard;