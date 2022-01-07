//import logo from './logo.svg';
import './App.css';
//import Calc from './Components/Calc';
import { useState } from 'react';

const App = () => {
  const [result, setresult] = useState("");
  const handleClick = (event) => {
    setresult(result.concat(event.target.value))
  }
  const calculate = () => {
    setresult(eval(result).toString())

  }
  const clear = () => {
    setresult("");
  }
  return (


    <div className='container '>
      <h1 className='head'> CALCULATOR </h1>
      <div className='calc'>
        <input type="text" placeholder='0' id="answer" value={result}></input>
        <input type="button" className='button' value="1" onClick={handleClick} />
        <input type="button" className='button' value="2" onClick={handleClick} />
        <input type="button" className='button' value="3" onClick={handleClick} />
        <input type="button" className='button' value="c" onClick={handleClick} />
        <input type="button" className='button' value="4" onClick={handleClick} />
        <input type="button" className='button' value="5" onClick={handleClick} />
        <input type="button" className='button' value="6" onClick={handleClick} />
        <input type="button" className='button' value="+" onClick={handleClick} />
        <input type="button" className='button' value="7" onClick={handleClick} />
        <input type="button" className='button' value="8" onClick={handleClick} />
        <input type="button" className='button' value="9" onClick={handleClick} />
        <input type="button" className='button' value="-" onClick={handleClick} />
        <input type="button" className='button' value="0" onClick={handleClick} />
        <input type="button" className='button' value="." onClick={handleClick} />
        <input type="button" className='button' value="/" onClick={handleClick} />
        <input type="button" className='button' value="*" onClick={handleClick} />
        <input type="button" className='button button1' value="=" onClick={calculate} />
        <input type="button" className='button button1' value="clear" onClick={clear} />
      </div>
    </div>
  )
}

export default App;
