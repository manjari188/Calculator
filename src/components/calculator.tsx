import { useState } from 'react';
import '../calculator.css'

const Calculator = () =>{

    const [result, setResult] = useState<number>(0)
    return (
        <div className="calculator-layout">
            <div className='calculator-result'>{result}</div>
            <div className="calculator-keys">
                <div className="key first">AC</div>
                <div className="key first">+/-</div>
                <div className="key first">%</div>
                <div className="key active">÷</div>
                <div className="key">7</div>
                <div className="key">8</div>
                <div className="key">9</div>
                <div className="key active">&times;</div>
                <div className="key">4</div>
                <div className="key">5</div>
                <div className="key">6</div>
                <div className="key active">-</div>
                <div className="key">1</div>
                <div className="key">2</div>
                <div className="key">3</div>
                <div className="key active">+</div>
                <div className='two-span key'>0</div>
                <div className="key">.</div>
                <div className="key active">=</div>
            </div>
        </div>
    )
}

export default Calculator;