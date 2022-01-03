import React,{useState} from 'react';
import List from './List';

const TextInput=(props)=>{

  const[color,setColor]=useState('');

  if(props.colorFromButton!=''){
    setColor(props.colorFromButton);
  }

  function handleEnter(event){
    if(event.key==='Enter'){
      let currentColor=event.target.value;
      const isHexCode=(c)=> /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(c);
      if(isHexCode(currentColor)){
        setColor(currentColor);
      }else{
        alert("Invalid hex code");
      }
      console.log(color);
    }
  }

  return(
    <>
      <input placeholder="enter hex code" onKeyDown={handleEnter}/>
      <List currentColor={color}/>
    </>
  )
}
TextInput.defaultProps='';

export default TextInput;