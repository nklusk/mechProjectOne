// receives osc messages from chataigne websocket;
// micro sends osc messages to chataigne websocket;
// chataigne maps osc to this code; 
// this code converts decimal to integer that corresponds to 
// pilot notes in an array;
// notes are sent to pilot thru chataigne

// adapted from prof. duarte's osc to websocket example

var notes = ["03C" , "03D" , "03E" , "03G" , "04A" , "04C"]; // array of note values
    // to assign wave height values to and then send to pilot
var host = '127.0.0.1:8888'; // address of the websockets server
var socket; // the websocket connection

function setup() {
    // connect to server...
    socket = new WebSocket('ws://' + host);
    socket.onopen = openHandler;
    socket.onmessage = messageHandler;
}

function openHandler() {
    console.log("Connected to socket server at " + host);
}

function messageHandler(event) {
    var msg = event.data; // read data from the onmessage event
    var note = notes[int(msg*6)] // converts received message to a note value
    console.log(note);
    playNote(note);
}

function playNote(note) {
    var noteAsString = note.toString(); // converts note value to string 
        // (not sure if this is necessary but it works this way)

    // send the note to the websocket server
    // (if the socket is open and ready)
    if (socket.readyState == 1) {
        socket.send(noteAsString); // sends note to websocket
        console.log(noteAsString) 
    } else {
        console.log("Socket not ready.");
    }
}
