import { auth } from "./firebaseConfig.js";
import { createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

document.getElementById("btnCadastro").addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    if (!email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, senha);
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    } catch (erro) {
        alert("Erro ao cadastrar. Tente novamente.");
        console.log("Erro no cadastro:", erro);
    }
});
