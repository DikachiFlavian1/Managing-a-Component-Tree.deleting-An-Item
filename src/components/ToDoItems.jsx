import React from "react";
/*function toDoItems(props) {
  return <li>{props.text}</li>;
}
*/

function toDoItems(props) {
  //function handleClick() {}

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}
export default toDoItems;
