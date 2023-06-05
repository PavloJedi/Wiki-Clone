import React, { useContext, useEffect } from "react";
import AppRouter from "./routes/AppRouter";

//Context
import { CurrentUserContext } from "./context/AppProvider";

const App = () => {
  const { fetchUser } = useContext(CurrentUserContext);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;
