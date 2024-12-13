import { logo } from "../assets";
const Hero = () => {         
  return (
    <header className="w-full flex justify-center items-center flex-col">                           
      {" "}                                          
      <nav className="flex justify-between items-center w-full mb-10 pt-3">         
        <img src={logo} alt="sumz-logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/racheallove06")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        {" "}
        Summarize Articles with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">OpenAI</span>{" "}
      </h1>
      <h2 className="desc">
        {" "}
        Discover 'SummAI: Your Smart Summarizer.' It condenses complex content,
        saving you time and aiding decision-making. Whether you're a student or
        professional, SummAI streamlines information, helping you stay informed
        efficiently.
      </h2>
    </header>
  );
};

export default Hero;
