import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [isScientific, setIsScientific] = useState(false);
  const [isOpenBracket, setIsOpenBracket] = useState(true);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const res = eval(input);
      setResult(res);
      setHistory([...history, `${input} = ${res}`]);
    } catch (error) {
      setResult("Error");
    }
  };

  const handleScientific = (func) => {
    try {
      const res = eval(`${func}(${input})`);
      setResult(res);
      setHistory([...history, `${func}(${input}) = ${res}`]);
    } catch (error) {
      setResult("Error");
    }
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const toggleMode = () => {
    setIsScientific(!isScientific);
  };

  const toggleBracket = () => {
    if (isOpenBracket) {
      setInput(input + "(");
    } else {
      setInput(input + ")");
    }
    setIsOpenBracket(!isOpenBracket); // Toggle the bracket state
  };

  const handlePercentage = () => {
    try {
      // Calculate percentage: input % means (input / 100)
      const res = eval(input) / 100;
      setResult(res);
      setHistory([...history, `${input} % = ${res}`]);
      setInput("");
    } catch (error) {
      setResult("Error");
    }
  };

  const handleLn = () => {
    try {
      // Compute natural logarithm using Math.log (ln(x) = loge(x))
      const res = Math.log(eval(input));
      setResult(res);
      setHistory([...history, `ln(${input}) = ${res}`]);
      setInput("");
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="w-[350px] h-[500px] px-2 py-2 shadow-2xl shadow-black border bg-gray-600 border-black rounded-lg ">
     {!showHistory && ( <div className="mb-[10px] rounded-md px-10 h-[90px] shadow-md shadow-black bg-gray-200  flex flex-col justify-center items-end ">
        
          <>
            <div className={`text-2xl font-semibold ${!input?"text-gray-400":"text-black"}` }>{input?input:0}</div>
            <div className="text-lg text-purple-900 font-semibold">{result}</div>
          </>
        
      </div>
      )}
      <div className="grid grid-cols-4 text-xl shadow-md shadow-black  rounded-md gap-x-5 gap-y-4 justify-center bg-gray-200 py-4 px-2 items-center ">
        {!showHistory ? (
          <>
            <button
              className="text-purple-700 font-bold "
              onClick={() => handleClear()}
            >
              C
            </button>
            <button className="" onClick={toggleHistory}>
              🕛
            </button>
            <button
              className="text-purple-700 font-bold"
              onClick={handleBackspace}
            >
              ⌫
            </button>
            <button className="" onClick={toggleMode}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                clip-rule="evenodd"
                id="calculator"
                className="text-purple-700 font-bold"
              >
                <path d="M28 11a6.999 6.999 0 0 0-7-7H11a6.999 6.999 0 0 0-7 7v10a6.999 6.999 0 0 0 7 7h10a6.999 6.999 0 0 0 7-7V11Zm-2 0v10a5.004 5.004 0 0 1-1.464 3.536A5.004 5.004 0 0 1 21 26H11a5.004 5.004 0 0 1-3.536-1.464A5.004 5.004 0 0 1 6 21V11c0-1.326.527-2.598 1.464-3.536A5.004 5.004 0 0 1 11 6h10c1.326 0 2.598.527 3.536 1.464A5.004 5.004 0 0 1 26 11Zm-15.994 7.994H9a1 1 0 0 0 0 2h1.006V22a1 1 0 0 0 2 0v-1.006h1.006a1 1 0 0 0 0-2h-1.006v-1.006a1 1 0 0 0-2 0v1.006Zm8.982 3.994H23a1 1 0 0 0 0-2h-4.012a1 1 0 0 0 0 2Zm0-4H23a1 1 0 0 0 0-2h-4.012a1 1 0 0 0 0 2Zm2.006-8.402-1.299-1.299a1 1 0 0 0-1.414 1.414L19.58 12l-1.299 1.299a1 1 0 0 0 1.414 1.414l1.299-1.299 1.299 1.299a1 1 0 0 0 1.414-1.414L22.408 12l1.299-1.299a1 1 0 0 0-1.414-1.414l-1.299 1.299ZM9 12.994h4.012a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2Z"></path>
              </svg>{" "}
            </button>
            {!isScientific ? (
              <button
                className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 "
                onClick={() => handleScientific("Math.sqrt")}
              >
                √
              </button>
            ) : (
              <button
                className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 "
                onClick={() => handleScientific("Math.tan")}
              >
                tan
              </button>
            )}
            {!isScientific ? (
              <button
               className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 "
                onClick={toggleBracket}
              >
                ()
              </button>
            ) : (
              <button
              className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 "
                onClick={() => handleScientific("Math.sin")}
              >
                sin
              </button>
            )}
            {!isScientific ? (
              <button
                className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 "
                onClick={handlePercentage}
              >
                %
              </button>
            ) : (
              <button
                className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 "
                onClick={() => handleScientific("Math.cos")}
              >
                cos
              </button>
            )}
            {!isScientific ? (
              <button
               className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 "
                onClick={() => handleClick("/")}
              >
                /
              </button>
            ) : (
              <button className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75" onClick={handleLn}>ln</button>
            )}
            <button className="bg-gray-300 py-2.5 rounded-lg shadow-lg shaow-gray-600" onClick={() => handleClick("7")}>
              7
            </button>
            <button className="bg-gray-300 py-2.5 rounded-lg shadow-lg shaow-gray-600"  onClick={() => handleClick("8")}>
              8
            </button>
            <button className="bg-gray-300 py-2.5 rounded-lg shadow-lg shaow-gray-600" onClick={() => handleClick("9")}>
              9
            </button>
            {!isScientific ? (
              <button
                className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 "
                onClick={() => handleClick("*")}
              >
                *
              </button>
            ) : (
              <button
                className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 "
                onClick={() => handleScientific("Math.log")}
              >
                log
              </button>
            )}

            <button className="bg-gray-300 py-2.5 rounded-lg shadow-lg shaow-gray-600" onClick={() => handleClick("4")}>4</button>
            <button className="bg-gray-300 py-2.5 rounded-lg shadow-lg shaow-gray-600" onClick={() => handleClick("5")}>5</button>
            <button className="bg-gray-300 py-2.5 rounded-lg shadow-lg shaow-gray-600" onClick={() => handleClick("6")}>6</button>
            {!isScientific ? (
              <button
                className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 "
                onClick={() => handleClick("+")}
              >
                +
              </button>
            ) : (
              <button
                className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 "
                onClick={() => handleScientific("Math.pow")}
              >
                pow
              </button>
            )}
            <button className="bg-gray-300 py-2.5 rounded-lg shadow-lg shaow-gray-600" onClick={() => handleClick("1")}>1</button>
            <button className="bg-gray-300 py-2.5 rounded-lg shadow-lg shaow-gray-600" onClick={() => handleClick("2")}>2</button>
            <button className="bg-gray-300 py-2.5 rounded-lg shadow-lg shaow-gray-600" onClick={() => handleClick("3")}>3</button>
            {!isScientific ? (
              <button
                className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 "
                onClick={() => handleClick("-")}
              >
                -
              </button>
            ) : (
              <button
               className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 "
                onClick={() => handleScientific("Math.pie")}
              >
                π
              </button>
            )}

            <button className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 " onClick={() => handleScientific("Math.exp")}>e</button>
            <button className="bg-gray-300 py-2.5 rounded-lg shadow-lg shaow-gray-600" onClick={() => handleClick("8")}>0</button>
            <button className="bg-gray-300 py-2.5 rounded-lg shadow-lg shaow-gray-600" onClick={() => handleClick(".")}>.</button>

            <button
              className=" py-2.5 text-white  rounded-xl shadow-lg shadow-purple-800 bg-purple-800/75 "
              onClick={handleCalculate}
            >
              =
            </button>
          </>
        ) : (
          <>
            <button onClick={toggleHistory}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg></button>
          </>
        )}
      </div>
      {showHistory && (
        <div className="bg-neutral-200 h-[85%] rounded-lg py-3 mt-3 flex flex-col">
        <div className="px-3 border-b border-gray-300 py-1">
          <h2 className="text-2xl text-purple-700 font-bold tracking-widest">History</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {history.length > 0 ? (
            <ul className="px-3 py-3 flex flex-col gap-2">
              {history.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="px-3 py-3">No history available.</p>
          )}
        </div>
      </div>
      )}
    </div>
  );
};

export default Calculator;
