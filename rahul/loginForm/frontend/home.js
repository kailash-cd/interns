fetch("header.html")
  .then((response) => response.text())
  .then((content) => {
    document.getElementById("header-placeholder").innerHTML = content;
    updateHeaderWithUserData();
  })
  .catch((error) => {
    console.log("Error loading header:", error);
  });

function updateHeaderWithUserData() {
  let photoUrl;
  const storedData = sessionStorage.getItem("userData");
  const userData = JSON.parse(storedData);
  console.log("the user details get from the local storage : ", userData.userPhotoUrl.length);

  // Assuming you have a header element with an ID of "header-element" where you want to display the user data
  const headerElement = document.getElementById("header");
  const headerClass = document.getElementsByClassName("headercls");
  if (userData.userPhotoUrl.length == 0) {
    console.log(" user img is impty ")
    photoUrl = "./img/userdefault.png";
  }
  else {
    photoUrl = userData.userPhotoUrl;
  }
  if (storedData === null) {
    console.log("hi")
    window.location.href = "./index.html";
  }

  else {
    console.log("Please login again");
  }

  // Update the header content with the user data
  headerElement.innerHTML = `<div class="felxcls">
  <div>
        <img src=${photoUrl}></img>
  </div>
  <div>
        <p>Username: ${userData.username}</p>
        <p>Credit Balance: ${userData.creditBalance}</p>
  </div>
    </div>
        `





}

