import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../slices/articleSlice";
import userReducer from "../slices/userSlice";

const store = configureStore({
  reducer: {
    articles: articleReducer,
    user: userReducer,
  },
});

export default store;
