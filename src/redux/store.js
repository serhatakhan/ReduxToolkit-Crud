import { configureStore } from "@reduxjs/toolkit";

// reducer'ları import et, 
// varsayılan (default) şeklinde import ettiğimiz için istediğimiz ismi(counterReducer)verdik
import counterReducer from "./slices/counterSlice"

import crudReducer from "./slices/crudSlice"

// configureStore - createStore farkları:
// 1- varsayılan olarak thunk kurulu gelir,
// 2- verilen reducer'ları otomatik olarak birleştirir,
// 3- devtools eklentisini destekler
export default configureStore({
    reducer: {counterReducer, crudReducer}
})

// import { Provider } from "react-redux";
// import store from "./redux/store.js";  bunların main.jsx de importları aynı 