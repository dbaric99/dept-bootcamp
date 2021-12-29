import React,{useState,useEffect} from 'react';

const Button=()=>{
  const[colors,setColors]=useState([]);
  const fetchColor=async()=>{
    const response=await fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`);
    const data=await response.json();
    setColors(data);
    console.log(JSON.stringify(data));
  };

  useEffect(()=>{
    fetchColor();
  },[]);

  return(
    <>
      <p>color: {colors.new_color}</p>
      <button onClick={fetchColor}>
        shuffle
      </button>
    </>
  )
}

export default Button;