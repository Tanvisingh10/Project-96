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

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
console.log("Room name - " + room_names);
row = "<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)'>@" + room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
      });});}  
getData();

function addroom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : " room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}


function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location = "index.html";
}