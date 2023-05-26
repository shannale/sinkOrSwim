# SinkOrSwim

## Background 
You are in search of fish to catch in this magical pond that is a home for all sea creatures.
When the game begins, it will start off with an empty pond with a fishing rod controlled by the cursor. This pond is a circular grid that will generate ripples at a randomized location with a randomized timer that will show ripples indicating to the player the location of the fish. For each iteration of the game collecting the fish follow these rules: 

1) The player must correctly identify the location of the ripple and click within the allotted time* in the area before the ripples disappear to be able to successfully collect the fish. 

2) If a player is controlling the fishing rod within the correct area, but clicks at a time when not indicated, the ripple disappears and the fish swims away free. 

** Once a ripple has appeared, the player must wait for a `PULL` message to pop up indicating when to click. 

There are many variations of fish with the combination of timing in the game `SinkOrSwim`. The logistics of the game will be outlined in the `Functionality & MVP` sections. 

## Functionality & MVPs 

In `SinkOrSwim`, users will be able to:
- Start, pause, and restart the game 
- Control the fishing rod with the cursor and click to active 
- Collect different fish and increase their score 
- Have 3 strikes to miss any fish before the game is over 

In addition, this project will include:

- Instructions to explain the background and rules of the game
- A production README 

![img](pictures/outline.png)

## Technologies, Libraries, APIs

This project will be implemented with the following technologies: 

- The `Canvas API` to render the game
- `Webpack and Babel` to bundle and transpile the source Javascript code 
-  `npm` to manage project dependencies 

## Implementation Timeline 

`Friday & Weekend`: Setup project, including getting webpack up and running. Get canvas to show up on the screen, and spend time getting comfortable with the Canvas API. Create Background and Fish classes. Get a grid rendered to the canvas reflecting the spaces that ripples could appear. 

`Monday:` Finalize my drawings and the logistics of how the game is run, have all my features to be added completed through pictures. Add ripple effects and timing to the pond.

`Tuesday:` Render my fish and ripples to the canvas, get the timing down for the fish and the clicking. Have the clicking feature connect back to the randomized location of the ripple for the spacing of where to click. Add timing for instructions in the beginning and work on user controls: start, pause, and reset buttons. 

`Wednesday:` Finish implementing user controls, and focus on styling, completing fish and strike counter. Include nav links and if time, start on bonuses.

`Thursday Morning:` Finishing touches to the game, add any decorations/extra styling drawings. 

## Bonus Features 

There could be many bonus aspects that could be added to the game, such as: 
- A puffer fish that would cause the user to gain a strike if caught 
    - This would add to the ripple feature to preview the fish that will be generated 
- Levels to the game that have decreasing timers, each level would be completed once all fish are caught, then it would repeat. 