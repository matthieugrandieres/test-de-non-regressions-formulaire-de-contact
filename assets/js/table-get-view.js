let tableClients = document.querySelector('.table-get-clients tbody');
let nextButton = document.querySelector('.pagination-table-get-clients .button-next');
let previousButton = document.querySelector('.pagination-table-get-clients .button-previous');

function createLine(table, id, name, url, sendingDate){
    table.innerHTML +=
    "<tr>" + 
    "<th scope='row'>" + id + "</th>" +
    "<td>" + name + "</td>" + 
    "<td>" + url + "</td>" +
    styleDate(sendingDate) +
    "<td class='actions-icon'><i class='bi bi-plus-circle'></i></td>" +
    "</tr>";
}


function styleDate(sendingDate){
    if (sendingDate != undefined){
        return "<td><span class='badge text-bg-success'>" + sendingDate + "</span></td>" ;
    } else {
        return "<td><span class='badge text-bg-success'></span></td>" ;
    }
}

