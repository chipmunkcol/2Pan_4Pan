// // src/redux/modules/config/configStore.js


// // 원래 있던 코드
// import { createStore } from "redux";
// import { combineReducers } from "redux";

// // 새롭게 추가한 부분
// import counter from "./redux/modules/counter";

// const rootReducer = combineReducers({
//   counter: counter, // <-- 새롭게 추가한 부분
// });
// const store = createStore(rootReducer);

// export default store;

import { createStore } from "redux";
// import { combineReducers } from "redux";

// 새롭게 추가한 부분
import detail from "./redux/modules/detailSlice";  // detail 이름은 자유
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { detail },
});

export default store;