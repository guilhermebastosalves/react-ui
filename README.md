# 📋 Projeto de UI com React + Vite para Cadastro, Listagem e Edição de Dados

Este projeto consiste em uma interface web desenvolvida com **React** e **Vite**, cujo objetivo é permitir o cadastro, listagem e edição de informações a partir de uma mock API simulada com o **json-server**. A aplicação foi estruturada seguindo os princípios de uma Single Page Application (SPA), utilizando o **react-router-dom** para gerenciar as rotas entre as páginas de forma fluida e sem recarregamento do navegador.

O sistema oferece uma tela de listagem principal, onde os dados registrados na API são exibidos em forma de tabela. A partir dessa tela, o usuário pode navegar para uma página de cadastro, onde novos registros são inseridos por meio de um formulário simples. Cada registro também pode ser editado, redirecionando o usuário para uma interface semelhante à de cadastro, mas com os campos previamente preenchidos com os dados existentes. Após a edição, as alterações são enviadas para a API e refletidas na listagem. Além disso, o usuário pode deletar registros desejados.

A comunicação com a API mock é feita por requisições HTTP (GET, POST, PUT, DELETE) utilizando a função fetch, permitindo a simulação de um CRUD completo. Os dados são persistidos no arquivo db.json, que funciona como um banco de dados local para fins de desenvolvimento.

---
## 🧰 Tecnologias Utilizadas

- ⚛️ **React** 19.1.0
- ⚡ **Vite** 6.3.5
- 🧭 **react-router-dom** 7.6.2 (roteamento SPA)
- 🎨 **Bootstrap** 5.3.6 (estilização)
- 🗃️ **json-server** 1.0.0 (mock da API REST)


---
## 🗂 Estrutura de Pastas
├── public/<br>
├── src/<br>
│   ├── components/       &ensp;&ensp;# Páginas principais (Cadastro, Listagem, Edição)<br>
│   ├── App.jsx           &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;# Componente raiz com roteamento <br>
│   └── main.jsx          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;# Ponto de entrada da aplicação<br>
├── db.json               &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;# Arquivo de dados usado pelo json-server<br>
├── index.html            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;# Página HTML<br>
├── vite.config.js        &ensp;&ensp;&ensp;&ensp;# Configurações do Vite<br>
└── README.md <br>

---
## Como executar o projeto

```bash
# Clone o repositório
git clone https://github.com/guilhermebastosalves/react-ui

# Acesse o diretório
cd react-ui

# Instalar as dependências
npm install

# Inicie o json-server
npx json-server --watch db.json

# Inicie a aplicação React
npm run dev
```
---
## Autor
### Guilherme Bastos Alves
