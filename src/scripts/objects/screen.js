// Mensagens padrão de exibição
const messages = {
    noName: 'Não possui nome cadastrado 😓',
    noBio: 'Não possui bio cadastrado 😓',
    noCommit: 'Sem mensagem de commit',
    userNotFound: 'Usuário não encontrado',
    repositories: 'Repositórios',
    events: 'Eventos',
};


const screen = {
    userProfile: document.querySelector('.profile-data'),
    // Exibe as informações do usuário
    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class="info">
                <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
                <div class="data">
                    <h1>${user.name ?? messages.noName}</h1>
                    <p>${user.bio ?? messages.noBio}</p>
                    <br>
                    <span>👥 Seguidores: ${user.followers}</span>
                    <span>👥 Seguindo: ${user.following}</span>
                </div>
            </div>
        `;

        // Exibe os repositórios do usuário
        if (user.repositories.length > 0) {
            const repositoriesItens = user.repositories.map(repo => `
                <li class="li-repo">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    <div class="li-itens">
                        <span>🍴 ${repo.forks}</span>
                        <span>⭐ ${repo.stargazers_count}</span>
                        <span>👀 ${repo.watchers}</span>
                        <span>💻 ${repo.language}</span>
                    </div>
                </li>
            `).join('');
            this.userProfile.innerHTML += `
                <div class="repositories section">
                    <h2>${messages.repositories}</h2>
                    <ul>${repositoriesItens}</ul>
                </div>
            `;
        }

        // Exibe os eventos do usuário
        if (user.events.length > 0) {
            const eventsItens = user.events.map(event => {
                const messagePushEvent = event.payload?.commits?.[0]?.message || messages.noCommit;
                if (event.type === 'PushEvent') {
                    return `<li><a href="https://github.com/${event.repo.name}">${event.repo.name}<span>: &#8594; ${messagePushEvent}</span></a></li>`;
                } else if (event.type === 'CreateEvent') {
                    return `<li><a href="https://github.com/${event.repo.name}">${event.repo.name}<span>: &#8594; ${messages.noCommit}</span></a></li>`;
                }
                return '';
            }).join('');
            this.userProfile.innerHTML += `
                <div class="events section">
                    <h2>${messages.events}</h2>
                    <ul>${eventsItens}</ul>
                </div>
            `;
        }
    },

    // Exibe mensagem de usuário não encontrado
    renderNotFound() {
        this.userProfile.innerHTML = `
            <div>
                <h2>${messages.userNotFound}</h2>
            </div>
        `;
    }
};

export { screen };