import "./highlights.scss"
import ProductCardLarge from "../../../components/ProductCardLarge"
import Slider from "react-slick"

const HighLights = () => {
  return (
    <div className="highlight-root">
        <h4 className="highlight-text">Highlights</h4>
        <Slider infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} dots autoplay autoplaySpeed={5000}>
            <ProductCardLarge />
            <ProductCardLarge />
            <ProductCardLarge />
        </Slider>
    </div>
  );
}

export default HighLights