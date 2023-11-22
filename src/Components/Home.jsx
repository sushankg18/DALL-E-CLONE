import React, { useState, useEffect } from "react";
import "../Styles/Home.scss";
import { MdOutlineArrowOutward } from "react-icons/md";
import HomeVideo from "../Assets/HOME-VIDEO.mp4";

const Home = () => {
  const [firstCard, setFirstCard] = useState([]);

  useEffect(() => {
    const lineOneCardObj = [
      {
        img: "https://images.openai.com/blob/c3ca91b1-f41d-4ba0-84b2-84b2b9c0530e/dall-e-api-now-available-in-public-beta.jpg?width=800",
        title: "DALL·E API now available in public beta",
        date: "Nov 3, 2022",
      },
      {
        img: "https://images.openai.com/blob/6aec296d-b9b9-4f4e-93a0-216717ec533b/dall-e-2-extending-creativity.jpg?trim=0,0,0,0&width=800",
        title: "DALL·E 2: Extending creativity",
        date: "Jul 14, 2022",
      },
      {
        img: "https://images.openai.com/blob/5f1ce4c2-c06b-4d4d-828a-e90c89680db4/dall-e-now-available-without-waitlist.jpg?trim=0,0,0,0&width=800",
        title: "DALL·E now available without waitlist",
        date: "Sep 28, 2022",
      },
      {
        img: "https://images.openai.com/blob/4ac9a574-3713-43ac-9423-ce39eaafa783/dall-e-introducing-outpainting.jpeg?trim=0,427,0,439&width=800",
        title: "DALL·E: Introducing outpainting",
        date: "Aug 31, 2022",
      },
    ];
    setFirstCard(lineOneCardObj);
  }, []);

  console.log(firstCard);
  return (
    <>
      <div className="Home-component">
        <div className="home-component-items">
          <div className="home-component-items-div-1">
            <p>Research</p>
            <h1>DALL&#183;E 2</h1>
            <p className="home-one-line-para">
              DALL·E 2 is an AI system that can create realistic images and art
              from a description in natural language.
            </p>
          </div>
          <div className="home-component-items-bottom">
            <p className="home-component-items-bottom-p1">
              Try DALL&#183;E <MdOutlineArrowOutward />
            </p>
            <p className="home-component-items-bottom-p2">
              Follow on Instagram <MdOutlineArrowOutward />
            </p>
          </div>
        </div>
      </div>

      <div className="Big-video">
        <video className="Big-video-Video" muted controls>
          <source src={HomeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="vertical-line"></div>

      {/* HOME PAGE PART 3 */}

      <div className="Home-part-3">
        <div className="Home-part-3-top">
          <p>Latest Updates</p>
          <p>View All Updates</p>
        </div>

        {/* FIRST LINE CARDS */}

        <div className="Home-part-3-cards">
          {firstCard.map((item) => (
            <div className="Home-part-3-card" key="">
              <div className="Home-part-3-card-img">
                <img src={item.img} alt="Card Image" />
              </div>
              <p>{item.title}</p>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="vertical-line"></div>

      {/* HOME PAGE PART 4  */}

      <div className="Home-part-4">
        <div className="Home-part-4-heading">
          <p>
            DALL·E 2 can create original, realistic images and art from a text
            description. It can combine concepts, attributes, and styles.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

// ALL IMAGES THAT GONNA USE IN PROJECT
// https://images.openai.com/blob/5e490f66-703f-4228-8a0c-ccfeddee81a4/clip.jpg?width=800
// https://images.openai.com/blob/d22f177f-5116-4b3b-bdc8-0a55cce4bd00/dall-e-2-pre-training-mitigations.jpg?trim=0,0,0,0&width=800
// https://images.openai.com/blob/ed21faee-ce44-4d91-a70f-26538ad66d5b/dall-e.jpg?trim=0,0,0,0&width=800
// https://images.openai.com/blob/7c44eedc-3563-4438-9fb0-ea297250807e/hierarchical-text-conditional-image-generation-with-clip-latents.jpg?trim=0,0,0,0&width=800
// https://images.openai.com/blob/d3b684dc-eb13-4fbd-a77e-0a397e059fef/dall-e-2.jpg?trim=0,0,0,0&width=2000
// https://images.openai.com/blob/d3b684dc-eb13-4fbd-a77e-0a397e059fef/dall-e-1.jpg?trim=0,0,0,0&width=2000
// https://images.openai.com/blob/8a2b0833-55f2-44d6-bf4f-85f9471078f5/Anastronautridingahorseinaphotorealisticstyle6.jpg?trim=0,0,0,0&width=2000
//
//
//
//
