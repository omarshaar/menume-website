const ItemCard = () => {
    return (
        <div className="item-card-container flex items-center">
            <div className='item-image'> <img src="https://mediacity.co.in/delici/static/media/menu-image-5.82f62d04acb6111c989f.png" alt="item image" /> </div>
            <div className='h-max w-full'>

                <div className='flex items-center justify-between item-card-top'>
                    <p className='item-title'> Greek salad </p>
                    <div className='s-info fcc'><span>seasonal</span></div>
                    <div className='title-clear'></div>
                    <div className='item-price'> <p>$25.50</p> </div>
                </div>

                <div className='item-desc'>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci perferendis quod </p>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;