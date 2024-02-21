/* eslint-disable react/prop-types */
import "./App.css";

import contrast_svg1 from "./assets/Dark _analytics-bro.svg";
import contrast_svg2 from "./assets/Visual data-bro.svg";
import contrast_svg3 from "./assets/Analysis.svg";

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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-green-500">
              Win your dream job
            </h1>
            <h1 className="text-5xl font-bold">with JobSnap</h1>
            <p className="py-6 font-medium">
              Navigate Your Career Journey with JobSnapAI – Where Opportunities
              Meet Intelligence!
            </p>
            <label className="input input-bordered flex items-center gap-2 py-8">
              <input type="text" className="grow" placeholder="Your Email" />
              <span className=" btn btn-success">Start For Free</span>
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
    <div className="card w-96 bg-neutral text-neutral-content ">
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
    <div className="m-10 ">
      <div className="hero min-h-screen bg-green-500 rounded-lg">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-black">
              Submiting Better Job Applications
            </h1>
            <h1 className="text-9xl font-bold text-black">10X Faster</h1>
            <p className="py-6 text-black">
              AI Cover letter Generator, Resume keyword checker, outreach
              Message writer and more powered by GPT.
            </p>
            <button className="btn ">Image Here</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar bg-base-100">
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
        <a className="btn btn-neutral">Sign in</a>
        <a className="btn btn-success">Get Started</a>
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
          <div className="hero-content flex-col lg:flex-row m-32">
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
      <footer className="footer p-10 bg-green-950 text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
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
    </>
  );
}

function ThinLinefooter() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-green-400 text-primary-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="inline-block fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="font-bold">
            ACME Industries Ltd. <br />
            Providing reliable tech since 1992
          </p>
          <p>Copyright © 2024 - All right reserved</p>
          <button className="btn btn-wide btn-info">Info</button>
        </aside>
      </footer>
    </>
  );
}
