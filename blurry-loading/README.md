# blurry-loading
So, for my latest project, which is called Blurry Loading, I created a fully responsive page. In the HTML file, I added two divs - one for the background and another for the text. Then, in the CSS file, I set the background div to have a background image with a filter blur initial set to 0px.

To create the blur effect, I used JavaScript to select the two elements. I also defined two helper elements: one called load, which increments from 1 to 100, and another called interval, where I called the setInterval function and defined my own function with the required parameters.

In my function, I used a scaling effect to animate the blur effect from 30px to 0px and the text opacity from 1 to 0. This all happens within an interval from 0 to 100.

To create this scaling effect, I used a function called "scale," which I found on StackOverflow. It has all the necessary parameters to achieve the desired effect.