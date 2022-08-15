import { Carousel, Button }  from 'react-bootstrap';

function CarouselComp() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>SKYLINE IMPORTS</h3>
          <p>We sell classic JDM Japanese vehicles and import them directly from Japan.</p>
          <Button className="btn-lg btn-light mb-3" href="cars">SHOP CARS</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1611396058741-1d570a4fcf95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>EXPERIENCED IN THE BUSINESS.</h3>
          <p> Skyline Imports has been operating for over 30 years. We have the experience and expertise to help you find your dream JDM vehicle.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1604286677335-e7ee474062dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>FAIR PRICES</h3>
          <p>
          Skyline Imports promises you fair and transparent transactions. We value our customers!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;