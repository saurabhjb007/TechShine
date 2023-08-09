import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechShine</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who Are We?</h1>
          <p>
            "We are a tech company known as 'Techshine,' and we proudly stand as
            your exclusive solution to the myriad tech challenges encountered in
            your daily life. Our unwavering commitment to innovation and
            problem-solving sets us apart as a true leader in the tech industry.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGoogleCircle />
              </a>

              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <a href="https://www.amazon.in" target="_blank" rel="noreferrer">
                <AiFillAmazonCircle />
              </a>
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillYoutube />
              </a>
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
