import { useState } from 'react';
import '../calculator.css'

const Calculator = () =>{

    const [result, setResult] = useState<number>(0);
    const [initialVal, setInitialVal] = useState<number>(0);
    const [expression, setExpression] = useState<string | null>(null);
    
    console.log(setResult);

    const addNumber = (evt: React.MouseEvent<HTMLElement>) =>{
        let calculatedScreenVal = initialVal + (evt?.target as HTMLElement)?.innerHTML;
        setInitialVal(+calculatedScreenVal)
    }

    const addExpression = (evt: React.MouseEvent<HTMLElement>) => {
        
    }

    return (
        <div className="calculator-layout">
            <div className='calculator-result'>{initialVal}</div>
            <div className="calculator-keys">
                <div className="key first">AC</div>
                <div className="key first">+/-</div>
                <div className="key first">%</div>
                <div className="key active">÷</div>
                <div onClick={addNumber} className="key">7</div>
                <div onClick={addNumber} className="key">8</div>
                <div onClick={addNumber} className="key">9</div>
                <div className="key active">&times;</div>
                <div onClick={addNumber} className="key">4</div>
                <div onClick={addNumber} className="key">5</div>
                <div onClick={addNumber} className="key">6</div>
                <div className="key active">-</div>
                <div onClick={addNumber} className="key">1</div>
                <div onClick={addNumber} className="key">2</div>
                <div onClick={addNumber} className="key">3</div>
                <div className="key active">+</div>
                <div onClick={addNumber} className='two-span key'>0</div>
                <div className="key">.</div>
                <div className="key active">=</div>
            </div>
        </div>
    )
}

export default Calculator;