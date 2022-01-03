import React,{useState,useEffect,useCallback} from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List=(props)=>{ 
  const[colors,setColors]=useState(props.propArray);

  useEffect(()=>{
    setColors(props.propArray);
  },[props.propArray])

  const moveColorListItem=useCallback(
    (dragIndex,hoverIndex)=>{
      const dragItem=colors[dragIndex];
      const hoverItem=colors[hoverIndex];

      setColors(colors=>{
        const updatedColors=[...colors];
        updatedColors[dragIndex]=hoverItem;
        updatedColors[hoverIndex]=dragItem;
        return updatedColors;
      })
    },
    [colors],
  )

  return(
    <>
      <h2>List of previous colors:</h2>  
      <div>
        {colors.map((color,index)=>(
          <ListItem
            weight={color===props.propString ? 'bold' : 'normal'}
            index={index}
            text={color}
            moveListItem={moveColorListItem}
          />
        ))}
      </div>  
    </>
  );
}

List.propTypes={
  propString: PropTypes.string,
  propArray: PropTypes.array
}

export default List;

