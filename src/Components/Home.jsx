import React, { useState, useEffect } from "react";
import "../Styles/Home.scss";
import { MdOutlineArrowOutward } from "react-icons/md";
import HomeVideo from "../Assets/HOME-VIDEO.mp4";
import LastVideo from "../Assets/in-visible-effect-video.mp4";
import { FaArrowUpLong } from "react-icons/fa6";
import { LuConstruction } from "react-icons/lu";
import Logo from "../Assets/openai-logo.png";
import "../Styles/HomeMediaQueries.scss"
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

  const [secondCard, setSecondCard] = useState([]);
  useEffect(() => {
    const lineSecondCardObj = [
      {
        img: "https://images.openai.com/blob/7c44eedc-3563-4438-9fb0-ea297250807e/hierarchical-text-conditional-image-generation-with-clip-latents.jpg?trim=0,0,0,0&width=800",
        title:
          "Hierarchical text-conditional image generation with CLIP latents",
        date: "Apr 13, 2022",
      },
      {
        img: "https://images.openai.com/blob/ed21faee-ce44-4d91-a70f-26538ad66d5b/dall-e.jpg?trim=0,0,0,0&width=800",
        title: "DALL·E: Creating images from text",
        date: "Jan 5, 2021",
      },
      {
        img: " https://images.openai.com/blob/d22f177f-5116-4b3b-bdc8-0a55cce4bd00/dall-e-2-pre-training-mitigations.jpg?trim=0,0,0,0&width=800",
        title: "DALL·E 2 pre-training mitigations",
        date: "Jun 28, 2022",
      },
      {
        img: "https://images.openai.com/blob/5e490f66-703f-4228-8a0c-ccfeddee81a4/clip.jpg?width=800",
        title: "CLIP: Connecting text and images",
        date: "Jan 5, 2021",
      },
    ];
    setSecondCard(lineSecondCardObj);
  }, []);

  const backToTopBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
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

      <div className="Home-part-5">
        <p>Image generation</p>
        <p>Outpainting </p>
        <p>Inpaintaing</p>
        <p>Variations</p>
      </div>
      <div className="vertical-line-gray"></div>

      <div className="Home-part-5-main-part">
        <div className="Home-pt-5-left">
          <p>
            DALL·E 2 can create original, realistic images and art from a text
            description. It can combine concepts, attributes, and styles.
          </p>
          <p>
            Try DALL·E <MdOutlineArrowOutward />
          </p>
        </div>
        <div className="Home-pt-5-right">
          <div className="Home-pt-5-right-div">
            <div className="Home-pt-5-right-div-header">
              <p>Input</p>
              <p>An astronaut riding a horse in photorealistic style.</p>
            </div>
            <div className="Home-pt-5-right-div-images">
              <p>Output</p>
              <img
                src="https://images.openai.com/blob/8a2b0833-55f2-44d6-bf4f-85f9471078f5/Anastronautridingahorseinaphotorealisticstyle6.jpg?trim=0,0,0,0&width=2000"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="Home-part-6">
        <p className="Home-part-6-heading">
          In January 2021, OpenAI introduced DALL·E. One year later, our newest
          system, DALL·E 2, generates more realistic and accurate images with 4x
          greater resolution.
        </p>
      </div>
      <div className="Home-part-7-images">
        <div className="Home-part-7-image1">
          <img
            src="https://images.openai.com/blob/d3b684dc-eb13-4fbd-a77e-0a397e059fef/dall-e-1.jpg?trim=0,0,0,0&width=2000"
            alt=""
          />
          <p>DALL·E 1</p>
        </div>
        <div className="Home-part-7-image2">
          <img
            src="https://images.openai.com/blob/d3b684dc-eb13-4fbd-a77e-0a397e059fef/dall-e-2.jpg?trim=0,0,0,0&width=2000"
            alt=""
          />
          <p>DALL·E 2</p>
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="Home-part-8">
        <div className="Home-pt-8-up">
          <p>DALL·E 2 is preferred over</p>
          <p>DALL·E 1 when evaluators</p>
          <p>compared each model.</p>
        </div>
        <div className="Home-pt-8-down">
          <div>
            <p>71.7%</p>
            <p>prefered for caption matching</p>
          </div>
          <div>
            <p>88.8%</p>
            <p>preferred for photorealism</p>
          </div>
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="Home-part-9">
        <div className="Home-pt-9-nav">
          <p>Related research</p>
          <p>View all research</p>
        </div>

        {/* SECOND LINE CARD  */}

        <div className="Home-pt-9-images">
          {secondCard.map((item) => (
            <div className="Home-part-9-card" key="">
              <div className="Home-part-9-card-img">
                <img src={item.img} alt="Card Image" />
              </div>
              <p>{item.title}</p>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="Home-part-10">
        <div className="Home-pt-10-line-1">
          <div>A focus on safety</div>
          <div>
            DALL·E 2 began as a research project and is now available in beta.
            Safety mitigations we have developed and continue to improve upon
            include:
          </div>
        </div>

        <div className="Home-pt-10-line-2">
          <div>Preventing harmful generations</div>
          <div className="Home-pt10-l2-div">
            <p>
              We’ve limited the ability for DALL·E 2 to generate violent, hate,
              or adult images. By removing the most explicit content from the
              training data, we minimized DALL·E 2’s exposure to these concepts.
              We also used advanced techniques to prevent photorealistic
              generations of real individuals’ faces, including those of public
              figures.
            </p>
            <p>Read about improving safety</p>
          </div>
        </div>

        <div className="Home-pt-10-line-3">
          <div>Curbing misuse</div>
          <div className="Home-pt10-l3-div">
            <p>
              Our content policy does not allow users to generate violent,
              adult, or political content, among other categories. We won’t
              generate images if our filters identify text prompts and image
              uploads that may violate our policies. We also have automated and
              human monitoring systems to guard against misuse.
            </p>
            <p>
              Read content policy <MdOutlineArrowOutward />
            </p>
          </div>
        </div>

        <div className="Home-pt-10-line-4">
          <div>Phased deployment based on learning</div>
          <div className="Home-pt10-l4-div">
            <p>
              Learning from real-world use is an important part of developing
              and deploying AI responsibly. We began by previewing DALL·E 2 to a
              limited number of trusted users. As we learned more about the
              technology’s capabilities and limitations, and gained confidence
              in our safety systems, we slowly added more users and made DALL·E
              available in beta in July 2022.
            </p>
            <p>
              View risks and limitations <MdOutlineArrowOutward />
            </p>
          </div>
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="Home-part-11">
        <p>
          Our hope is that DALL·E 2 will empower people to express themselves
          creatively. DALL·E 2 also helps us understand how advanced AI systems
          see and understand our world, which is critical to our mission of
          creating AI that benefits humanity.
        </p>
      </div>

      <div className="Home-part-12-video">
        <video className="last-video-Video" muted autoPlay loop>
          <source src={LastVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="Home-part-13">
        <div className="Home-pt-13-left">
          <p>Credits</p>
        </div>
        <div className="Home-pt-13-right">
          <div className="Home-pt-13-rt-dv-1">
            <p>Research Advancements</p>
            <p>
              Aditya Ramesh, Prafulla Dhariwal, Alex Nichol, Casey Chu, Mark
              Chen
            </p>
          </div>

          <div className="Home-pt-13-rt-dv-1">
            <p>Engineering, Design, Product, and Prototyping</p>
            <p>
              Jeff Belgum, Dave Cummings, Jonathan Gordon, Chris Hallacy, Shawn
              Jain, Joanne Jang, Fraser Kelton, Vishal Kuo, Joel Lehman, Rachel
              Lim, Bianca Martin, Evan Morikawa, Rajeev Nayak, Glenn Powell,
              Krijn Rijshouwer, David Schnurr, Maddie Simens, Kenneth Stanley,
              Felipe Such, Chelsea Voss, Justin Jay Wang
            </p>
          </div>

          <div className="Home-pt-13-rt-dv-1">
            <p>Comms, Policy, Legal, Ops, Safety, and Security</p>
            <p>
              Steven Adler, Lama Ahmad, Miles Brundage, Kevin Button, Che Chang,
              Fotis Chantzis, Derek Chen, Frances Choi, Steve Dowling, Elie
              Georges, Shino Jomoto, Aris Konstantinidis, Gretchen Krueger,
              Andrew Mayne, Pamela Mishkin, Bob Rotsted, Natalie Summers, Dave
              Willner, Hannah Wong
            </p>
          </div>

          <div className="Home-pt-13-rt-dv-1">
            <p>Acknowledgments</p>
            <p>
              Thanks to those who helped with and provided feedback on this
              release: Sandhini Agarwal, Sam Altman, Chester Cho, Peter
              Hoeschele, Jacob Jackson, Jong Wook Kim, Matt Knight, Jason Kwon,
              Anna Makanju, Katie Mayer, Bob McGrew, Luke Miller, Mira Murati,
              Adam Nace, Hyeonwoo Noh, Cullen O’Keefe, Long Ouyang, Michael
              Petrov, Henrique Ponde de Oliveira Pinto, Alec Radford, Girish
              Sastry, Pranav Shyam, Aravind Srinivas, Ilya Sutskever, Preston
              Tuggle, Arun Vijayvergiya, Peter Welinder
            </p>
          </div>
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="Home-part-14">
        <p>Start creating images with DALL·E.</p>
        <button>
          Try DALL&#183;E <MdOutlineArrowOutward />
        </button>
      </div>

      <div className="Home-part-15">
        <div className="Home-pt-15-left">
          <img src={Logo} alt="" />
        </div>

        <div className="Home-pt-15-right">
          <div>
            <p>Research</p>
            <ul>
              <li>Overview</li>
              <li>Index</li>
              <li>GPT-4 </li>
              <li>DALL·E 3</li>
            </ul>
          </div>
          <div>
            <p>API</p>
            <ul>
              <li>Overview</li>
              <li>Data privacy</li>
              <li>Privacy</li>
              <li>
                Docs <MdOutlineArrowOutward />{" "}
              </li>
            </ul>
          </div>

          <div>
            <p>ChatGPT</p>
            <ul>
              <li>Overview</li>
              <li>Enterprise</li>
              <li>
                Try ChatGPT <MdOutlineArrowOutward />{" "}
              </li>
            </ul>
          </div>

          <div>
            <p>Company</p>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Careers </li>
              <li>Charter</li>
              <li>Security</li>
              <li>Customer stories</li>
              <li>Safety</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="vertical-line"></div>

      <div className="Home-part-16">
        <div className="Home-pt-16-left">
          <p>OpenAI © 2015 – 2023</p>
          <p>Terms and Policies</p>
          <p>Privacy policies</p>
          <p>Brand guidelines</p>
        </div>
        <div className="Home-pt-16-right">
          <div className="Home-pt-16-lt-links">
            <p>Twitter</p>
            <p>Github</p>
            <p>Youtube</p>
            <p>SoundCloud </p>
            <p>Linkedin</p>
          </div>
          <div className="Home-pt-16-lt-TOPBTN">
            <p className="bkt-btn" onClick={backToTopBtn}>
              Back to top
              <span>
                <FaArrowUpLong />
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* <div className="construction-div">
        <h1>
          THIS SITE IS UNDER CONSTRUCTION <LuConstruction />
        </h1>
      </div> */}

      <div className="white-lines-atBottom">
          <div className="wl-1"></div>
          <div className="wl-2"></div>
          <div className="wl-3"></div>
          <div className="wl-4"></div>
          <div className="wl-5"></div>
          <div className="wl-6"></div>
          <div className="wl-7"></div>
          <div className="wl-8"></div>
          <div className="wl-9"></div>
          <div className="wl-10"></div>
          <div className="wl-11"></div>
          <div className="wl-12"></div>
          <div className="wl-13"></div>
          <div className="wl-14"></div>
          <div className="wl-15"></div>
          <div className="wl-16"></div>
          <div className="wl-17"></div>
          <div className="wl-18"></div>
          <div className="wl-19"></div>
          <div className="wl-20"></div>
          <div className="wl-21"></div>
          <div className="wl-22"></div>
          <div className="wl-23"></div>
      </div>
    </>
  );
};

export default Home;
