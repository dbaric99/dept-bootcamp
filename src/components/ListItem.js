import React,{useRef} from 'react';
import {useDrag,useDrop} from 'react-dnd';
import PropTypes from 'prop-types';

const ListItem = ({weight,color,index,moveListItem}) => {

  //hook from react-dnd library that makes the list member draggable
  const [{isDragging},dragRef]=useDrag({
    type:'item',
    item:{index},
    collect:(monitor)=>({
      isDragging:monitor.isDragging(),
    }),
  })

  //moves the item up and down on drop as on hover to make room in the list
  const [spec,dropRef]=useDrop({
    accept:'item',
    hover:(item,monitor)=>{
      const dragIndex=item.index;
      const hoverIndex=index;
      const hoverBoundingRect=ref.current?.getBoundingClientRect();
      const hoverMiddleY=(hoverBoundingRect.bottom-hoverBoundingRect.top)/2;
      const hoverActualY=monitor.getClientOffset().y-hoverBoundingRect.top;

      if(dragIndex<hoverIndex && hoverActualY<hoverMiddleY) return;

      if(dragIndex>hoverIndex && hoverActualY>hoverMiddleY) return;

      moveListItem(dragIndex,hoverIndex);
      item.index=hoverIndex;
    },
  })

  //joins drag and drop ref into one because the drag zone is also the drop zone
  const ref=useRef(null);
  const dragDropRef=dragRef(dropRef(ref));

  return (
    <div ref={dragDropRef} style={{color:color, fontWeight:weight}}>
      {color}
    </div>
  )
}

ListItem.propTypes={
  weight: PropTypes.string,
  color: PropTypes.string,
  index:PropTypes.number,
  moveListItem:PropTypes.func
}

export default ListItem;
