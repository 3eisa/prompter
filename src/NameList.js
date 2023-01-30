import React from "react";

const names = ["John", "Emily", "Jessica", "Michael", "David", "Sarah", "Daniel", "Brian", "Ashley", "Amy"];

function NameList() {
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
