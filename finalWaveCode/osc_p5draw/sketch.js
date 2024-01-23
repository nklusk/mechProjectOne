// receives osc messages from chataigne websocket
// micro sends osc messages to chataigne websocket
// chataigne maps osc to this code 
// this code 
// p5js draws using the coordinates from OSC.

var notes = ["03C" , "03D" , "03E" , "03G" , "04A" , "04C"]; // array of note values
    // to assign wave height values to and then send to pilot
var host = '127.0.0.1:8080'; // address of the websockets server
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
    //waveHeights = msg; // puts osc message in wave number variable
    var note = notes[int(msg*6)] // converts received message to a note value
    console.log(note);
    playNote(note);
}

function playNote(note) {

    // send the note to the websocket server
    // (if the socket is open and ready)
    if (socket.readyState == 1) {
        socket.send(note);
        console.log("Sent: " + note);
    } else {
        console.log("Socket not ready.");
    }
}
