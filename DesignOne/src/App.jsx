/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "./App.css";

import contrast_svg1 from "./assets/Dark _analytics-bro.svg";
import contrast_svg2 from "./assets/Visual data-bro.svg";
import contrast_svg3 from "./assets/Analysis.svg";
import contrast_svg4 from "./assets/Software_integration-bro.svg";
import HeroBackground from "./assets/hero_background-01.svg";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SecondaryHero />
      <DetailedHero />
      <ContrastHero />
      <ThinLinefooter />
      <Footer />
    </>
  );
}

export default App;

// all components here
function HeroSection() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${HeroBackground})`,
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-primary bg-white">
              Win your dream job
            </h1>
            <h1 className="text-5xl font-bold text-neutral bg-white ">
              With JobSnap
            </h1>
            <p className="py-6 font-medium text-neutral bg-white">
              Navigate Your Career Journey with JobSnap – Where Opportunities
              Meet Intelligence!
            </p>
            <label className="input input-bordered flex items-center gap-2 py-8">
              <input type="text" className="grow" placeholder="Your Email" />
              <span className=" btn btn-accent ">Start For Free</span>
            </label>
            <CardSections />
          </div>
        </div>
      </div>
    </>
  );
}

function CardSections() {
  return (
    <div className="flex justify-evenly gap-10 mt-10 mx-2 ">
      <div>
        <Card
          icon={"AI ICON"}
          title={"AI Cover Leter Generator"}
          content={"1"}
        />
      </div>
      <div>
        <Card
          icon={"Smart Icon"}
          title={"Smart Personalization"}
          content={"2"}
        />
      </div>
      <div>
        <Card icon={"Scanner Icon"} title={"Resume Scanner"} content={"xxx"} />
      </div>
    </div>
  );
}

function Card({ icon, title, content }) {
  return (
    <div className="card w-96 bg-white border-primary border-l-accent border-l-8 border-2 text-neutral  rounded-2xl ">
      <div className="card-body text-left">
        <h2 className="card-title">{icon}</h2>
        <p className="font-bold">{title}</p>
        <div className="card-actions">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

function SecondaryHero() {
  return (
    <div className="m-20 ">
      <div className="hero min-h-screen bg-primary text-secondary rounded-lg p-20">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">
              Submiting Better Job Applications
            </h1>
            <h1 className="text-9xl font-bold">10X Faster</h1>
            <p className="py-6 font-sans text-2xl text-secondary">
              AI Cover letter Generator, Resume keyword checker, outreach
              Message writer and more powered by GPT.
            </p>
            <img src={contrast_svg4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar bg-secondary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http:loremw3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>AI Cover Leter Generator</a>
            </li>
            <li>
              <a>Smart Personalization</a>
            </li>
            <li>
              <a>Resume Scanner</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">JobSnap</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>AI Cover Leter Generator</a>
          </li>
          <li>
            <a>Smart Personalization</a>
          </li>
          <li>
            <a>Resume Scanner</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn btn-white">Sign in</a>
        <a className="btn btn-accent">Get Started</a>
      </div>
    </div>
  );
}

function DetailedHero() {
  return (
    <>
      <div className="p-20">
        <div className="hero min-h-screen ">
          <div className="hero-content text-center">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold text-green-500">
                Spend Less Time
              </h1>
              <h1 className="text-5xl font-bold">Looking For work</h1>
              <p className="py-6 font-medium">
                We Will Help You Through The Hardest Part of Job Search
              </p>
              <button className="btn btn-wide btn-success">
                Create an Account
              </button>
              <CardSections_row2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CardSections_row2() {
  return (
    <>
      <div className="flex justify-evenly gap-10 mt-10 mx-2 ">
        <div>
          <Card
            icon={"AI ICON"}
            title={"AI Cover Leter Generator"}
            content={"1"}
          />
        </div>
        <div>
          <Card
            icon={"Smart Icon"}
            title={"Smart Personalization"}
            content={"2"}
          />
        </div>
        <div>
          <Card
            icon={"AI ICON"}
            title={"AI Cover Leter Generator"}
            content={"1"}
          />
        </div>
      </div>
      <div className="flex justify-evenly gap-10 mt-10 mx-2 ">
        <div>
          <Card
            icon={"AI ICON"}
            title={"AI Cover Leter Generator"}
            content={"1"}
          />
        </div>
        <div>
          <Card
            icon={"Smart Icon"}
            title={"Smart Personalization"}
            content={"2"}
          />
        </div>
        <div>
          <Card
            icon={"AI ICON"}
            title={"AI Cover Leter Generator"}
            content={"1"}
          />
        </div>
      </div>
    </>
  );
}

function ContrastHero() {
  return (
    <>
      <div className="text-gray-900">
        <div className="hero min-h-screen bg-green-500">
          <div className="hero-content flex-col lg:flex-row-reverse m-32">
            <img src={contrast_svg1} alt="Analytics" className="w-3/4" />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-outline btn-wide text-black ">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="hero min-h-screen bg-green-500">
          <div className="hero-content flex-col lg:flex-row m-32">
            <img src={contrast_svg2} alt="Analytics" className="w-3/4" />
            <div>
              <h1 className="text-5xl font-bold text-right ">
                Generate Letter
              </h1>
              <p className="py-6 text-right">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div className="flex justify-end">
                <div>
                  <button className="btn btn-outline btn-wide text-black ">
                    Optimize Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero max-w-full h-4/6  bg-grey-500">
          <div className="hero-content flex-col lg:flex-row-reverse m-32">
            <img src={contrast_svg3} alt="Analytics" className="w-3/4" />
            <div>
              <h1 className="text-5xl font-bold text-right text-white ">
                stuff
              </h1>
              <p className="py-6 text-right text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                voluptatem aut a placeat nihil hic, harum quisquam tempore!
                Quaerat perferendis quibusdam, quidem nihil et aliquam saepe
                mollitia quasi repellat. Odit!
              </p>
              <div className="flex justify-end">
                <div>
                  <button className="btn btn-outline btn-wide text-white ">
                    Optimize Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-black text-base-content">
        <nav>
          <h6 className="footer-title">Platform</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Features</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <div className="divider divider-info"></div>
      <aside className="text-center m-4">
        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        <a href="https://storyset.com/computer">illustrations by Storyset</a>
      </aside>
    </>
  );
}

function ThinLinefooter() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-black text-primary-content">
        <aside>
          <h1 className="font-bold text-7xl">What's Next</h1>
          <p className="font-semibold">
            Navigate Your Career Journey with JobSnapAI – Where Opportunities
            Meet Intelligence!
          </p>
          <button className="btn btn-wide btn-outline btn-info m-3">
            Try For free !{" "}
          </button>
        </aside>
      </footer>
    </>
  );
}
