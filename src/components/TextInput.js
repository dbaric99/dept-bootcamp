import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import List from './List';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

const TextInput=({colorArray})=>{
  const[color,setColor]=useState('');

  useEffect(()=>{
    setColor(colorArray[colorArray.length - 1]);
  },colorArray[colorArray.length - 1]);

  let colorFromInput='';


  //checks if enter is clicked and if the input is a valid hex code and adds it to the colorArray
  function handleEnter(event){
    if(event.key==='Enter'){
      colorFromInput=event.target.value;
      const isHexCode=(c)=> /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(c);
      if(isHexCode(colorFromInput)){
        setColor(colorFromInput);
        colorArray.push(colorFromInput);
      }else{
        alert("Invalid hex code");
      }
    }
  }

  //checks that all colors are unique and not null
  let filtered=[...new Set(colorArray)].filter(c=>c!==undefined)

  return(
    <>
      <input placeholder="enter hex code" onKeyDown={handleEnter}/>
      <DndProvider backend={HTML5Backend}>
        <List color={color} allColors={filtered}/>
      </DndProvider>
    </>
  )
}

TextInput.propTypes={
  colorArray: PropTypes.array
}


export default TextInput;