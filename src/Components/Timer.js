import { useEffect, useState } from "react";
import { Toast } from "./Toast";

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
    } else if (status === true || status === undefined) {
      clearInterval(interval);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds, status]);

  console.log(status);
  return (
    <>
      {!status && seconds === 0 ? (
        <h2>Fail</h2>
      ) : status === undefined && seconds > 0 ? (
        <Toast />
      ) : (
        <div>{seconds}s</div>
      )}
    </>
  );
};
