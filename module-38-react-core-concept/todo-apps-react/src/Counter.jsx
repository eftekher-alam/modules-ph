import { useState } from "react";

function Counter() {
    const initialValue = 1;
    const [count, setStateChange] = useState(initialValue);

    function handelCountInc() {
        let newCount = count + 1;
        setStateChange(newCount);
    }

    function handelCountDec() {
        let newCount = count - 1;
        setStateChange(newCount)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handelCountInc}>Increase</button>
            <button onClick={handelCountDec}>Decrease</button>
        </div>
    );
}

export default Counter;