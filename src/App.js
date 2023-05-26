import React, { useState } from 'react';
import "./App.css";

function App() {
  const [args, setargs] = useState([{ value: '', bool: false }]);
  const [operation, setOperation] = useState('');
  const [constantValue, setConstantValue] = useState(true);
  const [argumentIndex, setArgumentIndex] = useState(0);
  const [andArgument1Index, setAndArgument1Index] = useState(0);
  const [andArgument2Index, setAndArgument2Index] = useState(0);
  const [orArgument1Index, setOrArgument1Index] = useState(0);
  const [orArgument2Index, setOrArgument2Index] = useState(0);

  const handleAddArgument = () => {
    setargs([...args, { value: '', bool: false }]);
  };

  const handleArgumentChange = (index, event) => {
    const newargs = [...args];
    newargs[index].value = event.target.value;
    setargs(newargs);
  };

  const handleBoolChange = (index, event) => {
    const newargs = [...args];
    newargs[index].bool = event.target.value === 'true';
    setargs(newargs);
  };

  const handleOperationChange = event => {
    setOperation(event.target.value);
  };

  const handleClearOperation = () => {
    setOperation('');
  };

  const handleConstantValueChange = event => {
    setConstantValue(event.target.value === 'true');
  };

  const handleArgumentIndexChange = event => {
    setArgumentIndex(parseInt(event.target.value));
  };

  const handleAndArgument1IndexChange = event => {
    setAndArgument1Index(parseInt(event.target.value));
  };

  const handleAndArgument2IndexChange = event => {
    setAndArgument2Index(parseInt(event.target.value));
  };

  const handleOrArgument1IndexChange = event => {
    setOrArgument1Index(parseInt(event.target.value));
  };

  const handleOrArgument2IndexChange = event => {
    setOrArgument2Index(parseInt(event.target.value));
  };

  let result;
  if (operation === 'constant') {
    result = constantValue;
  } else if (operation === 'argument') {
    result = args[argumentIndex].bool;
  } else if (operation === 'and') {
    result =
      args[andArgument1Index].bool && args[andArgument2Index].bool;
  } else if (operation === 'or') {
    result =
      args[orArgument1Index].bool || args[orArgument2Index].bool;
  }

  return (
    <div style={{border:"2px solid black", width:"300px", borderRadius:"20px"}}>
      {args.map((argument, index) => (
        <div key={index}>
          <input
            type="text"
            value={argument.value}
            onChange={event => handleArgumentChange(index, event)}
            style={{margin: "10px"}}
          />
          <select
            value={argument.bool}
            onChange={event => handleBoolChange(index, event)}
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </div>
      ))}
      <button onClick={handleAddArgument} style={{margin:"10px"}}>Add Argument</button>
      <br />
      <br />
      <select value={operation} onChange={handleOperationChange} style={{margin:"10px"}}>
        <option value="">Select Operation</option>
        <option value="constant">Constant</option>
        <option value="argument">Argument</option>
        <option value="and">AND</option>
        <option value="or">OR</option>
      </select>
      <button onClick={handleClearOperation}>X</button>
      {operation === 'constant' && (
        <>
          <br />
          <br />
          <select value={constantValue} onChange={handleConstantValueChange}>
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </>
      )}
      {operation === 'argument' && (
        <>
          <br />
          <br />
          <select value={argumentIndex} onChange={handleArgumentIndexChange}>
            {args.map((argument, index) => (
              <option key={index} value={index}>
                {argument.value}
              </option>
            ))}
          </select>
        </>
      )}
      {operation === 'and' && (
        <>
          <br />
          <br />
          <span style={{margin:"10px"}}>Argument 1:</span>
          <select
            value={andArgument1Index}
            onChange={handleAndArgument1IndexChange}
          >
            {args.map((argument, index) => (
              <option key={index} value={index}>
                {argument.value}
              </option>
            ))}
          </select>
          <span style={{margin:"10px"}}>Argument 2:</span>
          <select
            value={andArgument2Index}
            onChange={handleAndArgument2IndexChange}
          >
            {args.map((argument, index) => (
              <option key={index} value={index}>
                {argument.value}
              </option>
            ))}
          </select>
        </>
      )}
      {operation === 'or' && (
        <>
          <br />
          <br />
          <span style={{margin:"10px"}}>Argument 1:</span>
          <select
            value={orArgument1Index}
            onChange={handleOrArgument1IndexChange}
          >
            {args.map((argument, index) => (
              <option key={index} value={index}>
                {argument.value}
              </option>
            ))}
          </select>
          <span style={{margin:"10px"}}>Argument 2:</span>
          <select
            value={orArgument2Index}
            onChange={handleOrArgument2IndexChange}
          >
            {args.map((argument, index) => (
              <option key={index} value={index}>
                {argument.value}
              </option>
            ))}
          </select>
        </>
      )}
      {result !== undefined && (
        <>
          <br />
          <br />
          <span  style={{fontFamily:"cursive", margin:"10px" }}><b><u>Result:</u></b></span> {result.toString()}
        </>
      )}
    </div>
  );
}

export default App;
