import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = {
    id: 1,
    username: "Dev",
    isSeller: false,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">LegalGate</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Prince ka  Business</span>
          <span>Explore</span>
          <span>English</span>
          {!currentUser?.isSeller && <span>List your Service</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="link" to="/add">
                      Add New Gig
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" to="/">
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Personal & Family
            </Link>
            <Link className="link menuLink" to="/">
              Corporate Law
            </Link>
            <Link className="link menuLink" to="/">
            Civil & Debt Matters
            </Link>
            <Link className="link menuLink" to="/">
            Criminal / Property
            </Link>
            <Link className="link menuLink" to="/">
            AI Document Generator
            </Link>
            <Link className="link menuLink" to="/">
            Guides & Articles
            </Link>
            <Link className="link menuLink" to="/">
            Get Free Legal Advice
            </Link>
            <Link className="link menuLink" to="/">
              Divorce
            </Link>
            <Link className="link menuLink" to="/">
            Other Resources
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
