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

var fileName;
var file;


    //Image Upload
    var imageUpload = document.getElementById('js-image-upload');
    imageUpload.addEventListener('change', function(e){
      file = e.target.files[0];
      fileName = file.name;
      var storageRef = firebase.storage().ref('images/' + file.name);
      storageRef.put(file);
      console.log('image upload works')
    })

    //add info to database
    $('.js-form').on('submit', event => {
        const email = $('#registerEmail').val()
        console.log(email, fileName)
        firebase.database().ref('images').push({
                    email, fileName
        });
        console.log('good things are happening')
      });
