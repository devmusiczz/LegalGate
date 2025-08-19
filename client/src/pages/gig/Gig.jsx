import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gig.scss";

function Gig() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="gig">
      <div className="container">
        {/* LEFT SIDE */}
        <div className="left">
          <span className="breadcrumbs">Criminal Lawyer</span>
          <h1>I am hardworking Lawyer</h1>

          {/* USER INFO */}
          <div className="user">
            <img
              className="pp"
              src="https://www.blackstonechambers.com/images/JM5_5413.2e16d0ba.fill-600x440.jpg"
              alt="profile"
            />
            <span>Gopal Subramanium</span>
            <div className="stars">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <img key={i} src="/img/star.png" alt="star" />
                ))}
              <span>5</span>
            </div>
          </div>

          {/* IMAGE SLIDER */}
          <Slider {...settings} className="slider">
            <img
              src="https://www.blackstonechambers.com/images/JM5_5413.2e16d0ba.fill-600x440.jpg"
              alt="Slide 1"
            />
            <img
              src="https://3vb.com/wp-content/uploads/2022/04/Gopal-Subramanium.jpg"
              alt="Slide 2"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gopal_Subramanium.jpg/640px-Gopal_Subramanium.jpg"
              alt="Slide 3"
            />
          </Slider>

          <h2>My Services</h2>
          <p>Criminal Lawyer / Property / Legal Advice.</p>

          {/* ABOUT SELLER */}
          <div className="seller">
            <h2>About The Service Provider</h2>
            <div className="user">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gopal_Subramanium.jpg/640px-Gopal_Subramanium.jpg"
                alt="seller"
              />
              <div className="info">
                <span>Gopal Subramanium</span>
                <div className="stars">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <img key={i} src="/img/star.png" alt="star" />
                    ))}
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
                My name is Gopal Subramanium, born in 1958. I am a senior lawyer
                who mostly worked in the Delhi High Court and Supreme Court of
                India. I completed my education from Campus Law Centre. I deal
                with cases such as sealing of commercial buildings which are in
                residential areas and the OBC quota in public schools. I was
                awarded the National Law Day Award.
              </p>
            </div>
          </div>

          {/* REVIEWS */}
          <div className="reviews">
            <h2>Reviews</h2>

            {/* REVIEW ITEM */}
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://t3.ftcdn.net/jpg/02/48/15/86/360_F_248158608_0ErNeAWWx6GZVDCg66jNRoPGEhHCSpaJ.jpg"
                  alt="reviewer"
                />
                <div className="info">
                  <span>Rahul Kumar</span>
                  <div className="country">
                    <span>Delhi, India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <img key={i} src="/img/star.png" alt="star" />
                  ))}
                <span>5</span>
              </div>
              <p>
                I recently had the pleasure of using his online lawyer service
                for property matters, and I must say that the experience was
                nothing short of exceptional.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="like" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="dislike" />
                <span>No</span>
              </div>
            </div>

            <hr />

            {/* You can keep other reviews the same way */}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <div className="price">
            <h3>Criminal Lawyer</h3>
            <h2>Consultation fees: 2,000 Rs</h2>
          </div>
          <p>
            Experienced criminal lawyer offering expert legal defense, strategic
            counsel, and relentless advocacy.
          </p>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
