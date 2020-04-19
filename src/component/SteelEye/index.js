import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function SteelEye(props) {
  const [getItems, setItems] = useState(props.types);
//-----or
// const [getItems, setItems] = useState([]);

//-----We can use useEffect for setting state if we are not getting props initially we can use use effect
//   useEffect(() => {
//     setItems(props.items);
//   });



  function handleClick(index) {
    console.log("handle click......", index);
    props.onClick(index);
  } //if we need to set state here so Either bind this or use arrow function.

  function renderElement(item, index) {
    return (
      <li key={item.key} onClick={() => handleClick(index)}>
        {item.text}
      </li>
    );
  }

  return (
    <ul style={{ backgroundColor: "red", height: 100 }}>
      {/* //----need to place the condition */}
      {getItems &&
        getItems.map((item, i) => {
          //----should return something
          return renderElement(item, i);
        })}
    </ul>
  );
}

SteelEye.defaultProps = {
  onClick: i => {
    console.log("comming to onClick");
    return i;
  },
//   items: [
//     { key: 0, text: 1 },
//     { key: 1, text: 2 },
//     { key: 3, text: 2 },
//     { key: 2, text: 3 }
//   ]
};
SteelEye.protoType = {
  types: PropTypes.array,
  onClick: PropTypes.func
};

// import React from 'react'
// import PropTypes from 'prop-types';

// class SteelEye extends React.Component {
//   constructor (props) {
//       super(props);
//     this.state = { items: props.items }
//   }

// //   shouldComponentUpdate (nextProps) {
// //       console.log(nextProps,".......nect props")
// //     return nextProps.items !== this.props.items
// //   } if state changes this lifecycle called.
// //if state changes only the shouldComponentUpdate() lifecycle function is triggered.

// // getDerivedStateFromProps(){
// //     return ''
// // } When the passed props change getDerivedStateFromProps()

//   handleClick (index) {
//       console.log("handle click......",index)
//     this.props.onClick(index)
//   }//if we need to set state here so Either bind this or use arrow function.

//   renderElement (item, index) {
//       console.log(item,".......item",index);
//     return <li key={item.key} onClick={() => this.handleClick(index)}>{item.text}</li>
//   }

//   render () {
//     return (
//       <ul style={{ backgroundColor: 'red', height: 100 }}>
//           {/* //----need to place the condition */}
//         {this.state.items && this.state.items.map((item, i) =>{
//             //----should return something
//             return(
//                 this.renderElement(item, i)
//             )
//         })
//     }
//       </ul>
//     )
//   }
// }
// export default SteelEye;

// //----default props
// SteelEye.defaultProps={
//     onClick:(i)=>{console.log("comming to onClick");return i},
//     items:[{key:0,text:1},{key:1,text:2},{key:3,text :2},{key:2,text:3}]
// }
// SteelEye.protoType={
//     types:PropTypes.array
// }
