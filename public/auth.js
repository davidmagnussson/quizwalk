function clearInputFields() {
  document.getElementById("signUpEmail").value = "";
  document.getElementById("signUpUsername").value = "";
  document.getElementById("signUpPassword").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("user logged in: ", user);
    showStartScreen();
    setupUI(user);
  } else {
    showLoginScreen();
    // setupUI();
    console.log("user logged out");
  }
});

const signupButton = document.getElementById("register");
signupButton.addEventListener("click", function() {
  console.log("signig up!");

  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;
  const userName = document.getElementById("signUpUsername").value;
  const errorMessage = document.getElementById("signupError");

  //signup the user!
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
      clearInputFields();
    })
    .catch(err => {
      errorMessage.innerHTML = err.message;
    });
});

// login
const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", function() {
  //get user info
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("loginError");
  console.log(email, password);

  auth
    .signInWithEmailAndPassword(email, password)
    .then(cred => {
      console.log(cred);
      errorMessage.innerHTML = " ";
    })
    .then(() => {
      clearInputFields();
    })
    .catch(err => {
      errorMessage.innerHTML = err.message;
    });
});

//logout
const logout = document.getElementById("logout");
logout.addEventListener("click", function() {
  auth.signOut();
});
