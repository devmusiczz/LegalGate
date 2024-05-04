import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
            <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance Legal Service Providers at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just case-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you will pay upfront. Your payment is not released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
          <iframe width="750" height="400" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></iframe>
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the legalplace</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://img.freepik.com/free-photo/lawyer-with-client_23-2147984180.jpg?size=626&ext=jpg&ga=GA1.1.354228685.1698697071&semt=sph"
                alt=""
              />
              <div className="line"></div>
              <span>Advocates</span>
            </div>
            <div className="item">
              <img
                src="https://img.freepik.com/free-vector/book-online-reading-digital-library-e-reading-ebooks-archive-internet-bookstore-mobile-ereader-document-text-editing-creative-writing_335657-3443.jpg?size=626&ext=jpg&ga=GA1.1.354228685.1698697071&semt=ais"
                alt=""
              />
              <div className="line"></div>

              <span>Document Writers</span>
            </div>
            <div className="item">
              <img
                src="https://img.freepik.com/free-vector/mediation-flat-isometric-business-conflict_126523-2002.jpg?size=626&ext=jpg&ga=GA1.1.354228685.1698697071&semt=sph"
                alt=""
              />
              <div className="line"></div>
              <span>Mediators</span>
            </div>
            <div className="item">
              <img
                src="https://img.freepik.com/free-vector/notary-services-isometric-colored-composition-with-last-will-testament-document-vector-illustration_1284-82462.jpg?size=626&ext=jpg&ga=GA1.1.354228685.1698697071&semt=sph"
                alt=""
              />
              <div className="line"></div>
              <span>notaries</span>
            </div>
            <div className="item">
              <img
                src="https://img.freepik.com/premium-photo/real-estate-house-arbitration_1016675-3877.jpg?size=626&ext=jpg&ga=GA1.1.354228685.1698697071&semt=sph"
                alt=""
              />
              {/* <div className="line"></div>
              <span>Arbitrators</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              /> */}
              {/* <div className="line"></div> */}
              <span>Arbitrator</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              liverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div> */}
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
