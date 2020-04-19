// import React, { Component } from "react";

// class add extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       data: [
//         { id: 1, value: 0 },
//         { id: 2, value: 0 },
//         { id: 3, value: 0 }
//       ]
//     };
//   }

//   onIncrement = num => {
//     this.setState({ data: this.state.data[0].value + 1 });
//   };

//   onDecrement = num => {
//     this.setState({ data: this.state.data[0].value + 1 });
//   };

//   render() {
//     return (
//       <div>
//         {this.state.data.map(counter => (
//           <Counter
//             key={counter.id}
//             value={counter.value}
//             onIncrement={this.onIncrement}
//             onDecrement={this.onDecrement}
//           />
//         ))}
//       </div>
//     );
//   }
// }
// class Counter extends Component {
//   render() {
//     const { value } = this.props;
//     return (
//       <div className="counter">
//         <b>{value}</b>
//         <div className="counter-controls">
//           <button
//             className="button is-danger is-small"
//             onClick={this.props.onDecrement(value)}
//           >
//             -
//           </button>
//           <button
//             className="button is-success is-small"
//             onClick={this.props.onDecrement(value)}
//           >
//             +
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default add;
