# sound-board
For this project, I started with an HTML file that included an audio element and a div to hold the buttons I would add later. In my CSS, I did some basic styling for the buttons. However, the real work was in my JavaScript.

I began by creating an array of sounds with elements that had the same name as the ID in the audio tags. Then, I looped through the array to create button elements and added them to the div I had created earlier.

I also added an event listener for the click event, so when a button is clicked, it plays the specific sound with the play method. I made sure to stop any other sounds that were playing by using the pause method and setting the currentTime to 0, to start over from the beginning.

Overall, it was a fun project to work on and helped me learn more about working with audio in JavaScript.