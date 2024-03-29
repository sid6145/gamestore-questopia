import { Button, Grid } from '@mui/material'
import "./heroSection.scss"
const HeroSection = () => {
  return (
    <section className="hero-sec">
    <Grid container>
      <Grid item xs={6}>
        <div className="left-text-section">
            <h4>Welcome to Questopia</h4>
            <p>Place to find all your gaming needs</p>
            <Button className="hero-btn" variant="contained">Explore Now</Button>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="right-img-section">
            <img src="./images/hero-section-img.png" alt="game-img" />
        </div>
      </Grid>
    </Grid>
  </section>
  )
}

export default HeroSection