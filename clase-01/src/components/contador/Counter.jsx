import { useState } from "react";

const Counter = () => {

    const [number, setNumber] = useState(0);

    const sumar = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            <h2 className="contador">{number}</h2>
            <button onClick={sumar}>Sumar</button>
        </div>
    )
};

export default Counter;