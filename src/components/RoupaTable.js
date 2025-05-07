import React from "react";

function RoupaTable({ roupas, onEdit, onDelete }) {
  const tableRows = roupas.map((r, index) =>
    React.createElement("tr", { key: r.id || index }, [
      React.createElement("td", {}, r.nome),
      React.createElement("td", {}, r.tamanho.toUpperCase()),
      React.createElement("td", {}, r.cor),
      React.createElement("td", {}, `R$ ${r.preco}`),
      React.createElement("td", {}, [
        React.createElement("button", {
          key: "edit",
          className: "btn btn-outline-primary btn-sm me-2",
          onClick: () => onEdit(r),
          style: {
            borderRadius: "20px",
            fontWeight: "bold",
            fontSize: "14px"
          }
        }, "Editar"),
        React.createElement("button", {
          key: "delete",
          className: "btn btn-outline-danger btn-sm",
          onClick: () => onDelete(r.id),
          style: {
            borderRadius: "20px",
            fontWeight: "bold",
            fontSize: "14px"
          }
        }, "Excluir")
      ])
    ])
  );

  return React.createElement("div", {
    style: {
      backgroundColor: "rgba(167, 199, 231, 0.24)",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      marginTop: "30px"
    }
  }, [
    React.createElement("h3", {
      key: "title",
      className: "text-center mb-4",
      style: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "bold",
        color: "#191970",
        fontSize: "32px"
      }
    }, "Estoque de Roupas"),

    React.createElement("div", { className: "table-responsive" }, [
      React.createElement("table", {
        className: "table table-bordered table-hover",
        style: {
          borderRadius: "10px",
          overflow: "hidden"
        }
      }, [
        React.createElement("thead", {}, React.createElement("tr", {}, [
          React.createElement("th", { style: { color: "#191970" } }, "Nome"),
          React.createElement("th", { style: { color: "#191970" } }, "Tamanho"),
          React.createElement("th", { style: { color: "#191970" } }, "Cor"),
          React.createElement("th", { style: { color: "#191970" } }, "Preço"),
          React.createElement("th", { style: { color: "#191970" } }, "Gerenciar")
        ])),
        React.createElement("tbody", {}, roupas.length > 0 ? tableRows : (
          React.createElement("tr", {}, React.createElement("td", {
            colSpan: 5,
            className: "text-center text-muted"
          }, "Nenhuma roupa cadastrada.")))),
      ])
    ])
  ]);
}

export default RoupaTable;
