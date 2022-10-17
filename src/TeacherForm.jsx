import axios from "axios";
import React from "react";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./studentForm.css";
export default function TeacherForm() {
  const [instituteName, setinstituteName] = useState("");
  const [name, setName] = useState("");
  const [address, setaddress] = useState("");
  const [number, setNumber] = useState("");
  const [query, setQuery] = useState("");

  const clearForm = () => {
    setinstituteName("");
    setName("");
    setaddress("");
    setNumber("");
    setQuery("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    let data = {
      instituteName,
      name,
      number,
      address,
      query
    };
    clearForm();
    const response = await axios.post(
      "https://classown.herokuapp.com/api/composeTeacher/",
      data
    );
    console.log(response);
  };
  return (
    <div>
      <Header />
      <div className="studentFormContainer">
        <h2>Listing!!!</h2>
        <p>Get your Institute listed with us..</p>
        <form className="studentForm" action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Institute name"
            name="instituteName"
            id=""
            autoComplete="off"
            onChange={(e) => {
              setinstituteName(e.target.value);
              console.log(instituteName);
            }}
            value={instituteName}
          />
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
            type="text"
            placeholder="Enter your number(India Only)"
            name="number"
            id=""
            autoComplete="off"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
              console.log(number);
            }}
            required
          />
          <input
            type="text"
            placeholder="Enter your address"
            name="address"
            id=""
            autoComplete="off"
            value={address}
            onChange={(e) => {
              setaddress(e.target.value);
              console.log(address);
            }}
            required
          />
          <textarea
            name="query"
            id=""
            cols="40"
            rows="5"
            placeholder="Write your Query...."
            autoCorrect="off"
            value={query}
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
