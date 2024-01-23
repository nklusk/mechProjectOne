# p5js Chataigne Demos

Each folder contains a different demo and a corresponding Chataigne noisette file:

<dl>

  <dt>p5js_dom_pilot</dt>
  <dd>A p5js sketch (with a UI made using the DOM functions) sends strings to a websocket at `127.0.0.1:8080`. The strings are formatted to match the UDP messages that [Pilot](https://github.com/hundredrabbits/Pilot) expects. Chataigne maps the websocket message to a UDP message (going to port `49161`).</dd>

  <dt>midi_cc_p5js</dt>
  <dd>Chataigne accepts MIDI CC's from a Beatstep and sends them to p5js sketch via Websockets.</dd>

  <dt>osc_p5draw</dt>
  <dd>TouchOSC phone app (mix2 layout, tab 3) sends OSC messages. Chataigne maps the OSC messages to Websockets.
  p5js draws using the coordinates from OSC.</dd>

  <dt>p5play_pilot</dt>
  <dd>A p5play game triggers Pilot sounds by sending websocket messages converted to UDP by Chataigne</dd>

</dl>

## p5js Websockets Tips

* Websocket messages have a NL tacked onto the end
* Sending the Websocket message with a "name:" prepended onto it, allows Chataigne to address the value using that name, assuming "Message Structure" is "Colon (:) Separated" and "First Values is the Name" is checked

## Chataigne Tips

* Pilot doesn't like its UDP messages to have CR/NL
* Right click on the Mapping's input value and select "Always Notify Changes", or Websockets messages won't actually be mapped when the same string is sent multiple times in a row

