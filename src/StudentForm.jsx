import axios from "axios";
import React from "react";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./studentForm.css";
export default function StudentForm() {
  
  const [name, setName] = useState("");
  const [classStudent, setClassStudent] = useState("");
  const [number, setNumber] = useState("");
  const [query, setQuery] = useState("");

  const clearForm = () => {
    setName("");
    setClassStudent("");
    setNumber("");
    setQuery("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    let data = {
      name,
      classStudent,
      number,
      query
    };
    clearForm();
    const response = await axios.post(
      "https://classown.herokuapp.com/api/composeStudent/",
      data
    );
    console.log(response);
  };

  return (
    <div>
      <Header />
      <div className="studentFormContainer">
        <h2>Query</h2>
        <p>Get a free academic counselling</p>
        <form className="studentForm" action="" onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            type="text"
            placeholder="Enter your name"
            name="name"
            id=""
            onChange={(e) => {
              setName(e.target.value);
              console.log(name);
            }}
            value={name}
            required
          />
          <input
            autoComplete="off"
            type="text"
            placeholder="Enter your class"
            name="classStudent"
            id=""
            value={classStudent}
            onChange={(e) => {
              setClassStudent(e.target.value);
              console.log(classStudent);
            }}
          />
          <input
            autoComplete="off"
            type="text"
            placeholder="Enter your number(India Only)"
            name="number"
            id=""
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
              console.log(number);
            }}
            required
          />
          <textarea
            name="query"
            id=""
            cols="40"
            rows="5"
            value={query}
            placeholder="Write your Query...."
            onChange={(e) => {
              setQuery(e.target.value);
              console.log(query);
            }}
          ></textarea>
          <input type="submit" name="" id="" />
        </form>
      </div>
      <Footer />
    </div>
  );
}
