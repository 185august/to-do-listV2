function addItemToList() {
    const inp = model.input

    if (inp.listInputValue == null) return;

    for (const day in model.data.days) {
        if (day === model.input.whatDayInput) {
            model.data.days[day].push({ id: (model.data.days[day].length), todo: model.input.listInputValue, time: inp.timeInputValue })
        }
    }

    model.input.listInputValue = null;
    updateView();
}

function deleteItem(day, id) {
    model.data.days[day].splice(id, 1)
    for (let i = model.data.days[day].length - 1; i >= 0; i--) {
        model.data.days[day][i].id = i
    }
    updateView();
}