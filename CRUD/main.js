const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
    clearFields()
}

const getLocalStore = () => JSON.parse(localStorage.getItem("db_client"))||[]
const setLocalStore = (dbclient) => localStorage.setItem("db_client",JSON.stringify(dbclient))

//CRUD

//CRUD DELETE
const deleteClient = (index) => {
    const dbclient = readClient()
    dbclient.splice(index,1)
    setLocalStore(dbclient)
}

//CRUD UPDATE
const updateClient = (index, client) => {
    const dbclient = readClient()
    dbclient[index] = client
    setLocalStore(dbclient)
}

//CRUD READ
const readClient = () => {
    return getLocalStore();
}

//CRUD CREATE
const createClient = (client) =>{
    const dbclient = getLocalStore()
    dbclient.push(client)
    setLocalStore(dbclient)
}

const isValidfields = () => {
    return document.getElementById('form').reportValidity();
}

// interaçao com usuario 

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
    document.querySelector(".modal-header>h2").textContent  = 'Novo Cliente'
}

const saveClient = () => {
    if (isValidfields()) {
        const client = {
            nome: document.getElementById('nome').value,
            data: document.getElementById('data').value,
            montante: document.getElementById('montante').value,
            parcelas: document.getElementById('parcelas').value,
            meses: document.getElementById('meses').value
        }
        const index = document.getElementById('nome').dataset.index
        if(index == 'new'){
            createClient(client)
            updateTable()
            closeModal()
        }else{
            updateClient(index,client)
            updateTable()
            closeModal()
        }
    }
}

const createRow = (client,index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.data}</td>
        <td>R$ ${client.montante}</td>
        <td>${client.meses}/${client.parcelas}</td>
        <td>     
            <input type="checkbox" id="minha_checkbox" name="minha_checkbox" value="valor_da_caixa">
        </td>
        <td>
            <button type="button" id="edit-${index}" class="button green">editar</button>
            <button type="button" id="delete-${index}" class="button red">excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = () => {
    const tabel = document.querySelectorAll('#tableClient>tbody tr')
    tabel.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}

const fillFieds = (client) =>{
    document.getElementById('nome').value = client.nome
    document.getElementById('data').value = client.data
    document.getElementById('montante').value = client.montante
    document.getElementById('parcelas').value = client.parcelas
    document.getElementById('meses').value = client.meses
    document.getElementById('nome').dataset.index = client.index
}

const editClient = (index) =>{
    const client = readClient()[index]
    client.index = index
    fillFieds(client)
    document.querySelector(".modal-header>h2").textContent  = `Editando ${client.nome}`
    openModal()
    
}

const editDelete = (event) => {
    if(event.target.type == 'button'){
        const [action,index] = event.target.id.split("-")
        
        if(action == "edit"){
            editClient(index)
        }else{
            const client = readClient()[index]
            const response = confirm(`deseja excluir o cliente: ${client.nome}`)
            if(response){
                deleteClient(index)
                updateTable()
            }
            
        }
    }
}

updateTable()

// EVENTOS
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('save')
    .addEventListener('click',saveClient)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)

    