/* eslint-disable react/prop-types */
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SecondaryHero />
      <HeroSection />
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
            <h1 className="text-5xl font-bold text-success">
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
      <div className="hero min-h-screen bg-success rounded-lg">
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
