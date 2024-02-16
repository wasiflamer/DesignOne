import "./App.css";

function App() {
  return (
    <>
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
          </div>
        </div>
      </div>
    </>
  );
}
