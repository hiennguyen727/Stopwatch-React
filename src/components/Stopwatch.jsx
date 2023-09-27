import React, { useState, useEffect } from "react";
import '../App.css'

const Stopwatch = () => {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 10), 10); // increment by 10 milliseconds
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
  };

  const convertTime = (time) => {
    const milliseconds = time % 1000; // Calculate milliseconds
    const seconds = Math.floor((time / 1000) % 60); // Calculate seconds
    const minutes = Math.floor((time / (1000 * 60)) % 60); // Calculate minutes
    const hours = Math.floor(time / (1000 * 60 * 60)); // Calculate hours

    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}.${milliseconds}`;
  }

  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">{convertTime(time)}</p>
      <div>
        <button className="hello" onClick={startAndStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;

