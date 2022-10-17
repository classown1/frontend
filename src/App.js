import "./app.css";
import CoachingCard from "./CoachingCard";
import CategoryCard from "./CategoryCard";
import Footer from "./components/Footer";
import Brand from "./components/Brand";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
export const CatContext = React.createContext();
function Header() {
  const [profiles, setProfiles] = useState([]);
  const [constProfiles, constSetProfiles] = useState([]);
  const [catProfiles, catSetProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState(" ");
  const [cat, setCat] = useState("all");

  const profileSetter = () => {
    axios.get("https://classown.herokuapp.com/coaching").then(function (res) {
      setProfiles(res.data);
      constSetProfiles(res.data);
      catSetProfiles(res.data);
    });
  };

  useEffect(() => {
    profileSetter();
  }, []);

  const WordMatch = () => {
    if (searchTerm === "") {
      setProfiles(catProfiles);
    } else {
      let newDevelopers = [];
      newDevelopers = catProfiles.filter((developer) => {
        return developer["coachingName"]
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
      });
      setProfiles(newDevelopers);
    }
  };

  const changeCat = () => {
    if (cat === "All") {
      setProfiles(constProfiles);
    } else {
      let newList = [];
      newList = constProfiles.filter((inst) => {
        return inst.category.includes(cat.toLocaleLowerCase());
      });
      catSetProfiles(newList);
      setProfiles(newList);
    }
  };

  useEffect(() => {
    WordMatch();
  }, [searchTerm]);

  useEffect(() => {
    changeCat();
  }, [cat]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <CatContext.Provider value={{ cat, setCat }}>
      <>
        <section className="categories">
          <h2>Categories</h2>
          <div className="category-conatainer container">
            <CategoryCard icon="fa-solid fa-atom" title={"Physics"} />
            <CategoryCard icon="fa-solid fa-flask" title={"Chemistry"} />
            <CategoryCard icon="fa-solid fa-calculator" title={"Maths"} />
            <CategoryCard icon="fa-solid fa-microscope" title={"Biology"} />
            <CategoryCard icon="fa-solid fa-cash-register" title={"Commerce"} />
            <CategoryCard icon="fa-solid fa-arrow-up-a-z" title={"English"} />

            <CategoryCard icon="fa-solid fa-scale-balanced" title={"Arts"} />
            <CategoryCard icon="fa-solid fa-building-columns" title={"Bank"} />
            <CategoryCard icon="fa-solid fa-arrow-up-a-z" title={"All"} />
          </div>
        </section>
        <section className="container search-box">
          <input
            type="search"
            className="form-search"
            placeholder="Search Coaching Institutes"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <div className="form-btn">
            <button className="form-btn-search" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </section>
        <section className="coaching-section">
          <h2>Coaching</h2>
          <div className=" container">
            <Slider {...settings}>
              {profiles.map((user) => (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/coaching/${user._id}`}
                  key={user._id}
                >
                  <CoachingCard
                    className="user"
                    coachingName={user.coachingName}
                    coachingOwnerName={user.coachingOwnerName}
                    address={user.address}
                    fees={user.fees}
                    class={user.class}
                    key={user._id}
                    coachingOwnerPic={user.coachingOwnerPic}
                  />
                </Link>
              ))}
            </Slider>
          </div>
        </section>
      </>
    </CatContext.Provider>
  );
}

function App() {
  return (
    <div className="App">
      <Brand />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
