import React,{useState,useEffect,useCallback} from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List=({color,allColors})=>{ 
  const[colors,setColors]=useState(allColors);
  
  useEffect(()=>{
    setColors(allColors);
  },[allColors])

  //the functions receives two indices and swaps their positions
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
        {colors.map((c,index)=>(
          <ListItem
            weight={c===color ? 'bold' : 'normal'}
            index={index}
            color={c}
            moveListItem={moveColorListItem}
          />
        ))}
      </div>  
    </>
  );
}

List.propTypes={
  color: PropTypes.string,
  allColors: PropTypes.array
}

export default List;

