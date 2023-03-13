import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./Modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer); // 스토어생성
// console.log(store.getState()); // 스토어 상태확인

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
