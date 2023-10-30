import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">Criminal Lawyer</span>
          <h1>I'm hardworking Lawyer</h1>
          <div className="user">
            <img
              className="pp"
              src="https://www.blackstonechambers.com/images/JM5_5413.2e16d0ba.fill-600x440.jpg"
              alt=""
            />
            <span>Gopal Subramanium</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://www.blackstonechambers.com/images/JM5_5413.2e16d0ba.fill-600x440.jpg"
              alt=""
            />
            <img
              src="https://3vb.com/wp-content/uploads/2022/04/Gopal-Subramanium.jpg"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gopal_Subramanium.jpg/640px-Gopal_Subramanium.jpg"
              alt=""
            />
          </Slider>
          <h2>My Services</h2>
          <p>Criminal Lawyer / Property / Legal Advice.</p>
          <div className="seller">
            <h2>About The Service Provider</h2>
            <div className="user">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gopal_Subramanium.jpg/640px-Gopal_Subramanium.jpg"
                alt=""
              />
              <div className="info">
                <span>Gopal Subramanium</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Delhi, India</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Gopal Subramanium I was born in 1958.I am a senior
                lawyer who mostly worked in the Delhi High Court and Supreme
                Court of India. I completed my education form Campus Law Centre.
                I deal with cases such as sealing of commercial buildings which
                are in the residential area and the OBC quota in public schools.
                Ill was awarded the National Law Day Award.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://t3.ftcdn.net/jpg/02/48/15/86/360_F_248158608_0ErNeAWWx6GZVDCg66jNRoPGEhHCSpaJ.jpg"
                  alt=""
                />
                <div className="info">
                  <span>Rahul Kumar</span>
                  <div className="country">
                    <span>Delhi, India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I recently had the pleasure of using his online lawyer service
                for property matters, and I must say that the experience was
                nothing short of exceptional. From start to finish, the entire
                process was smooth, efficient, and hassle-free.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://static.vecteezy.com/system/resources/thumbnails/006/859/348/small/young-boy-indian-student-portrait-photo.jpg"
                  alt=""
                />
                <div className="info">
                  <span>Yogesh Yadav</span>
                  <div className="country">
                    <span>Lucknow, India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Outstanding criminal lawyer service. Expertise and dedication
                led to a favorable outcome. Clear advice and accessibility eased
                a complex legal process. Highly recommended for top-notch
                representation in challenging legal situations.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://www.vivahonline.com/profileimages/profile_Prasanth%201.jpg"
                  alt=""
                />
                <div className="info">
                  <span>Abishekh Sinha</span>
                  <div className="country">
                    <span>Jaipur, India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Exceptional assistance from a him. His profound knowledge and
                unwavering commitment resulted in a positive resolution. He
                provided clear guidance and were easily reachable during a
                complex legal process. I highly recommend his top-tier
                representation for challenging legal circumstances.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>Criminal Lawyer</h3>
            <h2>Consultation fees: 2,000 Rs </h2>
          </div>
          <p>
            Experienced criminal lawyer offering expert legal defense, strategic
            counsel, and relentless advocacy. Your best ally in navigating the
            justice system.
          </p>
          <div className="details">
            
          </div>
          <div className="features">
          
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
