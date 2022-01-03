import React, {useState,useEffect} from 'react';
import List from './List';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

let allColors=[];

const Button=()=>{
  const[color,setColor]=useState('');

  function addColor(oneColor,array){
    if(oneColor!='#'){
      array.push(oneColor);
    }
    let filteredArray=[...new Set(array)].filter(c=>c!==undefined);
    return filteredArray;
  }

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
      <p>color: {color}</p>
      <button style={{color:`#${color}`}} onClick={fetchColor}>
        get random color
      </button>
      <DndProvider backend={HTML5Backend}>
        <List propString={color} propArray={allColors}/>
      </DndProvider>      
    </>
  )
}

export default Button;