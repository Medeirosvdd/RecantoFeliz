import { auth } from "./firebaseConfig.js";
import {
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

document.getElementById("btnLogin").addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    if (!email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    try {
        await signInWithEmailAndPassword(auth, email, senha);
        window.location.href = "index.html";
    } catch (erro) {
        alert("Email ou senha inválidos!");
        console.log("Erro no login:", erro);
    }
});
