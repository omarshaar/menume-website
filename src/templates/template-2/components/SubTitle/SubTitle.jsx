const SubTitle = (p) => {
    return (
        <div className="fcc flex-col">
            <span className="subtitle"> {p.children} </span>
            <div className="hero-pattern-image"> <img src="https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg" alt="image" className="pattern-image"/> </div>
        </div>
    );
}

export default SubTitle;