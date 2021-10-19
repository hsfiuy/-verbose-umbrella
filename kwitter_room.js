const firebaseConfig = {
      apiKey: "AIzaSyDeFZV2HtjhWqNltjpt7LuF4ls8MqaT6A8",
      authDomain: "okokoko-1feef.firebaseapp.com",
      databaseURL: "https://okokoko-1feef-default-rtdb.firebaseio.com",
      projectId: "okokoko-1feef",
      storageBucket: "okokoko-1feef.appspot.com",
      messagingSenderId: "616408556276",
      appId: "1:616408556276:web:6882500a1029a5fb9434a1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

// user_name=localStorage.getItem("user_name");
// document.getElementById("user_name").innerHTML= "Welcome, " + user_name + "!";

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'># " + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
