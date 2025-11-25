import { getUser } from "../scripts/services/user.js"
import { getRepositories } from "../scripts/services/repositories.js"

import { user } from "../scripts/objects/user.js"
import { screen } from "../scripts/objects/screen.js"

document.getElementById("btn-search").addEventListener("click", () => {
    const userName = document.getElementById("input-search").value

    if(validadeEmptyInput(userName))return
    getUserData(userName)
})


document.getElementById("input-search").addEventListener("keyup", (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    if (key === 13) {
        
        if(validadeEmptyInput(userName))return
        getUserData(userName)
    }
})

function validadeEmptyInput(userName){
    if (userName.length === 0) {
        alert("Por favor, insira um nome de usuário do GitHub")
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }


    const repositoriesResponse = await getRepositories(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    
    screen.renderUser(user)
}
