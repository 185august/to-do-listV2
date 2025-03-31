function listView() {
    let html = `
    <div class="add-list-view">ToDos!</div>
        <label >Choose a day:</label>
        <select value="${model.input.whatDayInput ?? ''}" oninput="model.input.whatDayInput = this.value">
        ${renderOptions()}
        </select>
    Type what you need to do!<input type="text" value="${model.input.listInputValue ?? ''}" oninput="model.input.listInputValue = this.value">
    Choose the time it needs to be done!<input type="time" value="${model.input.timeInputValue ?? ''}" onchange="model.input.timeInputValue= this.value">
    <button onclick="addItemToList()">Todo!</button>
    ${renderList() ?? ''}
    `
    return html;
}

function renderList() {
    let listHtml = ''
    for (const day in model.data.days) {
        listHtml += `<div class="display-days">${day}: 
        ${model.data.days[day].map((item => `<div class="display-items">${item.time}: ${item.todo}</div> <button onclick="deleteItem('${day}', ${item.id})">X</button>`)).join(' ')}</div> 
        `

    }
    return listHtml;
}

function renderOptions() {
    let optionsHtml = '';
    for (day in model.data.days) {
        optionsHtml += ` <option value="${day}">${day}</option>
            `
    }
    return optionsHtml;
}