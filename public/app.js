// JavaScript code for the Arduino Beon example app.
// Application object.
var app = {};

model = new QuizModel();
const allQuestions = model.getAllQuestions();
const historyQuestions = allQuestions[0].history;
const scienceQuestions = allQuestions[0].science;
const sportsQuestions = allQuestions[0].sports;
const dialog = document.getElementById("my-alert-dialog");

let anwerQuestion1 = false;
let anwerQuestion2 = false;
let anwerQuestion3 = false;
let currentQuiz = "";

let answeredQuestions = [];
let results = 0;

function startQuiz(subject) {
  if (subject == "history") {
    loadInQuiz(historyQuestions);
  } else if (subject == "science") {
    loadInQuiz(scienceQuestions);
  } else {
    loadInQuiz(sportsQuestions);
  }

  currentQuiz = subject;
}

function enterGame() {
  // TODO: Fyll i, ska ankallas när man startar/trycker på en kategori och börjar spela!
}

function exitGame() {
  // TODO: Fyll i, ska ankallas när man trycker exit game. Poängen resettas och man kommer tillbaka till startgamescreen
  dialog.show();
}

function quizCompleted() {
  registerAnswer(results);
  document.getElementById("displayResult").innerHTML = results;
  showEndScreen();
  results = 0;
}

function correctAnswer() {
  results = results + 1;
  console.log(results);
}

function alertChoice(choice) {
  if (choice) {
    dialog.hide();
    answeredQuestions = [];
    showStartScreen();
  } else {
    dialog.hide();
  }
}

function loadInQuiz(questions) {
  const firstQuestion = questions[0];
  const secondQuestion = questions[1];
  const thirdQuestion = questions[2];
  let newElement = document.createElement("h2");

  // LOAD IN FIRST QUESTION -------------------------------
  let alternatives = firstQuestion.alternatives;

  let question1 = document.getElementById("question1");
  let alt1 = document.getElementById("question1alt1");
  let alt2 = document.getElementById("question1alt2");
  let alt3 = document.getElementById("question1alt3");
  let alt4 = document.getElementById("question1alt4");

  let alt1div = document.getElementById("q1a1");
  let alt2div = document.getElementById("q1a2");
  let alt3div = document.getElementById("q1a3");
  let alt4div = document.getElementById("q1a4");

  question1.innerHTML = firstQuestion.question;
  alt1.innerHTML = alternatives.one.alt;
  alt2.innerHTML = alternatives.two.alt;
  alt3.innerHTML = alternatives.three.alt;
  alt4.innerHTML = alternatives.four.alt;

  // Remove previous classes
  alt1div.classList.remove("wrong", "right");
  alt2div.classList.remove("wrong", "right");
  alt3div.classList.remove("wrong", "right");
  alt4div.classList.remove("wrong", "right");

  // Add right or wrong answer
  alt1div.classList.add(alternatives.one.answer);
  alt2div.classList.add(alternatives.two.answer);
  alt3div.classList.add(alternatives.three.answer);
  alt4div.classList.add(alternatives.four.answer);

  // LOAD IN SECOND QUESTION -----------------------------
  alternatives = secondQuestion.alternatives;

  let question2 = document.getElementById("question2");
  alt1 = document.getElementById("question2alt1");
  alt2 = document.getElementById("question2alt2");
  alt3 = document.getElementById("question2alt3");
  alt4 = document.getElementById("question2alt4");

  alt1div = document.getElementById("q2a1");
  alt2div = document.getElementById("q2a2");
  alt3div = document.getElementById("q2a3");
  alt4div = document.getElementById("q2a4");

  question2.innerHTML = secondQuestion.question;
  alt1.innerHTML = alternatives.one.alt;
  alt2.innerHTML = alternatives.two.alt;
  alt3.innerHTML = alternatives.three.alt;
  alt4.innerHTML = alternatives.four.alt;

  // Remove previous classes
  alt1div.classList.remove("wrong", "right");
  alt2div.classList.remove("wrong", "right");
  alt3div.classList.remove("wrong", "right");
  alt4div.classList.remove("wrong", "right");

  // Add right or wrong answer
  alt1div.classList.add(alternatives.one.answer);
  alt2div.classList.add(alternatives.two.answer);
  alt3div.classList.add(alternatives.three.answer);
  alt4div.classList.add(alternatives.four.answer);

  // LOAD IN THIRD QUESTION --------------------------
  alternatives = thirdQuestion.alternatives;

  let question3 = document.getElementById("question3");
  alt1 = document.getElementById("question3alt1");
  alt2 = document.getElementById("question3alt2");
  alt3 = document.getElementById("question3alt3");
  alt4 = document.getElementById("question3alt4");

  alt1div = document.getElementById("q3a1");
  alt2div = document.getElementById("q3a2");
  alt3div = document.getElementById("q3a3");
  alt4div = document.getElementById("q3a4");

  question3.innerHTML = thirdQuestion.question;
  alt1.innerHTML = alternatives.one.alt;
  alt2.innerHTML = alternatives.two.alt;
  alt3.innerHTML = alternatives.three.alt;
  alt4.innerHTML = alternatives.four.alt;

  // Remove previous classes
  alt1div.classList.remove("wrong", "right");
  alt2div.classList.remove("wrong", "right");
  alt3div.classList.remove("wrong", "right");
  alt4div.classList.remove("wrong", "right");

  // Add right or wrong answer
  alt1div.classList.add(alternatives.one.answer);
  alt2div.classList.add(alternatives.two.answer);
  alt3div.classList.add(alternatives.three.answer);
  alt4div.classList.add(alternatives.four.answer);
}

function showEndScreen() {
  $("#login").hide();
  $("#startpage").hide();
  $("#game").hide();
  $("#navbar").hide();
  $("#about").hide();
  $("#map").hide();
  $("#profile").hide();
  $("#header").hide();
  $("#header2").show();
  $("#signUp").hide();
  $("#endQuiz").show();
}

function showLoginScreen() {
  $("#login").show();
  $("#startpage").hide();
  $("#game").hide();
  $("#navbar").hide();
  $("#about").hide();
  $("#map").hide();
  $("#profile").hide();
  $("#header").hide();
  $("#header2").show();
  $("#signUp").hide();
}

function showSignUpScreen() {
  $("#login").hide();
  $("#startpage").hide();
  $("#game").hide();
  $("#navbar").hide();
  $("#about").hide();
  $("#map").hide();
  $("#profile").hide();
  $("#header").hide();
  $("#header2").show();
  $("#signUp").show();
}

function showStartScreen() {
  $("#startpage").show();
  $("#signUp").hide();
  $("#login").hide();
  $("#game").hide();
  $("#profile").hide();
  $("#header").hide();
  $("#navbar").hide();
  $("#header2").show();
  $("#map").hide();
}

function showGameScreen() {
  $("#startpage").hide();
  $("#game").show();
  $("#map").hide();
  $("#profile").hide();
  $("#navbar").show();
  $("#header").show();
  $("#header2").hide();
}

function showAboutScreen() {
  $("#startpage").hide();
  $("#login").hide();
  $("#game").hide();
  $("#navbar").hide();
  $("#about").show();
  $("#profile").hide();
  $("#navbar").hide();
  $("#header").hide();
}
function showMapScreen() {
  $("#map").show();
  $("#game").hide();
  $("#startpage").hide();
  $("#profile").hide();
  $("#navbar").show();
  $("#header").show();
  $("#header2").hide();
}

function showProfileScreen() {
  $("#map").hide();
  $("#game").hide();
  $("#startpage").hide();
  $("#profile").show();
  $("#navbar").show();
  $("#header").show();
  $("#header2").hide();
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    // center: {lat: 59.3498092, lng: 18.0684758},
    center: { lat: 59.3484377325508, lng: 18.07180214068103 },
    zoom: 16,
    mapTypeId: "hybrid", // terrain, satellite, roadmap, hybrid
    disableDefaultUI: true, // Tar bort kontroller för att zoom osv!
    tilt: 45, // Sätter en vinkel på vyn
    heading: 180 // Infallsvinkeln sätts till 9
  });

  var infomarker1 = new google.maps.InfoWindow({
    content: "This beacon is located at Borggården"
  });

  var marker1 = new google.maps.Marker({
    position: { lat: 59.34738170626336, lng: 18.073741370144717 },
    map: map
  });
  marker1.addListener("click", function () {
    infomarker1.open(map, marker1);
  });

  var infomarker2 = new google.maps.InfoWindow({
    content: "This beacon is located at Nymble"
  });

  var marker2 = new google.maps.Marker({
    position: { lat: 59.34739947036459, lng: 18.07094813798676 },
    map: map
  });
  marker2.addListener("click", function () {
    infomarker2.open(map, marker2);
  });

  var infomarker3 = new google.maps.InfoWindow({
    content: "This beacon is located at Teknikringen"
  });

  var marker3 = new google.maps.Marker({
    position: { lat: 59.349341228486146, lng: 18.071291460740667 },
    map: map
  });

  marker3.addListener("click", function () {
    infomarker3.open(map, marker3);
  });

  //infoWindow = new google.maps.InfoWindow;

  // Finding my locations  DOESN'T WORK BECAUSE OF SECURE ORIGIN FAILURE
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(success => {
  //       console.log("success");

  //     }, failure => {
  //       if (failure.message.startsWith("Only secure origins are allowed")) {
  //         console.log("failure");
  //       } else {
  //         console.log(failure.message);
  //       }
  //     });
  //   } else {
  //     // Browser doesn't support Geolocation
  //     handleLocationError(false, infoWindow, map.getCenter());
  //   }
  // }

  // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //   infoWindow.setPosition(pos);
  //   infoWindow.setContent(browserHasGeolocation ?
  //     'Error: The Geolocation service failed.' :
  //     'Error: Your browser doesn\'t support geolocation.');
  //   infoWindow.open(map);
  // }
}

// Regions that define which pa to show for each beacon.
app.beaconRegions = [
  {
    id: "firstQuestion",
    uuid: "b9407f30-f5f8-466e-aff9-25556b57fe6d",
    major: 56506,
    minor: 14941
  },
  {
    id: "secondQuestion",
    uuid: "b9407f30-f5f8-466e-aff9-25556b57fe6d",
    major: 57272,
    minor: 20467
  },
  {
    id: "thirdQuestion",
    uuid: "b9407f30-f5f8-466e-aff9-25556b57fe6d",
    major: 22460,
    minor: 60720
  }
];

// Currently displayed page.
app.currentPage = "page-default";

app.initialize = function () {
  document.addEventListener("deviceready", app.onDeviceReady, false);
  app.gotoPage(app.currentPage);
};

// Called when Cordova are plugins initialised,
// the iBeacon API is now available.
app.onDeviceReady = function () {
  // Specify a shortcut for the location manager that
  // has the iBeacon functions.
  window.locationManager = cordova.plugins.locationManager;

  // Start tracking beacons!
  app.startScanForBeacons();
};

app.startScanForBeacons = function () {
  //console.log('startScanForBeacons')

  // The delegate object contains iBeacon callback functions.
  var delegate = new cordova.plugins.locationManager.Delegate();

  delegate.didDetermineStateForRegion = function (pluginResult) {
    //console.log('didDetermineStateForRegion: ' + JSON.stringify(pluginResult))
  };

  delegate.didStartMonitoringForRegion = function (pluginResult) {
    //console.log('didStartMonitoringForRegion:' + JSON.stringify(pluginResult))
  };

  delegate.didRangeBeaconsInRegion = function (pluginResult) {
    //console.log('didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult))
    app.didRangeBeaconsInRegion(pluginResult);
  };

  // Set the delegate object to use.
  locationManager.setDelegate(delegate);

  // Start monitoring and ranging our beacons.
  for (var r in app.beaconRegions) {
    var region = app.beaconRegions[r];

    var beaconRegion = new locationManager.BeaconRegion(
      region.id,
      region.uuid,
      region.major,
      region.minor
    );

    // Start monitoring.
    locationManager
      .startMonitoringForRegion(beaconRegion)
      .fail(console.error)
      .done();

    // Start ranging.
    locationManager
      .startRangingBeaconsInRegion(beaconRegion)
      .fail(console.error)
      .done();
  }
};

// Display pages depending of which beacon is close.
app.didRangeBeaconsInRegion = function (pluginResult) {
  //console.log('numbeacons in region: ' + pluginResult.beacons.length)

  // There must be a beacon within range.
  if (0 == pluginResult.beacons.length) {
    return;
  }

  // Our regions are defined so that there is one beacon per region.
  // Get the first (and only) beacon in range in the region.
  var beacon = pluginResult.beacons[0];

  // The region identifier is the page id.
  var pageId = pluginResult.region.identifier;

  // console.log("ranged beacon: " + pageId + "" + beacon.major);

  // If the beacon is close and represents a new page, then show the page.
  if (
    beacon.proximity == "ProximityImmediate" &&
    app.currentPage == "page-default"
  ) {
    app.gotoPage(pageId);
    return;
  }

  // If the beacon represents the current page but is far away,
  if (
    (beacon.proximity == "ProximityFar" ||
      beacon.proximity == "ProximityNear") &&
    (app.currentPage == pageId || app.currentPage == "alreadyAnswered")
  ) {
    app.gotoPage("page-default");
    return;
  }
};

app.gotoPage = function (pageId) {
  let check_if_answered = answeredQuestions.includes(pageId);
  console.log(pageId);

  if (check_if_answered) {
    show = "alreadyAnswered";
    app.hidePage(app.currentPage);
    app.showPage(show);
    app.currentPage = show;
  } else {
    app.hidePage(app.currentPage);
    app.showPage(pageId);
    app.currentPage = pageId;
  }
};

app.showPage = function (pageId) {
  document.getElementById(pageId).style.display = "block";
  $(".questions").css("color", "black");
  $(".questions").css("background-color", "white");
  $(".questions").css("font-weight", "normal");

  if (pageId == "page-default") {
    // Listener to check if answered all questions
    if (
      answeredQuestions.includes("firstQuestion") &&
      answeredQuestions.includes("secondQuestion") &&
      answeredQuestions.includes("thirdQuestion")
    ) {
      quizCompleted();
    }
  }
};

app.hidePage = function (pageId) {
  document.getElementById(pageId).style.display = "none";
};

// Set up the application.

app.initialize();
showLoginScreen();
// initMap();

// Listeners for all buttons/events
document.getElementById("historyQuiz").addEventListener("click", function () {
  startQuiz("history");
  showGameScreen();
});
document.getElementById("scienceQuiz").addEventListener("click", function () {
  startQuiz("science");
  showGameScreen();
});
document.getElementById("sportsQuiz").addEventListener("click", function () {
  startQuiz("sports");
  showGameScreen();
});

// document.getElementById('aboutButton').addEventListener("click", function () {
//   showAboutScreen();
// });

document.getElementById("aboutBack").addEventListener("click", function () {
  showLoginScreen();
});

document.getElementById("navMap").addEventListener("click", function () {
  showMapScreen();
});

document.getElementById("navQuiz").addEventListener("click", function () {
  showGameScreen();
});

document.getElementById("navProfile").addEventListener("click", function () {
  showProfileScreen();
});

document.getElementById("exitGame").addEventListener("click", function () {
  exitGame();
});

document.getElementById("signUpButton").addEventListener("click", function () {
  showSignUpScreen();
});

document.getElementById("backToLogin").addEventListener("click", function () {
  showLoginScreen();
});

document.getElementById("newQuiz").addEventListener("click", function () {
  showStartScreen();
});

const userName = document.getElementById("displayUser");
const score = document.getElementById("displayScore");

function setupUI(user) {
  if (user) {
    //display the users score
    db.collection("users")
      .doc(user.uid)
      .get()
      .then(doc => {
        const scoreHtml = `<li class="list-group-item">history: ${
          doc.data().scores.history
          }</li>
        <li class="list-group-item">science: ${doc.data().scores.science}</li>
        <li class="list-group-item">sports: ${doc.data().scores.sports}</li>`;
        score.innerHTML = scoreHtml;

        //display account info
        const nameHtml = `<span>Logged in as: ${doc.data().username}</span>
        `;
        userName.innerHTML = nameHtml;
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    //hide account infos
    userName.innerHTML = "";
  }
}

// document.getElementById("testAdd").addEventListener("click", registerAnswer);

function registerAnswer(result) {
  let uid = auth.currentUser.uid;
  let scores = 0;
  let oldCurrency = 0;

  if (currentQuiz == "history") {
    db.collection("users")
      .doc(uid)
      .get()
      .then(doc => {
        oldCurrency = doc.data().scores.history;
      })
      .then(() => {
        db.collection("users")
          .doc(uid)
          .update({
            "scores.history": result + oldCurrency
          });
      });
  } else if (currentQuiz == "science") {
    db.collection("users")
      .doc(uid)
      .get()
      .then(doc => {
        oldCurrency = doc.data().scores.science;
      })
      .then(() => {
        db.collection("users")
          .doc(uid)
          .update({
            "scores.science": result + oldCurrency
          });
      });
  } else {
    db.collection("users")
      .doc(uid)
      .get()
      .then(doc => {
        oldCurrency = doc.data().scores.sports;
      })
      .then(() => {
        db.collection("users")
          .doc(uid)
          .update({
            "scores.sports": result + oldCurrency
          });
      });
  }
}
