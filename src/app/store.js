import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "../components/Menu/MenuSlice";
import thunk from "redux-thunk";

export const store = configureStore({
   reducer:{
      menu:MenuReducer,
      middleware:[thunk]
   }
})
