function updateView() {
    let html = `
    <div class="add-list-view">Add to your list!</div>
        <label >Choose a day:</label>
        <select value="${model.input.whatDayInput ?? ''}" oninput="model.input.whatDayInput = this.value">
        ${renderOptions()}
        </select>
    <input type="text" value="${model.input.listInputValue ?? ''}" oninput="model.input.listInputValue = this.value">
    <input type="time" value="${model.input.timeInputValue ?? ''}" onchange="model.input.timeInputValue= this.value">
    <button onclick="addItemToList()">Add item!</button>
    ${renderList() ?? ''}
    `
    document.getElementById('app').innerHTML = html;
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