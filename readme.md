# Gerenciamento de Quartos - Hotel Recanto Feliz

> Sistema de gerenciamento de quartos desenvolvido para a disciplina de Programação Web 1, focado em operações CRUD e integração com Firebase.

## 📌 Sobre o Projeto

Este repositório contém um sistema de gerenciamento de disponibilidade dos quartos do Hotel Recanto Feliz, com funções para:

- Cadastro de novos quartos
- Consulta da ocupação dos quartos
- Atualização de informações dos quartos
- Exclusão de quartos

O projeto abrange a expansão do hotel de 30 para 50 quartos, divididos nas categorias: Básico, Médio e Prime.

A aplicação foi desenvolvida como Prova de Conceito (POC) para o projeto da disciplina de Análise de Sistemas.

---

## 🛠️ Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- Firebase (Realtime Database)
- Git/GitHub para versionamento

---

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Medeirosvdd/GrenciamentoDeQuarto
   ```
2. **Abra o projeto em seu navegador** (basta abrir o `index.html`).
3. **Configure o Firebase**:
   - Acesse [Firebase Console](https://console.firebase.google.com/).
   - Crie um novo projeto.
   - No menu lateral, clique em **Realtime Database** e crie o banco.
   - Copie as credenciais do projeto.
   - No arquivo `script.js`, substitua a configuração pelo seu projeto.

4. **Utilize o sistema**:
   - Cadastre quartos
   - Consulte a lista de quartos
   - Edite informações
   - Exclua quartos

---

## 📂 Estrutura do Repositório

```bash
📂 GerenciamentoDeQuarto
├── 📄 index.html
├── 📄 style.css
├── 📂 JS
│   ├── 📄 Script.js
│   └── 📄 firebaseConfig.js
├── 📂 img
│   └── 📄 Fundo.svg
├── 📄 README.md
└── 📄 LICENSE

```

---

## 📖 Exemplos de Código

```javascript
// Exemplo de cadastro de quarto
function cadastrarQuarto() {
    const numero = document.getElementById('numero').value;
    const categoria = document.getElementById('categoria').value;
    
    firebase.database().ref('quartos/' + numero).set({
        numero: numero,
        categoria: categoria,
        ocupado: false
    });
}
```

```html
<!-- Exemplo de formulário HTML -->
<form id="formQuarto">
    <input type="text" id="numero" placeholder="Número do Quarto" required>
    <select id="categoria">
        <option value="Básico">Básico</option>
        <option value="Médio">Médio</option>
        <option value="Prime">Prime</option>
    </select>
    <button type="submit">Cadastrar Quarto</button>
</form>
```

```css
/* Exemplo de estilização CSS */
body {
    font-family: Arial, sans-serif;
    margin: 20px;
    background-color: #f5f5f5;
}

form {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
}
```

---

## 🏆 Autor

👤 **Murilo Medeiros**  
📧 Email: medeirosfusion@gmail.com  
🔗 [LinkedIn](linkedin.com/in/murilo-medeiros-745917314)  
🔗 [GitHub](https://github.com/Medeirosvdd)

---

## 🎯 Objetivo do Repositório

Este repositório foi criado para demonstrar a funcionalidade de um CRUD completo integrado com Firebase, focando na prática de tecnologias web e banco de dados em tempo real.  
O projeto também compõe parte da avaliação individual da disciplina de Programação Web 1.

---

## ⚖️ Licença

Este projeto está licenciado sob os termos da licença MIT.  
Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

