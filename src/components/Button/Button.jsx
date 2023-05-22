const Button = (p) => {
    return (
        <button className={ p.className ? `main-button ${p.className} ` : "main-button" } >
            { p.children }
        </button>
    );
}

export default Button;