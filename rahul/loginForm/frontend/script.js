// async function action() {
//   var email = document.getElementById("email").value;
//   var pass = document.getElementById("pwd").value;
//   if (email === "" || pass === "") {
//     emptyFeilds.innerHTML = "Fill All the fields";
//   } else {
//     var ans = ValidateEmail(email, pass);
//   }
//   if (ans) {
//     try {
//       const data = { username: email, password: pass, portalName: "geoad" };
//       const response = await axios.post(
//         "http://localhost:4000/api/test/dataSend",
//         data
//       );

//       const result = await response;
//       let errorMessage = result.data.message.edesc;
//       var greetingElement = document.getElementById("greeting");
//       greetingElement.innerHTML = errorMessage;

//       if (result.data.message.status === 0) {
//         window.location.href = "./home.html";
//       } else {
//         console.log("Log-in Details in Invalid");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
// }
const action = async () => {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pwd").value;
  if (email === "" || pass === "") {
    emptyFeilds.innerHTML = "Fill All the fields";
  } else {
    var ans = ValidateEmail(email, pass);
  }
  if (ans) {
    try {
      const data = { username: email, password: pass, portalName: "geoad" };
      const response = await axios.post(
        "http://localhost:4000/api/test/dataSend",
        data
      );

      const result = await response;
      console.log("the result is : ", result);
      let errorMessage = result.data.message.edesc;
      var greetingElement = document.getElementById("greeting");
      greetingElement.innerHTML = errorMessage;

      // console.log(result);

      const firstName = result.data.message.response.agentInfo.firstName;
      const lastName = result.data.message.response.agentInfo.lastName;
      const fullName = `${firstName} ${lastName}`;

      const creditBalance = result.data.message.response.creditBalance;
      const jwtToken = result.data.message.response.refreshToken;
      const userPhoto = result.data.message.response.profile.photoUrl;
      console.log(creditBalance,"the user creditBalance");
      console.log(userPhoto,"the user photo url");
      

      const userData = {
        token: jwtToken,
        username: fullName,
        creditBalance: creditBalance,
        userPhotoUrl: userPhoto,
      };

      

      if (result.data.message.status === 0) {
        const userData = {
          token: jwtToken,
          username: fullName,
          creditBalance: creditBalance,
          userPhotoUrl: userPhoto,
        };

        sessionStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "./home.html";
      } else {
        console.log("Log-in Details in Invalid");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
};
function loadHeaderAndFooter() {
  // Load the header
  fetch("header.html")
    .then((response) => response.text())
    .then((content) => {
      document.getElementById("header-placeholder").innerHTML = content;
    })
    .catch((error) => {
      console.error("Error loading header:", error);
    });

  // Load the footer
  fetch("footer.html")
    .then((response) => response.text())
    .then((content) => {
      document.getElementById("footer-placeholder").innerHTML = content;
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
    });
}

// Call the function to load header and footer
loadHeaderAndFooter();
// function ValidateEmail(email, pass) {
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (email.match(mailformat)) {
//     return true;
//   } else {
//     console.log("Please fill up your correct e-mail");
//     var passErrorElement = document.getElementById("email_error");
//     passErrorElement.innerHTML = "Your Email is Incorrect";
//   }

//   if (pass.length < 4) {
//     console.log("Character should be more than 4");
//     var passErrorElement = document.getElementById("pass_error");
//     passErrorElement.innerHTML = "Character should be more than 4";
//   }

//   if (!/[A-Z]/.test(pass)) {
//     console.log("Character should be more than uppercase");
//     var passErrorElement = document.getElementById("pass_error");
//     passErrorElement.innerHTML = "Character should be more than uppercase";
//   }

//   if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
//     console.log("Character should be more than special");
//     var passErrorElement = document.getElementById("pass_error");
//     passErrorElement.innerHTML = "Character should be more than special";
//   }
// }
const ValidateEmail = (email, pass) => {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    return true;
  } else {
    console.log("Please fill up your correct e-mail");
    var passErrorElement = document.getElementById("email_error");
    passErrorElement.innerHTML = "Your Email is Incorrect";
  }

  if (pass.length < 4) {
    console.log("Character should be more than 4");
    var passErrorElement = document.getElementById("pass_error");
    passErrorElement.innerHTML = "Character should be more than 4";
  }

  if (!/[A-Z]/.test(pass)) {
    console.log("Character should be more than uppercase");
    var passErrorElement = document.getElementById("pass_error");
    passErrorElement.innerHTML = "Character should be more than uppercase";
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
    console.log("Character should be more than special");
    var passErrorElement = document.getElementById("pass_error");
    passErrorElement.innerHTML = "Character should be more than special";
  }
};

// function togglePasswordVisibility() {
//   var passwordInput = document.getElementById("pwd");

//   if (passwordInput.type == "password") {
//     passwordInput.type = "text";
//     document.getElementById("showButton").textContent = "Hide";
//   } else {
//     passwordInput.type = "password";
//     document.getElementById("showButton").textContent = "Show";
//   }
// }

const togglePasswordVisibility = () => {
  var passwordInput = document.getElementById("pwd");

  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    document.getElementById("showButton").textContent = "Hide";
  } else {
    passwordInput.type = "password";
    document.getElementById("showButton").textContent = "Show";
  }
};
