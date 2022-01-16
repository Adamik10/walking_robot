import React, { useState } from "react";
import "../css/InputOutput.css";
import Button from "./Button";
import { Message } from "./Message";
import { Form } from "../blueprints/form";
import { calcMovement } from "../blueprints/helpers";
import logo from "../assets/robot.png";

export const Input = () => {
  const [formActivePage, setFormActivePage] = useState(0);
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [robotState, setRobotState] = useState({
    currentX: 0,
    currentY: 0,
    currentDir: 0,
  });
  const formData: Form = {
    roomX: 0,
    roomY: 0,
    robotStartX: 0,
    robotStartY: 0,
    robotStartDir: 0,
    command: "",
  };

  // moves between the form tabs
  const moveFormStep = (step: number): void => {
    setFormActivePage((prev: number) => {
      return prev + step;
    });
  };

  // checks whether the form has all the values filled out
  const isFormFilledOut = (formData: object) => {
    const isEmpty = Object.values(formData).every(
      (value) => value === null || value === ""
    );
    return isEmpty ? false : true;
  };

  // handles pressing enter
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      moveFormStep(1);
    }
  };

  function formSubmitted() {
    setRobotState(calcMovement(formData));
    setSuccessSubmit(true);
  }

  // rendering buttons
  const renderButton = (prop: string) => {
    return (
      <Button
        onClick={() => {
          prop === "prev" ? moveFormStep(-1) : moveFormStep(1);
        }}
        prop={prop}
      />
    );
  };

  // rendering messages
  const renderMessage = (prop: string) => {
    return <Message prop={prop} />;
  };

  return (
    <>
      <div className="input">
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              roomX: { value: number };
              roomY: { value: number };
              robotStartX: { value: number };
              robotStartY: { value: number };
              robotStartDir: { value: string };
              command: { value: string };
            };
            formData.roomX = target.roomY.value;
            formData.roomY = target.roomY.value;
            formData.robotStartX = target.robotStartX.value;
            formData.robotStartY = target.robotStartY.value;
            formData.robotStartDir = Number(target.robotStartDir.value);
            formData.command = target.command.value;
            setTriedToSubmit(true);
            isFormFilledOut(formData)
              ? formSubmitted()
              : console.log(`the form is not filled out: ${formData}`);
          }}
        >
          <div className={`tab ${formActivePage === 0 ? "active" : ""}`}>
            <p>
              Specify the <span>room size</span>
              <br /> for your robot to walk in
            </p>
            <div>
              <input type="number" name="roomX" min="0" placeholder="X axis" />
              <input
                type="number"
                name="roomY"
                min="0"
                placeholder="Y axis"
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <div className={`tab ${formActivePage === 1 ? "active" : ""}`}>
            <p>
              Specify a{" "}
              <span>
                starting <br /> square
              </span>{" "}
              for your robot
            </p>
            <div>
              <input
                type="number"
                name="robotStartX"
                min="0"
                placeholder="X position"
              />
              <input
                type="number"
                name="robotStartY"
                min="0"
                placeholder="Y position"
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <div className={`tab ${formActivePage === 2 ? "active" : ""}`}>
            <p>
              What <span>starting direction</span> <br />
              is the robot facing
            </p>
            <div>
              <select name="robotStartDir">
                <option value="0">North</option>
                <option value="1">East</option>
                <option value="2">South</option>
                <option value="3">West</option>
              </select>
            </div>
          </div>

          <div className={`tab ${formActivePage === 3 ? "active" : ""}`}>
            <p>
              <span>Commands</span> to be carried
              <br />
              out by the robot
            </p>
            {isFormFilledOut(formData) === false &&
              triedToSubmit === true &&
              renderMessage("error")}
            <div>
              <textarea
                name="command"
                placeholder="L - left | R - right | F - forward"
              />
            </div>
          </div>

          <div>
            {formActivePage > 0 && renderButton("prev")}
            {formActivePage < 3 && renderButton("next")}
            {formActivePage === 3 && renderButton("conf")}
          </div>

          <div>
            <span
              className={`step ${formActivePage === 0 ? "active" : ""}`}
            ></span>
            <span
              className={`step ${formActivePage === 1 ? "active" : ""}`}
            ></span>
            <span
              className={`step ${formActivePage === 2 ? "active" : ""}`}
            ></span>
            <span
              className={`step ${formActivePage === 3 ? "active" : ""}`}
            ></span>
          </div>
        </form>
      </div>
      <div className="output">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="robotMessage">
          {successSubmit === false
            ? `I can tell you my destination if you fill out that form over there, youngster.`
            : `I finished walking at X: ${robotState.currentX}, Y: ${
                robotState.currentY
              }, facing ${robotState.currentDir === 0 ? "North" : ""}
              ${robotState.currentDir === 1 ? "East" : ""}
              ${robotState.currentDir === 2 ? "South" : ""}
              ${robotState.currentDir === 3 ? "West" : ""}`}
        </div>
        <div className="pointer"></div>
      </div>
    </>
  );
};

export default Input;
