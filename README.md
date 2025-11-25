# Projeto de Busca de Perfil do GitHub

Este é um projeto para a web que utiliza a API do GitHub para buscar e exibir informações de perfil de um usuário, juntamente com seus repositórios públicos.

## 🚀 Funcionalidades

-   **Busca de Usuário**: Permite que você insira um nome de usuário do GitHub e busque por seu perfil.
-   **Exibição de Perfil**: Mostra informações detalhadas do usuário, como avatar, nome, bio, número de seguidores e de pessoas que segue.
-   **Lista de Repositórios**: Exibe os repositórios públicos do usuário, com links diretos para eles no GitHub.

## 🛠️ Tecnologias Utilizadas

-   **HTML5**: Para a estrutura da página.
-   **CSS3**: Para a estilização e design responsivo.
-   **JavaScript (ES6+)**: Para a lógica da aplicação, manipulação do DOM e requisições à API.
-   **GitHub API**: Para obter os dados dos usuários e seus repositórios.

## 📁 Estrutura de Arquivos

O projeto está organizado da seguinte forma para manter o código limpo e modular:

```
/
├── index.html               # Arquivo principal da estrutura HTML
└── src/
    ├── css/
    │   ├── reset.css        # Reset de estilos padrão do navegador
    │   └── styles.css       # Estilos principais da aplicação
    └── scripts/
        ├── index.js         # Ponto de entrada do JavaScript, orquestra as chamadas
        ├── variables.js     # Armazena variáveis globais ou seletores comuns
        ├── objects/
        │   ├── screen.js    # Objeto para manipular e renderizar dados na tela
        │   └── user.js      # Objeto para modelar e armazenar os dados do usuário
        └── services/
            ├── repositories.js # Serviço para buscar os repositórios na API do GitHub
            └── user.js         # Serviço para buscar os dados do usuário na API do GitHub
```

## 📖 Como Usar

1.  Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/projeto-fetch-github-api-1-0.git
    ```
2.  Abra o arquivo `index.html` em seu navegador de preferência.
3.  Digite um nome de usuário do GitHub no campo de busca e pressione o botão "Buscar" ou a tecla "Enter".
4.  As informações do perfil e os repositórios do usuário serão exibidos na tela.

---

Desenvolvido como parte do curso DevQuest 1.0