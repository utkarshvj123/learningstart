import { combineReducers } from "redux";
import { studentReducer, graphData, jsonServerReducer,embibeMyProfile } from "./StudentReducer";

export default combineReducers({
  detail: studentReducer,
  singleStudentData: graphData,
  jsonWeb: jsonServerReducer,
  embibe:embibeMyProfile,

});
console.log("Calling the main reducer");
