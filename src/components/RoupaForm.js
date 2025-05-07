import React, { useState, useEffect } from "react";

function RoupaForm({ onSubmit, roupaAtual, roupas }) {
  const [formData, setFormData] = useState({ nome: "", tamanho: "", cor: "", preco: "" });
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (roupaAtual) {
      setFormData(roupaAtual);
      setErro("");
    }
  }, [roupaAtual]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    if (name === "preco" && value !== "" && !/^\d*\.?\d*$/.test(value)) {
      return; 
    }

    setFormData({ ...formData, [name]: value });
    setErro("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nome, tamanho, cor, preco } = formData;

    if (!nome || !tamanho || !cor || !preco) {
      setErro("Preencha todos os campos.");
      return;
    }

    // verificação se o campo cor tem apenas letras
if (!/^[A-Za-zÀ-ÿ\s]+$/.test(cor)) {
    setErro("O campo cor deve conter apenas letras.");
    return;
  }
  

    if (isNaN(parseFloat(preco))) {
      setErro("Preço deve ser um número válido.");
      return;
    }
    const tamanhosPermitidos = ["pp", "p", "m", "g", "gg", "xg", "xgg"];
    const ehNumero = !isNaN(tamanho);
    const ehCalca = nome.toLowerCase().includes("calça");
    
    // o tamanho da calça é identificada com numero 
    if (ehCalca) {
      if (!ehNumero) {
        setErro("Para calça, o tamanho deve ser um número");
        return;
      }
    } else {
      if (ehNumero || !tamanhosPermitidos.includes(tamanho.toLowerCase())) {
        setErro("Tamanho deve ser um dos seguintes: PP, P, M, G, GG, XG, XGG.");
        return;
      }
    }

    const duplicata = roupas.some(
      (r) =>
        r.tamanho.toLowerCase() === tamanho.toLowerCase() &&
        parseFloat(r.preco) === parseFloat(preco) &&
        r.id !== formData.id
    );

    if (duplicata) {
      setErro("Já existe uma roupa com esse tamanho e preço.");
      return;
    }

    onSubmit(formData);
    setFormData({ nome: "", tamanho: "", cor: "", preco: "" });
  };

  // Estilos reutilizáveis
  const inputStyle = {
    border: "3px solid #191970",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const buttonStyle = {
    backgroundColor: "rgba(25, 104, 183, 0.87)",
    padding: "10px 15px",
    borderRadius: "5px",
    fontWeight: "bold",
    color: "#191970",

  };

  const formStyle = {
    padding: "20px",
    backgroundColor: "rgba(167, 199, 231, 0.57)",
    borderRadius: "10px",
    border: "1px solid #ddd",
    boxShadow: "0 4px 8px rgba(47, 45, 45, 0.49)",
    marginBottom: "20px",
  };

  return React.createElement(
    "form",
    { onSubmit: handleSubmit, style: formStyle }, // Aplica o fundo rosa no form
    [
      erro &&
        React.createElement("div", { key: "erro", className: "alert alert-danger" }, erro),

      React.createElement("input", {
        key: "nome",
        className: "form-control mb-3",
        name: "nome",
        placeholder: "Nome da roupa",
        value: formData.nome,
        onChange: handleChange,
        required: true,
        style: inputStyle,
      }),
      React.createElement("input", {
        key: "tamanho",
        className: "form-control mb-3",
        name: "tamanho",
        placeholder: "Tamanho",
        value: formData.tamanho,
        onChange: handleChange,
        required: true,
        style: inputStyle,
      }),
      React.createElement("input", {
        key: "cor",
        className: "form-control mb-3",
        name: "cor",
        placeholder: "Cor",
        value: formData.cor,
        onChange: handleChange,
        required: true,
        style: inputStyle,
      }),
      React.createElement("input", {
        key: "preco",
        className: "form-control mb-3",
        name: "preco",
        placeholder: "Preço (ex: 49.90)",
        value: formData.preco,
        onChange: handleChange,
        required: true,
        style: inputStyle,
      }),

      React.createElement(
        "button",
        { key: "submit", className: "btn", type: "submit", style: buttonStyle },
        roupaAtual ? "Atualizar" : "Adicionar"
      ),
    ]
  );
}

export default RoupaForm;