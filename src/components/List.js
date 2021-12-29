let allColors=[];

const List=(props)=>{
  const hex='#'+props.currentColor;

  function addColor(color,array){
    array.push(color);
    let uniqueArray=[...new Set(array)];
    return uniqueArray;
  }

  allColors=addColor(hex,allColors);
  console.log(allColors);

  return(
    <>
      <h2>List of previous colors:</h2>
      <ul>
        {allColors.map(c=>(
          <li style={{color:c}}>{c}</li>
        ))}
      </ul>
    </>
  );
}

export default List;