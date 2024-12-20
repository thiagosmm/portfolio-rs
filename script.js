function copiaEmail() {
    const email = "thiagosmmonteiro@gmail.com";
    navigator.clipboard.writeText(email)
        .then(() => {
            const copyIcon = document.getElementById("copy-icon");
            copyIcon.src = "assets/check.svg";
            // alert("Email copiado!")
        })
        .catch(err => {
            console.error("Falha ao copiar o email", err)
        });
}

function abreCurriculo() {
    const pdfUrl = "assets/CurrículoThiagoMonteiro - cópia.pdf";
    window.open(pdfUrl, "_blank");
}