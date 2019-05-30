// function that clears input fields
function clearInputFields() {
  document.getElementById("signUpEmail").value = "";
  document.getElementById("signUpUsername").value = "";
  document.getElementById("signUpPassword").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

// listen for auth status changes, ie if someone is logged in or logged out. The app then displays different views depending on it.
auth.onAuthStateChanged(user => {
  if (user) {
    // if a user is logged in
    console.log("user logged in: ", user);
    showStartScreen();
    setupUI(user);
  } else {
    // if a user is logged out
    showLoginScreen();
    console.log("user logged out");
  }
});

// adding an eventlistener for the register button.
const signupButton = document.getElementById("register");
signupButton.addEventListener("click", function() {
  console.log("signig up!");

  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;
  const userName = document.getElementById("signUpUsername").value;
  const errorMessage = document.getElementById("signupError");

  //signup the user with firebase!
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      return db
        .collection("users")
        .doc(cred.user.uid)
        .set({
          email: email,
          username: userName,
          scores: {
            history: 0,
            science: 0,
            sports: 0
          }
        });
    })
    .then(() => {
      clearInputFields(); //clearing the inputfields
    })
    .catch(err => {
      errorMessage.innerHTML = err.message; //displays an error message for the user if the creation failed
    });
});

// adding an eventlistener for the login button
const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("loginError");

  // signing the user in with email and password.
  auth
    .signInWithEmailAndPassword(email, password)
    .then(cred => {
      errorMessage.innerHTML = " ";
    })
    .then(() => {
      clearInputFields(); // clearing input fields
    })
    .catch(err => {
      errorMessage.innerHTML = err.message; // displays an error message for the user if the signin failed
    });
});

//adding an eventlistener for the logout button.
const logout = document.getElementById("logout");
logout.addEventListener("click", function() {
  auth.signOut(); //signing the user out!
  clearVariables(); // clearing local variables
});

document.getElementById("logout2").addEventListener("click", function() {
  auth.signOut(); //signing the user out!
  clearVariables(); //clearing local variables
});
