import React from "react";
import Profile from "./components/Profile";
import { User } from "./components/User";
import Student from "./components/Student";
import Employee from "./components/Employee";

function App() {
  return (
    <div className="App">
      <h1>Rect ToolKit create store</h1>
      {/* <Profile/> */}
      <Student/>
      <User/>
      <Employee/>
    </div>
  );
}

export default App;
