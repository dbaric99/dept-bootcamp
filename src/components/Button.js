import React,{useState,useEffect} from 'react';
import List from './List';

const Button=()=>{
  const[colors,setColors]=useState([]);
  const fetchColor=async()=>{
    const response=await fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`);
    const data=await response.json();
    setColors(data);
  };

  useEffect(()=>{
    fetchColor();
  },[]);

  return(
    <>
      <p>color: {colors.new_color}</p>
      <button style={{color:`#${colors.new_color}`}} onClick={fetchColor}>
        get random color
      </button>
      <List currentColor={colors.new_color}/>
    </>
  )
}

export default Button;