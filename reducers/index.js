const initialState = {
  name: "다현",
  age: 21,
  password: "tmtmtm",
};

const changeNickname = {
  type: "CHANGE_NICKNAME",
  data: "소희",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_NICKNAME":
      return {
        ...state,
        name: action.name,
      };
  }
};

export default rootReducer;
