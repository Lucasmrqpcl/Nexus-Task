// Data no cabeçalho
document.getElementById('current-date').innerText = new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

function allowDrop(ev) { ev.preventDefault(); }

function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    const targetCol = ev.target.closest('.column').querySelector('.task-list');
    targetCol.appendChild(document.getElementById(data));
    saveAll();
}

function addTask() {
    const input = document.getElementById('taskInput');
    const priority = document.getElementById('priorityInput').value;
    
    if (input.value.trim() === "") return;

    createCard(input.value, priority, 'todo');
    input.value = "";
    saveAll();
}

function createCard(text, priority, columnId, cardId = null) {
    const id = cardId || "card-" + Date.now();
    const card = document.createElement('div');
    card.className = `card ${priority}`;
    card.id = id;
    card.draggable = true;
    card.ondragstart = drag;
    
    card.innerHTML = `
        <i class="fas fa-trash delete-btn" onclick="deleteCard('${id}')"></i>
        <div class="card-text">${text}</div>
        <small style="opacity:0.5; font-size:10px; text-transform:uppercase;">${priority}</small>
    `;

    document.getElementById(columnId).appendChild(card);
}

function deleteCard(id) {
    if(confirm("Deseja realmente excluir esta tarefa?")) {
        document.getElementById(id).remove();
        saveAll();
    }
}

function saveAll() {
    const columns = ['todo', 'doing', 'done'];
    const data = {};
    
    columns.forEach(col => {
        data[col] = Array.from(document.getElementById(col).children).map(card => ({
            text: card.querySelector('.card-text').innerText,
            priority: card.classList[1], // Pega a classe de prioridade
            id: card.id
        }));
    });
    localStorage.setItem('kanbanProData', JSON.stringify(data));
}

// Carregar dados
window.onload = () => {
    const saved = JSON.parse(localStorage.getItem('kanbanProData'));
    if (saved) {
        Object.keys(saved).forEach(col => {
            saved[col].forEach(task => createCard(task.text, task.priority, col, task.id));
        });
    }
};