import { useState } from "react"

export const DropDown=(props)=>{
    const [style,setStyle]=useState("options");

    const handleClick=()=>{
        setStyle("options-clicked");
    }
    return (
        <div className='drop-down-container'>
            <label id="text">Should you use a drop-down?</label>
            <div className="dropdown">
                <button className="button">Select</button>
                <div className={style}>
                    {props.items.map(item=>
                    <span className="item" onClick={handleClick}>{item}</span>)}
                </div>
            </div>   
            
        </div>
    )
}