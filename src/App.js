import React, { useState, useEffect } from "react";
import RoupaForm from "./components/RoupaForm";
import RoupaTable from "./components/RoupaTable";
import { getRoupas, saveRoupas } from "./utils/localStorageUtils";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [roupas, setRoupas] = useState([]);
  const [roupaEditando, setRoupaEditando] = useState(null);

  useEffect(() => {
    setRoupas(getRoupas());
  }, []);

  const adicionarOuAtualizarRoupa = (roupa) => {
    let novasRoupas;
    if (roupa.id) {
      novasRoupas = roupas.map((r) => (r.id === roupa.id ? roupa : r));
    } else {
      roupa.id = uuidv4();
      novasRoupas = [...roupas, roupa];
    }
    setRoupas(novasRoupas);
    saveRoupas(novasRoupas);
    setRoupaEditando(null);
  };

  const excluirRoupa = (id) => {
    if (window.confirm("Deseja realmente excluir esta roupa?")) {
      const novas = roupas.filter((r) => r.id !== id);
      setRoupas(novas);
      saveRoupas(novas);
    }
  };

  return React.createElement("div", { className: "container py-4" }, [
    React.createElement("h2", {
      key: "title",
      style: { 
        fontFamily: "'Great Vibes', cursive" ,  
        color: "	#000080",  
        fontSize: "48px"
      }
    }, "VivaWear"),


    React.createElement(RoupaForm, {
      key: "form",
      onSubmit: adicionarOuAtualizarRoupa,
      roupaAtual: roupaEditando,
      roupas: roupas
    }),

    
    React.createElement(RoupaTable, {
      key: "table",
      roupas,
      onEdit: setRoupaEditando,
      onDelete: excluirRoupa
    })
  ]);
}

export default App;
