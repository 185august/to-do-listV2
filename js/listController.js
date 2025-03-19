function addItemToList() {
    const inp = model.input
    console.log(inp.timeInputValue)
    if ((inp.listInputValue || inp.dateInputValue || inp.timeInputValue) === null) return;
    for (const day in model.data.days) {
        if (day === model.input.whatDayInput) {
            model.data.days[day].push({ todo: model.input.listInputValue, time: inp.timeInputValue })
        }
    }

    model.input.listInputValue = null;
    updateView();
}

function deleteItem() {

}