import React,{useRef} from 'react';
import {useDrag,useDrop} from 'react-dnd';
import PropTypes from 'prop-types';

const ListItem = ({weight,text,index,moveListItem}) => {

  const [{isDragging},dragRef]=useDrag({
    type:'item',
    item:{index},
    collect:(monitor)=>({
      isDragging:monitor.isDragging(),
    }),
  })

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

  const ref=useRef(null);
  const dragDropRef=dragRef(dropRef(ref));

  return (
    <div ref={dragDropRef} style={{color:text, fontWeight:weight}}>
      {text}
    </div>
  )
}

ListItem.propTypes={
  weight: PropTypes.string,
  text: PropTypes.string,
  index:PropTypes.number,
  moveListItem:PropTypes.func
}

export default ListItem;
