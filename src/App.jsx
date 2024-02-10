import React from "react";
import { Provider } from "react-redux";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="h-full grid grid-rows-[2fr_4fr] dark:bg-black bg-slate-200">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
