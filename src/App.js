import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import "./App.css";
import ReduxIncr from "./Containers/ReduxIncr";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ReduxIncr />
      </div>
    </Provider>
  );
}

export default App;
