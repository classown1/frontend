import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import "./details.css";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";
import copy from "copy-to-clipboard";
import Header from "./components/Header";
export default function Details() {
  //   const dataVal = document.getElementById("dataVal");
  //   const change = dataVal.innerText;
  //   dataVal.innerHTML = change;
  //   const inputVal = useRef(null);
  //   const click = () => {
  //     console.log(inputVal.current.innerHtml);
  //     console.log(inputVal.current.innerText);
  //     inputVal.current.innerHtml = inputVal.current.innerText;
  //     console.log(inputVal.current.innerText);
  //     console.log(inputVal.current.innerHtml);
  //   };

  let { id } = useParams();
  //   console.log(id);
  const [data, setData] = useState({});
  const displayRef = useRef();

  const getData = () => {
    axios
      .get(`https://classown.herokuapp.com/api/coaching/${id}`)
      .then(function (res) {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("Hi");
    const change = data.content;
    displayRef.current.innerHTML = change;
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/studentForm";
  };

  return (
    <div className="details">
      <Header />
      <div className="container">
        <div className="images">
          <img className="coachingPic" src={data.coachingPic} alt="" />
          <img className="profilePic" src={data.coachingOwnerPic} alt="" />
          <h1>{data.coachingName}</h1>
        </div>
        <div id="dataVal" ref={displayRef} className="dataVal">
          {data.content}
        </div>
        <div className="button-container">
          <div>
            <a href={`tel:${data.contact}`}>
              <button type="button" className="btn btn-primary btn-lg">
                Book
              </button>
            </a>
          </div>
          <div className="mid-button">
            <a href={data.map}>
              <button type="button" className="btn btn-primary btn-lg">
                Map
              </button>
            </a>
          </div>
          <div className="mid-button">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => {
                console.log("Clicked");
                copy(window.location.href);
                alert("Copied the link");
              }}
            >
              Share
            </button>
          </div>
          <div className="last-button">
            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-primary btn-lg "
            >
              Query
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
