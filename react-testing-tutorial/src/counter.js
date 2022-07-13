import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const decrementCounter = () => {
        setCounter((prevCounter) => prevCounter - 1);
    };
    const resetCounter = () => {
        setCounter((prevCounter) => 0);
    };

    return (
        <>
            <button data-testid="increment" onClick={incrementCounter}>
                +
            </button>
            <p data-testid="counter">{counter}</p>
            <div>
                <button data-testid="decrement" onClick={decrementCounter}>
                    -
                </button>
            </div>
            <>
                <button data-testid="reset" onClick={resetCounter}>
                    reset
                </button>
            </>

        </>
    );
};

export default Counter;