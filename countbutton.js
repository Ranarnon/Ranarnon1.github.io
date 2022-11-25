import React, {useState}from "react"


const CountButton= (props)=>{
  const [currentcount, setcurrentcount] = useState(0)
  const handleClick = () =>{
    setcurrentcount(currentcount + props.incrementBy)
  }
   
 const btnstyle ={
    background: props.color ,
    borderRadius: "10px" ,
    color: "red"
    
}  
    return <div>
        <button style={btnstyle} onClick={handleClick}>+{props.incrementBy}</button>
        <div>{currentcount}</div>
    </div>
}

export default CountButton