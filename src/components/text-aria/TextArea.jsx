const TextArea = (p) => {
    return (
        <div className={p.className ? `main-text-area ${p.className}` : "main-text-area"}>
            <textarea placeholder={p.placeholder} />
        </div>

    );
}

export default TextArea;