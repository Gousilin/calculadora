import './calculator.css'
import React, { useState } from 'react'

const Calculator = () => {

    const [value, setValue] = useState(0);
    const [lastValue, setLastValue] = useState(0);
    const [operation, setOperation] = useState();

    function inputValue(e){
        var input = e.target.value;
            
        if (value === 0){
            setValue(input)
        } else{
            setValue(value + input)
        } 
    }

    function percentage(){ 
        setValue(value/100)
    }

    function mathHandle(e){
        var operator = e.target.value;
        setOperation(operator);
        setLastValue(value);
        setValue(0);
    }

    function result(){
        switch (operation) {
            case "+":
                setValue((parseFloat(lastValue)+parseFloat(value)))
                break;
            case "-":
                setValue((parseFloat(lastValue)-parseFloat(value)))
                break;
            case "/":
                setValue(Number(parseFloat(lastValue)/parseFloat(value)).toFixed(4))
                break;
            case "*":
                setValue((parseFloat(lastValue)*parseFloat(value)))
                break;
            default:
                setValue("Error");
                break;
          }
    }

    function clearInput(e){
        setValue(0)
    }

  return (
    <div className='container'>
        <div className='wrapper'>
            
            <div className='result'>
                <h1>{value}</h1>
            </div>

            <div className='box-wrapper'>
                <button onClick={clearInput} className='blue' id='clear'>C</button>
                <button onClick={percentage} className='blue'>%</button>
                <button onClick={mathHandle} value={"/"} className='pink'>/</button>
            </div>
            
            <div className='box-wrapper'>
                <button onClick={inputValue} className='grey' value={7}>7</button>
                <button onClick={inputValue} className='grey' value={8}>8</button>
                <button onClick={inputValue} className='grey' value={9}>9</button>
                <button onClick={mathHandle} value={"*"} className='pink'>X</button>
            </div>
            <div className='box-wrapper'>
                <button onClick={inputValue} className='grey' value={4}>4</button>
                <button onClick={inputValue} className='grey' value={5}>5</button>
                <button onClick={inputValue} className='grey' value={6}>6</button>
                <button onClick={mathHandle} value={"-"} className='pink'>-</button>
            </div>
            <div className='box-wrapper'>
                <button onClick={inputValue} className='grey' value={1}>1</button>
                <button onClick={inputValue} className='grey' value={2}>2</button>
                <button onClick={inputValue} className='grey' value={3}>3</button>
                <button onClick={mathHandle} value={"+"} className='pink'>+</button>
            </div>
            <div className='box-wrapper'>
               <button onClick={inputValue} className='grey' value={0}>0</button>
                <button onClick={inputValue} className='grey' value={"."}>,</button>
                <button onClick={result} className='pink' id='result'>=</button> 
            </div>
            

        </div>
    </div>
  )
}

export default Calculator