


const CategoryItem = (p) => {
    return (
        <div className={ p.active ? "category-item-container f-c categoryActive " : "category-item-container f-c"} style={!p.iconImage ? { padding: "0 25px"} : {}}>
           {p.iconImage && 
                <div className="category-item-icon f-c">
                    <img src={p.iconImage} alt="category icon" />
                </div>
            }
            <div>
                <p className="category-p" style={!p.iconImage ? { margin: "0"} : {}} > { p.title } </p>
            </div>
        </div>
    );
}

export default CategoryItem;