import React, {useState,useEffect} from 'react';
import TextInput from './TextInput';

let allColors=[];

const Button=()=>{
  const[color,setColor]=useState('');

  function addColor(oneColor,array){
    if(oneColor!='#'){
      array.push(oneColor);
    }
    return array;
  }

  //asynchronous function that fetched random color from API
  const fetchColor=async()=>{
    let colorFormat='#';
    const response=await fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`);
    const data=await response.json();
    colorFormat+=data.new_color;
    allColors=addColor(colorFormat,allColors);
    setColor(colorFormat);
  };

  useEffect(()=>{
    fetchColor();
  },[]);

  return(
    <>
      <button style={{color:color}} onClick={fetchColor}>
        get random color
      </button>
      <TextInput colorArray={allColors}/>     
    </>
  )
}

export default Button;