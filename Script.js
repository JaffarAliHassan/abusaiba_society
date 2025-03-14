function copyText() {
    const text = document.getElementById('textToCopy').innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        const alert = document.getElementById('copiedAlert');
        alert.style.display = 'block';
        setTimeout(() => {
            alert.style.display = 'none';
        }, 2000);
    });
}