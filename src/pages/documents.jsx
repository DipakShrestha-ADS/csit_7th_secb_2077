import { useEffect, useState } from "react";
import Navbar from "../components/navbar";

const Documents = () => {
    const [count, setCount] = useState(0)
    const [isEven, setIsEven] = useState(true)
    useEffect(
        //callback function
        () => {
            if(count % 2 == 0){
                setIsEven(true)
            }else{
                setIsEven(false)
            }
        },
        //dependencies
        [count]
    )
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <>
            <Navbar title={"Documents Page"} />
            <h1>Documents Page</h1>
            <p>Count Value :
                <span style={{ fontSize: '50px', color: 'red' }}>{count}</span>
            </p>
            <button onClick={handleIncrement}>Incrment</button>
            <p>Count Value :
                <span style={{ fontSize: '50px', color: 'red' }}>{isEven ? "Even" : "Odd"}</span>
            </p>

        </>
    );
}
export default Documents;