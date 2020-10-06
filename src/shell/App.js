import React from "react";
import "./App.css";
import "react-month-picker/css/month-picker.css";
import { Main } from "../components/main";

function App() {
  return (
    <React.Fragment>
      <header className="App-header">Should We Refinance?</header>
      <Main></Main>
    </React.Fragment>
  );
}

export default App;
