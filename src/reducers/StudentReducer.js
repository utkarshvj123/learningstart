export const studentReducer = (state = [], action) => {
  switch (action.type) {
    case "STUDENT_DETAILS":
      console.log(action, "Reducer call");
      return action.payload;
    default:
      return state;
  }
};

export const graphData = (state = [], action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "GRAPH_DATA":
      return action.payload;
    default:
      return state;
  }
};

export const ascDesc = (state = [], action) => {
  switch (action.type) {
    case "ASC_DESC":
      return action.payload;
    default:
      return state;
  }
};

export const jsonServerReducer = (state = [], action) => {
  switch (action.type) {
    case "JSON_SERVER":
      return action.payload;
    default:
      return state;
  }
};




//-----embibe user=---//
export const embibeMyProfile = (state = [], action) => {
  switch (action.type) {
    case "MY_USER":
      return action.payload;
    default:
      return state;
  }
};