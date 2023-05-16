import { useEffect } from "react";
import {HeaderOrderPage, GridContainer, RecipCard} from "../../../components";
import {CategoryItem} from "../components";


const MenuPage = () => {


    return (
        <div className="menu-page-container">
            <HeaderOrderPage />
            <div className="menu-page-body">
                <div className="categorys-container">
                    <div className="categorys-body f">
                        <CategoryItem title="All" active={true} />
                        <CategoryItem iconImage="https://cdn0.iconfinder.com/data/icons/fastfood-30/64/cake-piece-topping-strawberry-cheese-dessert-birdthday-128.png" title="Cake" />
                        <CategoryItem iconImage="https://cdn3.iconfinder.com/data/icons/christmas-and-chocolate/700/27-128.png" title="Croissant" />
                        <CategoryItem iconImage="https://cdn3.iconfinder.com/data/icons/christmas-and-chocolate/700/10-1024.png" title="Donut" />
                    </div>
                </div>
                <GridContainer minWidth="240px" gap="20px">
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                    <div data-odescroll-container><div className="item-container" data-odescroll="fade-up"><RecipCard image="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" /></div></div>
                </GridContainer>
            </div>
        </div>
    );
}

export default MenuPage;