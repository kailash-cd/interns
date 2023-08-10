document.addEventListener('DOMContentLoaded', () => {
fetch("header.html")
  .then((response) => response.text())
  .then((content) => {
    document.getElementById("headerplaceholder").innerHTML = content;
    updateHeaderWithUserData();
  })
  .catch((error) => {
    console.log("Error loading header:", error);
  });
})  
function updateHeaderWithUserData() {
  const storedData = sessionStorage.getItem("userData");
  if (storedData === null) {
    console.log("User data not found. Redirecting to login.");
    window.location.href = "./index.html";
    return; // Exit the function early to prevent further execution
  }

  const userData = JSON.parse(storedData);
  const headerElement = document.getElementById("header");

  let photoUrl = userData.userPhotoUrl.length === 0 ? "./img/userdefault.png" : userData.userPhotoUrl;

  headerElement.innerHTML = `
    <div class="felxcls">
      <div>
        <img src="${photoUrl}" alt="User Photo">
      </div>
      <div>
        <p>Username: ${userData.username}</p>
        <p>Credit Balance: ${userData.creditBalance}</p>
      </div>
    </div>`;
}

// Call the updateHeaderWithUserData function directly after the fetch block
updateHeaderWithUserData();
