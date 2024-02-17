/* eslint-disable react/prop-types */
import "./App.css";

function App() {
  return (
    <>
      <HeroSection />
      <SecondaryHero />
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
        <Card icon={"x"} title={"AI Cover Leter Generator"} content={"1"} />
      </div>
      <div>
        <Card icon={"x"} title={"Smart Personalization"} content={"2"} />
      </div>
      <div>
        <Card icon={"x"} title={"Resume Scanner"} content={"3"} />
      </div>
    </div>
  );
}

function Card({ icon, title, content }) {
  return (
    <div className="card w-96 bg-neutral text-neutral-content ">
      <div className="card-body items-left">
        <h2 className="card-title">{icon}</h2>
        <p className="font-bold">{title}</p>
        <div className="items-left">
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
