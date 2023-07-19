document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the values from the input fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    $.ajax({
      //Yeh hai woh api jisko  humko call krna hai toh isko hum yha likh denge
      url:"http://54.225.122.8:7000/bh/login/v1" ,
      // Fir humko batana hai ki methoda ya fir humari api me  humko store krwan hai ya fir usme se data nikalna hai. Toh POST me hum data server per send krte hai, 
      method:"POST",
      // Data me hum data pass krte hai dictionary form me 
      data:{
        "username":username,
        "password":password,
        "appname":"GeoAd",
        "portalName":"geoad"
      },
      //Jab humko kuch extra batana hota hai ki server per hum ksa data send kr rhe hai ya fir koi token send krna hota tab use krte hai
      headers:{
        "Content-Type":"application/json"
      },
      success:function(e){  
        console.log(e)
      },
      error:function(e){
        console.log(e)
      }

    })

    // Perform validation
    if (username === "ishwardeep@chalkdigital.com" && password === 'aV12_789') {
      alert('Login successful!');
      // Add your logic to redirect or perform other actions after successful login
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });