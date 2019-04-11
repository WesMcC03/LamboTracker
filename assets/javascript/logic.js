var config = {
    apiKey: "AIzaSyBLudwMFxVNzoCnJ1l-EgLSRWWJdjWtJeQ",
    authDomain: "lambo-tracker.firebaseapp.com",
    databaseURL: "https://lambo-tracker.firebaseio.com",
    projectId: "lambo-tracker",
    storageBucket: "lambo-tracker.appspot.com",
    messagingSenderId: "658876360231"
  };
  
  firebase.initializeApp(config);

  var database = firebase.database()

  var lamboname = ""
  var dest = ""
  var exptime = ""
  var freq = ""


  $("#submitbutton").on("click", function() {

    var lamboname = $("#lamboname").val().trim();
    var dest = $("#destination").val().trim();
    var exptime = $("#vesseltime").val().trim();
    var freq = $("#frequency").val().trim();

    database.ref().push({
        modelname: lamboname,
        destination: dest,
        expectedtime: exptime,
        frequency: freq

    });
  
});

database().ref().on("value",function(snap){
    $("namedisplay").html(snap.val().lamboname);
    $("destdisplay").html(snap.val().dest);
    $("timedisplay").html(snap.val().exptime);
    $("freqdisplay").html(snap.val().freq);
})
  