function updateView() {
    let currentView = '';
    switch (model.app.currentPage) {
        case 'startPage':
            currentView = startPageView();
            break;
        case 'listView':
            currentView = listView();
            console.log(currentView)
            break;
    }
    let html = `
        <div id="header"
        </div>
            <div onmouseenter="headerDropDownView()">DropDown ${headerDropDownView() ?? ''}</div>
        <div id="content">
        ${currentView}
        </div>
        <div id="footer">
        </div>
    `
    document.getElementById('app').innerHTML = html;
}