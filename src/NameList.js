import React from "react";


function NameList({names}) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {names.map((name, index) => (
        <li key={index} style={{ color: 'black' }}>
          <span style={{ color: 'lightgreen', marginRight: 10 }}>&#9679;</span>
          {name}
        </li>
      ))}
    </ul>
  );
}

export default NameList;
