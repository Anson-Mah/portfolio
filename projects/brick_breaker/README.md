# [Brick Breaker game with Javascript](https://anson-mah-acitech.github.io/brick-breaker/)

The goal of the game is to destroy all of the bricks. 

You do this by controlling a paddle, which is able to bounce a ball that destroys bricks on impact. 

![Screenshot of the Brick Breaker Game](screenshot.png)

## Scoring System

Every time you destroy a brick, the score is incremented by a certain amount. This amount is determined by the color of the brick destroyed. 

Here is the scoring system in this version of Brick Breaker:

| Color | Score | 
|:-|:-| 
| Red | 7 | 
| Orange | 6 | 
| Yellow | 5 |
| Green | 4 | 
| Turquoise | 3 |
| Indigo | 2 | 
| Purple | 1 | 

## Lives

If the ball touches the bottom of the game area, then the amount of lives will decrease by 1. Once a player reaches 0 lives, then the game is lost. 
 
A player starts with 3 lives. 

## Paddle Control

The player can control the paddle in 2 ways.

1. The Mouse
	* Simply move the mouse around the screen, and the paddle will follow.
	
2. The Keyboard
	* The arrow keys are used to move the paddle around. 
	* The player may also use the `A` and `D` keys if they wish.
