import { Form } from "./form";
import { Robot } from "./robot";
import { Room } from "./room";

function calcMovement(props: Form) {
  const room: Room = {
    xSquares: Number(props.roomX),
    ySquares: Number(props.roomY),
  };
  const command: string = props.command;
  let robot: Robot = {
    currentX: Number(props.robotStartX),
    currentY: Number(props.robotStartY),
    currentDir: Number(props.robotStartDir),
  };

  //calculates the robot's new state
  for (let i = 0; i < command.length; i++) {
    switch (command.charAt(i)) {
      case "R":
        robot.currentDir === 3
          ? (robot.currentDir -= 3)
          : (robot.currentDir += 1);
        break;
      case "L":
        robot.currentDir === 0
          ? (robot.currentDir += 3)
          : (robot.currentDir -= 1);
        break;
      case "F":
        switch (robot.currentDir) {
          case 0:
            robot.currentY < 1 ? (robot.currentY += 0) : (robot.currentY -= 1);
            break;
          case 1:
            robot.currentX > room.xSquares - 2
              ? (robot.currentX += 0)
              : (robot.currentX += 1);
            break;
          case 2:
            robot.currentY > room.ySquares - 2
              ? (robot.currentY += 0)
              : (robot.currentY += 1);
            break;
          case 3:
            robot.currentX < 1 ? (robot.currentX += 0) : (robot.currentX -= 1);
            break;
        }
        break;
    }
  }
  return robot;
}

export { calcMovement };
