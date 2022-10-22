import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




// Changed Student form address

import App from "./App";
import Details from "./Details";
import StudentForm from "./StudentForm";
import TeacherForm from "./TeacherForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // {console.log(props.match.params.id)}
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/coaching/:id" element={<Details />}></Route>
        <Route exact path="/home" element={<App />}></Route>
        <Route exact path="/" element={<StudentForm />}></Route>
        <Route exact path="/listing" element={<TeacherForm />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
