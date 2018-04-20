// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAl_sq9hDoSGak1DA4H05OrPCTjHoqvILQ",
    authDomain: "theatrical-c30ff.firebaseapp.com",
    databaseURL: "https://theatrical-c30ff.firebaseio.com",
    projectId: "theatrical-c30ff",
    storageBucket: "theatrical-c30ff.appspot.com",
    messagingSenderId: "95083594982"
  };
  firebase.initializeApp(config);

    var userEmail = document.getElementById('userEmail').innerText;
    console.log(userEmail);

    var ref = firebase.database().ref('images')
    ref.on('value', gotData, errData);

    function gotData(data) {
      var images = data.val();
      var keys = Object.keys(images);

      for (let i=0; i<keys.length; i++){
         var k = keys[i];
         var fileName = images[k].fileName;
         var email = images[k].email;
         console.log(fileName);
         console.log(email);
         if (email == userEmail){
           profilePic = document.getElementById('profilePic');
           var filePath = 'images/' + fileName;
           storedImage = firebase.storage().ref().child(filePath).getDownloadURL();
           console.log(storedImage)
           // for (x in storedImage){
           //   console.log(x, storedImage[x])
           // }
           storedImage.then(data => {
             profilePic.setAttribute("src", data)
           })
           // profilePic.setAttribute("src", storedImage)
         }
       }
    }

    function errData(err) {
      console.log('Error!');
      console.log(err);
    }
