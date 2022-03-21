import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    const [list, setList] = useState([])

    const handleInc = () => {
        setCount(count + 1)
    }

    const handleDec = () => {
        count !== 0? setCount(count - 1) : alert("Reached Zero")
    }

    const handleCapture= () => {
        setList([...list ,count])
    }
    // console.log(list)
    return ( 
        <div>
            <h4>Count : {count}</h4>
            <button onClick={handleInc}>Increment</button>
            <button onClick = {handleDec} >Decrement</button>
            <button onClick={handleCapture}>Capture</button>
            <ul>
                {list.map((num)=>{
                    return <li>{num}</li>
                })}
            </ul>
        </div>
     );
}

export default Counter;