import Student from "../apis/Student";
import _ from "lodash";
import axios from "axios";
import cookie from "react-cookies";



export const getData = data => {
  console.log(data);
  return { type: "STUDENT_DETAILS", payload: data };
};
//------Works as a mater function-----//
export const getFilteredGraphData = () => {
  // console.log(data);
  return dispatch => {
    return Student.get("/1dlper").then(res => {
      console.log(res);
      let studentDataArr = _.values(res.data);
      console.log(studentDataArr);
      dispatch(getData(studentDataArr));
    });
  };
};

export const filterDataWithId = rollNo => {
  return dispatch => {
    return Student.get("1dlper").then(res => {
      let studentDtataArray = _.values(res.data);
      let selectedStudentData = studentDtataArray.find(
        detail => detail.rollNo === parseInt(rollNo)
      );
      dispatch({ type: "GRAPH_DATA", payload: selectedStudentData });
    });
  };
};

export const jsonWebServer = () => {
  return dispatch => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => dispatch(jsonServerAction(res.data)));
  };
};

export const errorAction = data => {
  return { type: "ERROR", payload: data };
};

export const jsonServerAction = data => {
  return { type: "JSON_SERVER", payload: data };
};

export const ascDescending = value => {
  console.log(value);
  return dispatch => {
    return Student.get("1dlper").then(res => {
      let studentDtataArray = _.values(res.data);
      console.log(studentDtataArray);
      if (value === "Ascending") {
        console.log("Hello");
      } else if (value === "Descending") {
        console.log("Comming to descending");
      }
      // let selectedStudentData = studentDtataArray.find(
      //   detail => detail.rollNo === parseInt(rollNo)
      // );
      // dispatch({ type: "GRAPH_DATA", payload: selectedStudentData });
    });
  };
};

// //-----Getting if you do this then while refreshing the page you will get the value blank.........
// export function getFilleterdGraph(rollNo) {
//   let newData;
//   return (dispatch, getState) => {
//     // return { type: "DATA_FOR_GRAPH", payload: getState()["detail"] };
//     newData = getState()["detail"];
//     console.log(newData);
//   };
// }
//import Student from "../apis/Student";
// import _ from "lodash";

// export const getData = () => async dispatch => {
//   const response = await Student.get("/1dlper");
//   console.log("payload", response);
//   let studentDataArr = _.values(response.data);
//   console.log(studentDataArr);
//   dispatch({ type: "STUDENT_DETAILS", payload: studentDataArr });
// };

// export const getFilteredGraphData=(data)=>{
//   console.log(data)
// }

// //----Working filtered
// import Student from "../apis/Student";
// import _ from "lodash";
// import { studentReducer } from "../reducers/StudentReducer";

// export const getData = data => {
//   console.log(data);
//   return { type: "STUDENT_DETAILS", payload: data };
// };
// //------Works as a mater function-----//
// export const getFilteredGraphData = () => {
//   // console.log(data);
//   return dispatch => {
//     return Student.get("/1dlper").then(res => {
//       console.log(res);
//       let studentDataArr = _.values(res.data);
//       console.log(studentDataArr);
//       dispatch(getData(studentDataArr));
//     });
//   };
// };
// //-----Getting
// export function getFilleterdGraph() {
//   //console.log("action", getState);
//   return (dispatch, getState) => {

//     return { type: "DATA_FOR_GRAPH", payload: getState()["detail"] };
//     // console.log(getState()["detail"]);
//   };
// }

//-----statrting one
// import Student from "../apis/Student";
// import axios from "../../../../Stephen grinder/blog/src/apis/jsonPlaceHolder";

// export const getData = () => async dispatch => {
//   const response = await Student.get("/1dlper");
//   console.log("payload", response);
//   dispatch({ type: "STUDENT_DETAILS", payload: response });
// };

//----Working filtered
//



//-------For my profile-------//
export const getEmbibeProfileData = () => {
  return dispatch => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => dispatch(jsonServerAction(res.data)));
  };
};


export const user_api=()=> {
  console.log("calling ai")
  console.log(cookie.load('uid'))
  // const headers= {
  //   uid: cookie.load('uid'),
  //   'access-token': cookie.load('access-token'),
  //   'embibe-token': cookie.load('embibe-token'),
  //   client: cookie.load('client')
  // }
  return dispatch => {
    axios
      .get("https://api.embibe.com/user_ms/1/profile/me",{headers: {
        "uid": cookie.load('uid'),
        // 'access-token': cookie.load('access-token'),
        'embibe-token': "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTIzMTgyNTE1MiwiZW1haWwiOiJkc2xfdGVzdGluZzhkZW1vQGVtYmliZS5jb20iLCJpc19ndWVzdCI6ZmFsc2UsInJvbGUiOiJzdHVkZW50IiwidGltZV9zdGFtcCI6IjIwMTktMTItMjdUMDg6NDk6MjUuOTIwWiJ9.tiun71YtWGPtMMcyGOFFgVBO9UhqbhOGFj9i-jahC3i1dx_pDPTMgMMr1Ob6kJK4Qhk8V_MRuFsT5Uc6zb1QFw",
        // client: cookie.load('client')
      }})
      .then(res => dispatch(embibeUserAction(res)));
  };





	// return axios.create({
	// 	baseURL: 'https://api.embibe.com/user_ms/1/profile/me',
	// 	headers: {
	// 		uid: getCookie(cookie_names()['uid']),
	// 		'access-token': getCookie(cookie_names()['access-token']),
	// 		'embibe-token': getCookie(cookie_names()['embibe-token']),
	// 		client: getCookie(cookie_names()['client'])
	// 	},
	// 	withCredentials: true
//	});
}


export const embibeUserAction = data => {
  return { type: "MY_USER", payload: data };
};
