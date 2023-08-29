import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./routes/AppRouter";

// Redux action
import { fetchUser } from "./redux/slices/userSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return <AppRouter />;
};

export default App;
