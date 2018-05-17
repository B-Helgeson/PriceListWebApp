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

function handleFileSelect(evt) {
var file = evt.target.files[0];
Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {
    importData = results;
    }
})
pushFiletoDB(importData)
}

function pushFiletoDB(data){
dataRef.ref("/import").push(importData)
}


$(document).ready(function(){

  $("#csv-file").change(handleFileSelect);
  // Initialize Firebase Setup

});