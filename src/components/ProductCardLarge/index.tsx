import { Button } from "@mui/material";
import "./productCardLarge.scss"

interface ProductCardLargeProps {
    bannerImg?: string;

}

const ProductCardLarge = (props: ProductCardLargeProps) => {
    const {bannerImg} = props
  return (
    <div className="product-card-root">
        <div className="gradient-overlay"></div>
        <img className="card-banner-img" src={"/images/banner-1.jpg"} alt="prodct-card-banner"/>
        <h4 className="card-title">Baldur's Gate 3</h4>
        <div className="price-container">
            <h4>-10%</h4>
            <h4>Rs 2000</h4>
            <Button className="add-to-btn">Add to Cart</Button>
        </div>
    </div>
  )
}

export default ProductCardLarge