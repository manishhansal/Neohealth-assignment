import { useEffect, useState } from "react";

export const Timer = ({ time, status }) => {
  let splitTime = time.split(":");
  let sec = +splitTime[0] * 60 + +splitTime[1];
  const [seconds, setSeconds] = useState(sec);

  useEffect(() => {
    let interval = null;
    if (!status && seconds >= 1) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds, status]);

  return <div>{seconds}s</div>;
};
