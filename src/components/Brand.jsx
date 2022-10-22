import React from "react";

export default function Brand() {
  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //     <div className="container-fluid container">
    //       <a className="navbar-brand" href="/home">
    //         Classown
    //       </a>
    //     </div>
    //   </nav>{" "}
    // </div>
    <section className="branding-section">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid container">
          <a className="navbar-brand" href="/">
            Classown
          </a>
        </div>
      </nav>{" "}
      <div className="branding-section-text">
        &ldquo;Classown&rdquo; <br />{" "}
        <span className="border-txt">
          A curated list of Coaching institutes
        </span>
        <br /> Search &#8231; Compare &#8231; Join
      </div>
    </section>
  );
}
