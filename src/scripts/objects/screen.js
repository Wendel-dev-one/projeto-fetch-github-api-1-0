const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
                                            <div class="data">
                                                <h1>${user.name ?? "Não possui nome cadastrado 😓"}</h1>
                                                <p>${user.bio ?? "Não possui bio cadastrado 😓"}</p>
                                                <br>
                                                <span>👥 Seguidores: ${user.followers}</span>
                                                <span>👥 Seguindo: ${user.following}</span>
                                            </div>
                                        </div>`

        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens +=
            `<li class="li-repo">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <div class="li-itens">
                    <span>🍴 ${repo.forks}</span>
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>👀 ${repo.watchers}</span>
                    <span>💻 ${repo.language}</span>
                </div>
            <li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventsItens = ""
        if (user.events.length > 0) {
            user.events.forEach(event => {
                const messageCreateEvent = "Sem mensagem de commit"
                const messagePushEvent = event.payload.commits ? event.payload.commits[0].message : messageCreateEvent

                if (event.type === "PushEvent") {
                    eventsItens += `<li><a href="https://github.com/${event.repo.name}">${event.repo.name}<span>: -${messagePushEvent}</span></a></li>`
                    
                } else if (event.type === "CreateEvent") {
                    eventsItens += `<li><a href="https://github.com/${event.repo.name}">${event.repo.name}<span>: -${messageCreateEvent}</span></a></li>`
                }
            })
        }

        this.userProfile.innerHTML += `<div class="events section">
                                        <h2>Eventos</h2>
                                        <ul>${eventsItens}</ul>
                                    </div>`





    },

    renderNotFound() {
        this.userProfile.innerHTML = `<div>
                                        <h2>Usuário não encontrado</h2>
                                    </div>`
    }
}
export { screen }