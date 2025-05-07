Sobre o Projeto O foco do ModaFácil é a experiência do usuário, mesmo em dispositivos com telas pequenas. A interface apresenta uma tabela com os principais atributos das roupas: nome, tamanho, cor e preço. Além disso, permitindo ações diretas de edição e remoção, com apenas um clique.

Acesse o deploy da VivaWear

https://vivawear.netlify.app/

🚀 Funcionalidades Listagem de roupas com nome, tamanho, cor e preço Edição de roupas através de botão "Editar" Exclusão de roupas com botão "Excluir" Interface responsiva para diferentes tamanhos de tela Exibição de mensagem quando não há roupas cadastradas

🛠️ Tecnologias Utilizadas

Ferramenta Descrição React Biblioteca JavaScript para interfaces de usuário Bootstrap 5 Framework CSS para layout e responsividade JavaScript (sem JSX) Construção da UI com React.createElement

📂 Estrutura do Projeto pgsql Copiar Editar modafacil/ ├── src/ │ ├── components/ │ │ └── RoupaTable.js │ └── App.js ├── public/ │ └── index.html ├── package.json └── README.md

📱 Responsividade O componente da tabela está envolvido em uma div class="table-responsive", garantindo que o conteúdo possa ser rolado horizontalmente em telas pequenas, como celulares e tablets.

✨ Layout Cores suaves Tipografia moderna com Poppins Estilo arredondado nos botões Utilização de sombras e espaçamento para melhor legibilidade
