var firebaseConfig = {
    apiKey: "AIzaSyDwK6uOYu__5kdBo37DVnLVhS4jsdA1lzk",
    authDomain: "let-s-chat-web-app-90bcf.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-90bcf-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-90bcf",
    storageBucket: "let-s-chat-web-app-90bcf.appspot.com",
    messagingSenderId: "978177728812",
    appId: "1:978177728812:web:1956a4f1fa8c71145d0c89"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name =  localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like:0   });
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
