import { db } from "./firebaseConfig.js";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

function getInputsQuarto() {
  return {
    numero: document.getElementById("numero"),
    categoria: document.getElementById("categoria"),
    status: document.getElementById("status"),
  };
}

function getValoresQuarto({ numero, categoria, status }) {
  return {
    numero: parseInt(numero.value),
    categoria: categoria.value.trim(),
    status: status.value.trim(),
  };
}

function limparInputsQuarto({ numero, categoria, status }) {
  numero.value = "";
  categoria.value = "";
  status.value = "";
}

document
 .getElementById("btnCadastrar")
  .addEventListener("click", async function () {
    const Inputs = getInputsQuarto();
    const dados = getValoresQuarto(Inputs);

    if (!dados.numero || !dados.categoria || !dados.status) {
      alert("Preencha todos os campos.");
      return;
    }

    if (dados.numero < 1 || dados.numero > 50) {
      alert("Número do quarto deve ser entre 1 e 50.");
      return;
    }

    try {
      await addDoc(collection(db, "quartos"), dados);
      limparInputsQuarto(Inputs);
      alert("Quarto cadastrado com sucesso!");
    } catch (e) {
      console.log("Erro: ", e);
    }
  });

const listaQuartosDiv = document.getElementById("listar-quartos");

function renderizarListaDeQuartos(quartos) {
  listaQuartosDiv.innerHTML = "";

  if (quartos.length === 0) {
    listaQuartosDiv.innerHTML = "<p>Nenhum quarto cadastrado ainda ;(</p>";
    return;
  }

  quartos.sort((a, b) => a.numero - b.numero);

  for (let quarto of quartos) {
    const quartoDiv = document.createElement("div");
    quartoDiv.classList.add("card", "mb-3", "col-12", "col-md-6", "col-lg-4");

    quartoDiv.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">Quarto ${quarto.numero}</h5>
        <p class="card-text">Categoria: ${quarto.categoria}</p>
        <p class="card-text">Status: ${quarto.status}</p>
        <button class="btn btn-danger btn-Excluir-Quarto" data-id="${quarto.id}">Excluir</button>
        <button class="btn btn-primary btn-Editar-Quarto" data-id="${quarto.id}">Editar</button>
      </div>
    `;
    listaQuartosDiv.appendChild(quartoDiv);
  }
}

function carregarListaDeQuartosTempoReal() {
  onSnapshot(collection(db, "quartos"), (snapshot) => {
    const quartos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    renderizarListaDeQuartos(quartos);
  });
}

document.addEventListener("DOMContentLoaded", carregarListaDeQuartosTempoReal);

async function excluirQuarto(id) {
  try {
    await deleteDoc(doc(db, "quartos", id));
    alert("Quarto excluído com sucesso!");
  } catch (erro) {
    console.log("Erro ao excluir quarto", erro);
  }
}

async function lidarCliqueQuarto(evento) {
  const btnExcluir = evento.target.closest(".btn-Excluir-Quarto");
  const btnEditar = evento.target.closest(".btn-Editar-Quarto");

  if (btnExcluir) {
    const id = btnExcluir.dataset.id;
    const certeza = confirm("Quer mesmo excluir o quarto?");
    if (certeza) {
      await excluirQuarto(id);
    }
  }

  if (btnEditar) {
    const id = btnEditar.dataset.id;
    const quartosSnapshot = await getDocs(collection(db, "quartos"));
    const quartos = quartosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const quarto = quartos.find((q) => q.id === id);
    preencherFormularioEdicaoQuarto(quarto);
  }
}

listaQuartosDiv.addEventListener("click", lidarCliqueQuarto);

function preencherFormularioEdicaoQuarto(quarto) {
  document.getElementById("editar-numero").value = quarto.numero;
  document.getElementById("editar-categoria").value = quarto.categoria;
  document.getElementById("editar-status").value = quarto.status;
  document.getElementById("editar-id-quarto").value = quarto.id;
  document.getElementById("formulario-edicao-quarto").style.display = "block";
}

document
  .getElementById("btn-salvar-edicao-quarto")
  .addEventListener("click", async () => {
    const id = document.getElementById("editar-id-quarto").value;
    const numero = parseInt(document.getElementById("editar-numero").value);
    const categoria = document.getElementById("editar-categoria").value.trim();
    const status = document.getElementById("editar-status").value.trim();

    if (!numero || !categoria || !status) {
      alert("Preencha todos os campos!");
      return;
    }

    if (numero < 1 || numero > 50) {
      alert("Número do quarto deve ser entre 1 e 50.");
      return;
    }

    try {
      const ref = doc(db, "quartos", id);
      await updateDoc(ref, { numero, categoria, status: status || null });
      document.getElementById("formulario-edicao-quarto").style.display =
        "none";
      alert("Quarto editado com sucesso!");
    } catch (erro) {
      console.log("Erro ao editar quarto", erro);
    }
  });

document
  .getElementById("btn-cancelar-edicao-quarto")
  .addEventListener("click", () => {
    document.getElementById("formulario-edicao-quarto").style.display = "none";
  });
