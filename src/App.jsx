import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  const [answers, setAnswers] = useState([]);
  const [isWrongSelection, setIsWrongSelection] = useState(undefined);

  const getRandomColor = () => {
    // let colorHex = "123456789abcdefg";
    // let colorHash = "#";
    // for (let i = 0; i < 6; i++) {
    //   let color = Math.floor(Math.random() * colorHex.length);
    //   colorHash += colorHex[color];
    // }
    // return colorHash;
    const colorHex = "123456789abcdefg";
    const colorHash = "#";
    const color = new Array(6)
      .fill("")
      .map(() => colorHex[Math.floor(Math.random() * colorHex.length)])
      .join("");
    return `${colorHash}${color}`;
  };

  useEffect(() => {
    const correctAnswer = getRandomColor();
    setColor(correctAnswer);
    setAnswers(
      [correctAnswer, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  }, []);

  function handleAnswerClicked(answer) {
    answer === color ? setIsWrongSelection(false) : setIsWrongSelection(true);
  }

  return (
    <div className="App">
      <div>
        <div className="container" style={{ background: color }}></div>
        {answers.map((answer) => {
          return (
            <button onClick={() => handleAnswerClicked(answer)} key={answer}>
              {answer}
            </button>
          );
        })}
        {isWrongSelection === false && (
          <div style={{ color: "red" }}>Wrong</div>
        )}
        {isWrongSelection === true && (
          <div style={{ color: "green" }}>Correct</div>
        )}
      </div>
    </div>
  );
}

export default App;
