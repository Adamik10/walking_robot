# Technical Challenge

Thank you for participating in Jayway's technical recruitment challenge.

The challenge you are about to solve has been designed to be a medium of self-expression, a way for you as a developer to show who you are, and what you value in coding. For that reason there will only be a few requirements to your solution:

- The solution must be written in TypeScript.
- The solution must contain a front-end and a back-end.

The challenge is to write a control program for a robot. The robot is located in a two-dimensional room, and moves around by parsing a string of commands using the following syntax:

- `L` - Turn left
- `R` - Turn right
- `F` - Move forward

_Example string: `LFFRFRFRFF`_

When the program starts, you must be able to specify the size of the room, where the robot is located, and what direction it is facing.

When the robot runs out of commands, it shall report what square it's located at and what direction it's facing.

To test your solution ensure that it correctly computes the following examples:

| Size  | Instructions | Start Position | End Position |
| ----- | ------------ | -------------- | ------------ |
| `5x5` | `RFRFFRFRF`  | `(1, 2, N)`    | `(1, 3, N)`  |
| `5x5` | `RFLFFLRF`   | `(0, 0, E)`    | `(3, 1, E)`  |

To ensure you solve the problem within the given timeframe. We suggest you focus on quality and cleanliness rather than overdoing it on functionality.

Good luck!
