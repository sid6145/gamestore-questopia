import HeroSection from "./HeroSection/HeroSection";
import HighLights from "./HighLights";
import "./home.css"
const Home = () => {
  return (
    <div className="root">
        <HeroSection/>
        <HighLights />
      <section className="deals-sec"></section>
      <section className="newly-launch-sec"></section>
      <section className="news-letter"></section>
    </div>
  );
}

export default Home