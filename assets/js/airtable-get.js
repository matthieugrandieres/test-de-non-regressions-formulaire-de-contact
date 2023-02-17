/**
 * GET Datas
 */
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'pathQHsXpNDN4JtgB.0e80869ec90987a0483b542811680c3b219da90e62b292cbbbfe1045e0f26771'}).base('appGlizfVImuKWONS');


base('Clients - mails').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 10,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        // console.log('Retrieved', record.get('id'));
        console.log(record.fields.id);
        createLine(tableGetClients, record.fields.id);
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});



