// //-----Getting if you do this then while refreshing the page you will get the value blank.........
// export function getFilleterdGraph(rollNo) {
//   let newData;
//   return (dispatch, getState) => {
//     // return { type: "DATA_FOR_GRAPH", payload: getState()["detail"] };
//     newData = getState()["detail"];
//     console.log(newData);
//   };
// }
// //------Works as a mater function-----//
// export const getFilteredGraphData = () => {
//     return dispatch => {
//       return Student.get("/1dlper").then(res => {
//         console.log(res);
//         let studentDataArr = _.values(res.data);
//         console.log(studentDataArr);
//         dispatch(getData(studentDataArr));
//       });
//     };
//   };

// export const getData = () => async dispatch => {
//   const response = await Student.get("/1dlper");
//   console.log("payload", response);
//   let studentDataArr = _.values(response.data);
//   console.log(studentDataArr);
//   dispatch({ type: "STUDENT_DETAILS", payload: studentDataArr });
// };
