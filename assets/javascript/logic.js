  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAzmsAUWyVljQus0M82EnC0k1kbBDH6nFo",
    authDomain: "price-list-management.firebaseapp.com",
    databaseURL: "https://price-list-management.firebaseio.com",
    projectId: "price-list-management",
    storageBucket: "price-list-management.appspot.com",
    messagingSenderId: "446882281406"
};

firebase.initializeApp(config);

var dataRef = firebase.database();

var importData;

    // Parse CSV to JSON
    function handleFileSelect(evt) {
        var file = evt.target.files[0];
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: function(results) {
            importData = results;
            console.log(importData); // send imported csv console as a json
            dataRef.ref('/Import').set({importData}) // send imported csv to firebase database
            }
        })
    }

    // Un-Parse JSON back to CSV
    function handleFileDownload(evt) {
        var downloadData = evt.target.files[0];
        Papa.unparse(downloadData, {
            header: true,
            dynamicTyping: true,
            complete: function(results) {
            exportData = results;
            console.log(exportData); // send imported csv console as a json
            }
        })
    }

$(document).ready(function(){

    $("#csv-file").change(handleFileSelect);

    $("#delete").click(function(){
        dataRef.ref('/Import').remove();
    });

});