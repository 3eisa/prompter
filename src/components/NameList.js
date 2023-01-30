import React from "react";


//returns a bullet list from names prop
function NameList({names}) {
  return (
    <>
    <button className="new-plan">+ New Plan</button>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {names.map((name, index) => (
        <li key={index} style={{ color: 'black' }}>
          <span style={{ color: 'lightgreen', marginRight: 10 }}>&#9679;</span>
          {name}
        </li>
      ))}
    </ul>
    </>
  );
}

export default NameList;
