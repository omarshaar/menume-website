const TextInput = (p) => {
    return (
        <div className={p.className ? `main-text-input ${p.className}` : "main-text-input"} >
            <input type="text" placeholder={p.placeholder} />
        </div>
    );
}

export default TextInput;