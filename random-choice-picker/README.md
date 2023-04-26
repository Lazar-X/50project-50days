# random-choice-picker
Random Choice Picker is a responsive project that I worked on. In the HTML file, I added a basic description for the user, a textarea, and another div that we will use for printing their input. In the CSS file, I did some basic styling to make it look more presentable.

The majority of the work was done in the JavaScript file. First, I wrote a function that would take the user's input and turn it into an array of elements separated by commas. I also added an event listener for keyup, which would check if the user had pressed the enter key. If they had, the randomSelect() function would be called.

In the randomSelect() function, I randomly highlight and unhighlight the user's input. This is done by adding a class to the element. After that, we pick only one element that's staying highlighted. I used functions like setTimeout, setInterval, and clearInterval to achieve this, as well as the math floor and math random functions to pick a random tag.

Overall, it was a lot of work, but I'm happy with how the project turned out. It's a fun and useful tool for randomly selecting choices.
