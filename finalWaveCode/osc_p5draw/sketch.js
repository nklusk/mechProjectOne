// osc_p5draw
// TouchOSC phone app (mix2 layout, tab 3) sends OSC messages. 
// Chataigne maps the OSC messages to Websockets.
// p5js draws using the coordinates from OSC.

var notes = ["03C" , "03D" , "03E" , "03G" , "04A" , "04C"];
var OSCnote;
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
    // waveHeights.push(msg);
    // OSCnote = msg
    var note = notes[int(msg*6)]
    console.log(note);
    playNote(note);
}

function findPeaksAndTroughs(waveHeights) {
    for (let i = 1; i < waveHeights.length - 1; i++) {
        if (waveHeights[i] > waveHeights[i - 1] && waveHeights[i] > waveHeights[i + 1]) {
            // here put action that peak will initiate;
        } else if (waveHeights[i] < waveHeights[i - 1] && waveHeights[i] < waveHeights[i + 1]) {
            // here put action that trough will initiate;
        }
    }
}

function playNote(note) {
    //let noteF = "note:0" + textField.value() + "ff"; // replace this with whatever the peaks and troughs
                                                    // function will output

    // send the note to the websocket server
    // (if the socket is open and ready)
    if (socket.readyState == 1) {
        socket.send(note);
        console.log("Sent: " + note);
    } else {
        console.log("Socket not ready.");
    }
}