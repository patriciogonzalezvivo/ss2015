# Week 01: Getting Started

Read Uniform Chapter and complete the following exercises:

* Slow down the frequency until the color change becomes almost imperceptible.

* Speed it up until you see a single color without flickering.

* Play with the three channels (RGB) in different frequencies to get interesting patterns and behaviors.

* Figure out how to use u_mouse knowing that the values are in pixels and NOT normalized values. Move colors around

* Imagine an interesting way of changing this color pattern using u_time and u_mouse coordinates

Read “Running your shader“ Chapter and tray a shader in OF, P5 and Three.js

# Week 02: Shaping Functions

* Take a look at the following table of equations made by Kynd: www.flickr.com/photos/kynd/9546075099/. See how he is combining functions and their properties to control the values between 0.0 and 1.0. Now it’s time for you to practice by replicating each one of these functions on a shader. Remember the more you practice the better your karate will be.

* Port and use one of Golan’s functions to GLSL

- Polynomial Shaping Functions: www.flong.com/texts/code/shapers_poly

- Exponential Shaping Functions: www.flong.com/texts/code/shapers_exp

- Circular & Elliptical Shaping Functions: www.flong.com/texts/code/shapers_circ

- Bezier and Other Parametric Shaping Functions: www.flong.com/texts/code/shapers_bez

* Port and use one of Inigo Quiles “useful function” (http://www.iquilezles.org/www/articles/functions/functions.htm)

* Using a stationary video camera, make three recordings of three different scenes which have interesting motion (go outside!!!). Pick one point to watch during the video, and sketch out it’s motion path using the software you want (or better, your own software). Should look like this: https://vimeo.com/28644982. Try to find both rhythmic (repetitive) and organic motions. Make simple GLSL functions (like the once on the chapter) to replicate some fragments of those motions.

# Week 03: Color

* Make an expressive transition between colors. Think of a particular emotion. What color seems most representative of it? How does it appear? How does it fade away? Think of another emotion and the matching color for it. Change the beginning and ending color of the above code to match those emotions. Then animate the transition using shaping functions. Robert Penner developed a series of popular shaping functions for computer animation known as easing functions, you can use this example as research and inspiration but the best result will come from making your own transitions.

* Compose a gradient that resembles a William Turner sunset

* Animate a transition between a sunrise and sunset using u_time.

* Can you make a rainbow using what we have learned so far?

* Use the step() function to create a colorful flag.

* Watch the following works of [Leo Villareal](http://villareal.net/) and for each one make a shaders that looks like it:

- https://vimeo.com/119302847

- https://vimeo.com/123895401

- https://vimeo.com/137666974

- https://vimeo.com/32823553

- https://vimeo.com/13991691

* If you look closely at the color wheel used on color pickers (see http://patriciogonzalezvivo.com/2015/thebookofshaders/06/), they use a different spectrum according to RYB color space. For example, the opposite color of red should be green, but in our example it is cyan. Can you find a way to fix that in order to look exactly like the following image?

# Week 04: Shapes

Read the [chapter on Shapes of the book of shaders](http://patriciogonzalezvivo.com/2015/thebookofshaders/07/) and complete all the proposed exercises:

## Rectangle exercises: 

* Change the size and proportions of the rectangle.

* Experiment with the same code but using smoothstep() instead of step(). Note that by changing values, you can go from blurred edges to elegant smooth borders.

* Do another implementation that uses floor().

* Choose the implementation you like the most and make a function of it that you can reuse in the future. Make your function flexible and efficient.

* Make another function that just draws the outline of a rectangle.

* How do you think you can move and place different rectangles in the same billboard? If you figure out how, show off your skills by making a composition of rectangles and colors that resembles a Piet Mondrian painting.

## Circle

* Modify the above code in order to contain the entire circular gradient inside the canvas.

## Distance field

* Use step() to turn everything above 0.5 to white and everything below to 0.0.

* Inverse the colors of the background and foreground.

* Using smoothstep(), experiment with different values to get nice smooth borders on your circle.

* Once you are happy with an implementation, make a function of it that you can reuse in the future.

* Add color to the circle.

* Can you animate your circle to grow and shrink, simulating a beating heart? (You can get some inspiration from the animation in the previous chapter.)

* What about moving this circle? Can you move it and place different circles in a single billboard?

* What happens if you combine distances fields together using different functions and operations?

```
pct = distance(st,vec2(0.4)) + distance(st,vec2(0.6));
pct = distance(st,vec2(0.4)) * distance(st,vec2(0.6));
pct = min(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
pct = max(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
pct = pow(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
```

* Make three compositions using this technique. If they are animated, even better!

## Polar shapes

* Animate these shapes.

* Combine different shaping functions to cut holes in the shape to make flowers, snowflakes and gears.
Use the plot() function we were using in the Shaping Functions Chapter to draw just the contour.

## Combining powers

* Using this example, make a function that inputs the position and number of corners of a desired shape and returns a distance field value.

* Mix distance fields together using min() and max().

* Choose a geometric logo to replicate using distance fields.

* Watch the following videos and make an art peace in the style of John Whitney:

- [John Whitney “Catalog” (1961)](https://www.youtube.com/watch?v=TbV7loKp69s) 

- [John Whitney “Permutations” (1966)](https://www.youtube.com/watch?v=BzB31mD4NmA)

- [J. Whitney “Lapis” (1966)](https://www.youtube.com/watch?v=kzniaKxMr2g)

- [John Whitney “Matrix III” (1972)](https://www.youtube.com/watch?v=ZrKgyY5aDvA)

- [John Whitney “Arabesque” (1975)](https://www.youtube.com/watch?v=w7h0ppnUQhE)

- [Leo Villareal “Stars” (2007)](https://vimeo.com/3021389) 

