import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Category</h2>
            <span>Personal & Family</span>
            <span>Corporate Law</span>
            <span>Civil & Debt Matters</span>
            <span>Criminal / Property</span>
            <span>Mediators</span>
            <span>Notaries</span>
            <span>Arbitrators</span>
            <span>Document Writer</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Find a Service</span>
            <span>Post a Service</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
          </div>
          <div className="item">
            <h2>More From LegalGate</h2>
            <span>Guides & Articles</span>
            <span>Automatic Document Generator</span>
            <span>Free Legal Advice</span>
            <span>Legal Aids</span>
            <span>Indian Penal Code (IPC)</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>LegalGate</h2>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
