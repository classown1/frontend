import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="py-3 my-4 classown-footer">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3 container">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/studentForm" className="nav-link px-2 text-muted">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a href="/listing" className="nav-link px-2 text-muted">
              Listing!!
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">&copy; 2021 Classown</p>
      </footer>
    </>
  );
}
