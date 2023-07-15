import { useState } from "react";

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    step > 1 && setStep((currentState) => currentState - 1);
  }
  function handleNext() {
    setStep((currentState) => currentState + 1);
  }
  return (
    <div className="Container">
      <div>
        <button
          style={{ backgroundColor: "#fff", color: "#000" }}
          onClick={handleNext}
        >
          &#43;
        </button>
        <span>Step : {step}</span>
        <button
          style={{ backgroundColor: "#fff", color: "#000" }}
          onClick={handlePrevious}
        >
          &#8722;
        </button>
        <CounterButton countObj={step} />
      </div>
    </div>
  );
}
function CounterButton({ countObj }) {
  const [count, setCount] = useState(0);

  // Getting the current date and updating it..........(Simple)
  const date = new Date();
  date.setDate(date.getDate() + count);

  // This is Bad Practise............
  // const [date, setDate] = useState([
  //   new Date().getDay,
  //   new Date().getMonth,
  //   new Date().getFullYear,
  // ]);

  function handlePrevious() {
    count > 0 && setCount((currentCount) => currentCount - countObj);
  }
  function handleNext() {
    setCount((currentCount) => currentCount + countObj);
  }

  return (
    <div className="Container">
      <div>
        <button
          style={{ backgroundColor: "#fff", color: "#000" }}
          onClick={handleNext}
        >
          &#43;
        </button>
        <span>Count : {count}</span>
        <button
          style={{ backgroundColor: "#fff", color: "#000" }}
          onClick={handlePrevious}
        >
          &#8722;
        </button>
      </div>
      <p>
        {count} days from today is {date.toDateString()}
      </p>
    </div>
  );
}
