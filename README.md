---

````markdown
# 📌 Projeto API Usuários + Frontend Angular

Este projeto é composto por:
- **Backend (Node.js + Express)** → uma API REST para gerenciar usuários.
- **Frontend (Angular + Angular Material)** → uma interface moderna para consumir a API.

---

## ⚙️ Tecnologias utilizadas
- **Node.js** (v22+)
- **Express**
- **Angular 20**
- **Angular Material**
- **RxJS**
- **TypeScript**

---

## 🚀 Como rodar o projeto

### 🔹 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/api-usuarios.git
cd api-usuarios
````

---

### 🔹 2. Rodar o Backend

1. Entrar na pasta do backend:

   ```bash
   cd api-usuarios
   ```
2. Instalar dependências:

   ```bash
   npm install
   ```
3. Rodar servidor:

   ```bash
   npm start
   ```

👉 O backend ficará disponível em:
**[http://localhost:3333](http://localhost:3333)**

Se quiser ver a documentação **Swagger**:
**[http://localhost:3333/docs](http://localhost:3333/docs)**

---

### 🔹 3. Rodar o Frontend

1. Entrar na pasta do frontend:

   ```bash
   cd api-usuarios-frontend
   ```
2. Instalar dependências:

   ```bash
   npm install
   ```
3. Rodar aplicação:

   ```bash
   ng serve
   ```

👉 O frontend ficará disponível em:
**[http://localhost:4200](http://localhost:4200)**

---

## 📂 Estrutura do Projeto

```
api-usuarios/             # Backend (Node + Express)
 ├── src/
 │   ├── server.js        # Configuração principal do servidor
 │   ├── routes/usuarios  # Rotas da API
 │   └── data/users.json  # Base de dados local (mock)
 │
api-usuarios-frontend/    # Frontend (Angular + Material)
 ├── src/app/
 │   ├── components/      # Componentes (formulário, lista, etc.)
 │   ├── services/        # Serviços (consumo da API)
 │   └── app.routes.ts    # Rotas da aplicação
```

---

## 📌 Funcionalidades

✔️ Listar usuários
✔️ Criar usuário
✔️ Editar usuário
✔️ Remover usuário
✔️ Validação de formulário
✔️ UI responsiva com Angular Material

---

## 👨‍💻 Autor

Projeto desenvolvido por **Vagner** 🚀
