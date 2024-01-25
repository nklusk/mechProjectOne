this code interprets osc messages received through a wifi network by initializing a websocket server that can be used to map
osc messages to the code in chataigne. the osc messages are received as a decimal from 0 to 1, and the code converts
these decimals to letter/number strings that correspond to notes in Pilot. the decimal osc messages represent wave height gathered 
by a water sensor in our constructed wave tank.

additionally, the code creates a canvas in a web browser that changes the color of the screen based on 
the wave's height and note being played.

https://github.com/nklusk/mechProjectOne/assets/144201569/249037d8-aee0-46b7-bb0e-3d8e1b630d7c

