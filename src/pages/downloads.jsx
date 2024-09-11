import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";

const Download = () => {
    const [countTimer, setCountTimer] = useState(0)
    useEffect(
        ()=>{
            setTimeout(
                ()=>{
                    setCountTimer(
                        (prev)=>countTimer + 1
                    )
                },
                1000
            )
        }
    )
    const titleRef = useRef()
    const changeTitleStyle = ()=>{
        titleRef.current.style = "color: blue; font-size:40px;"
        titleRef.current.style.fontStyle = "italic"
    }
    const inputRef = useRef()
    const handleFocus = ()=>{
        inputRef.current.focus()
    }
    const handleUnFocus = ()=>{
        inputRef.current.blur()
    }
    return (
        <>
            <Navbar title={"Download Page"} />
            <h1 onClick={changeTitleStyle} ref={titleRef}>Download Page</h1>
            <p>Timer :
                <span style={{ fontSize: '50px', color: 'red' }}>{countTimer}</span>
            </p>
            <input type="text" ref={inputRef}/>
            <br/><br/>
            <button onClick={handleFocus}>Focus</button>&nbsp; &nbsp;
            <button onClick={handleUnFocus}>UnFocus</button>
        </>
    );
}
export default Download;