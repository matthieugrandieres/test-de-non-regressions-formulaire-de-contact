/**
 * GET Datas
 */ 
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'pathQHsXpNDN4JtgB.0e80869ec90987a0483b542811680c3b219da90e62b292cbbbfe1045e0f26771'}).base('appGlizfVImuKWONS');
let arrayGetClients = [];
let snipper = document.querySelector('.spinner-border')

base('Clients - mails').select({
    maxRecords: 400,
    //pageSize: 10,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {

    records.forEach(function(record) {
        arrayGetClients.push(record);
    });

    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

let min = 0;
let max = 10;

let timeStart= setInterval(() => {
    console.log('interval');
    console.log(arrayGetClients)
    if (arrayGetClients.length > 0) {
        clearInterval(timeStart);
        for (let i = min; i < max; i++) {
            createLine(tableClients, 
                arrayGetClients[i].fields['id'], 
                arrayGetClients[i].fields['entreprise'], 
                arrayGetClients[i].fields['Site url'],
                arrayGetClients[i].fields['Envoi mail test']);
        } 
        snipper.style.display = "none";
    }
}, 500);

nextButton.addEventListener('click', () => {
    min += 10;
    max += 10;
    if (max >= arrayGetClients.length){
        max = arrayGetClients.length;
        min = arrayGetClients.length - 10;
    }
    previousButton.classList.remove('button-disabled');
    tableClients.innerHTML = "";
    for (let i = min; i < max; i++) {
        createLine(tableClients, 
            arrayGetClients[i].fields['id'], 
            arrayGetClients[i].fields['entreprise'], 
            arrayGetClients[i].fields['Site url'],
            arrayGetClients[i].fields['Envoi mail test']);
    } 
})

previousButton.addEventListener('click', () => {
    min -= 10;
    max -= 10;
    if (min <= 0){
        min = 0;
        max = 10;
        previousButton.classList.add('button-disabled');
    }
    tableClients.innerHTML = "";
    for (let i = min; i < max; i++) {
        createLine(tableClients, 
            arrayGetClients[i].fields['id'], 
            arrayGetClients[i].fields['entreprise'], 
            arrayGetClients[i].fields['Site url'],
            arrayGetClients[i].fields['Envoi mail test']);
    } 
})










