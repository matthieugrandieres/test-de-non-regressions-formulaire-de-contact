let tableGetClients = document.querySelector('.table-get-clients tbody');

function createLine(table, data){
    let line = '<tr><th scope="row">' + data + '</th></tr>';
    table.appendChild(line);
}
