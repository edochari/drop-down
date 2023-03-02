import { useState } from "react"
import { FaAngleDown } from "react-icons/fa";
export const DropDown=(props)=>{
    
    const [showMenu,setShowMenu]=useState(false);
    const [selectedValue,setSelectedValue]=useState(null);
   
    const getDisplay=()=>{
            if(selectedValue){
                return selectedValue;
            }
            return `select ... `;
    }
    const handleClick=(item)=>{
        setSelectedValue(item);
        setShowMenu(false);
        console.log("selected",item);
    }

    return (
        <div className='drop-down-container'>
            <label id="text">Should you use a drop-down?</label>
            <div className="dropdown">
                <div className="dropdown-box">
                    <button className="button"  onMouseEnter={() => setShowMenu(true)}>{getDisplay()}</button>
                    <FaAngleDown style={{ marginTop: 6,marginBottom:0}}/>
                </div>
                {showMenu && 
                <div className="options">
                    {props.items.map(item=>
                    <span className="item" onClick={()=>handleClick(item)}>{item}</span>)}
                </div>
                }
            </div>   
            
        </div>
    )
}