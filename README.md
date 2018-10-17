# Pool Game JavaScript
[Visit Pool Game ](https://yuqwang.site/POOLGAMEJS/)

## Basic Overview
PoolGame JavaScript is a concise game featured classic 8-Ball Pool. Built with JavaScript and HTML5 Canvas.

## Key Features
In PoolGame player is able to:
* Move the mouse to control the stick direction.
* Hit and hold the left click to increase shot power, and release left click to shot the white ball.

## Technologies
* Vanilla JavaScript
* HTML5 Canvas

## Challenges
Mimic the ball movement by implementing the physics theory of elastic collision.

This block of code shows the details on how the ball moves according to elastic theory.
```JavaScript
// find a normal vector
const n = this.position.subtract(ball.position);
// find the distance
const dist = n.length();
// no collision at all
if (dist > BALL_DIAMETER) {
  return;
}
//minimum translation distance to avoid overlap;
const mini_translation_distance = n.multiply((BALL_DIAMETER - dist)/dist)
this.position = this.position.sum(mini_translation_distance.multiply(1/2));
ball.position = ball.position.subtract(mini_translation_distance.multiply(1/2));
// find unit normal vector
const unit_normal_vector = n.multiply(1/n.length());
const unit_tangent_vector = new Vector(- unit_normal_vector.y, unit_normal_vector.x);
const v1n = unit_normal_vector.dot_product(this.velocity);
const v1t = unit_tangent_vector.dot_product(this.velocity);
const v2n = unit_normal_vector.dot_product(ball.velocity);
const v2t = unit_tangent_vector.dot_product(ball.velocity);
// new normal velocities;
let v1nt = v2n;
let v2nt = v1n;
//convert to vectors
v1nt = unit_normal_vector.multiply(v1nt);
const v1tt = unit_tangent_vector.multiply(v1t);
v2nt = unit_normal_vector.multiply(v2nt);
const v2tt = unit_tangent_vector.multiply(v2t);

this.velocity = v1nt.sum(v1tt);
ball.velocity = v2nt.sum(v2tt);

```


## Future Direction
* Add score count for the game
* Add AI to make more fun.  
