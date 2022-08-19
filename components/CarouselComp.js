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
        <Carousel.Caption className='image-text'>
          <h3>SKYLINE IMPORTS</h3>
          <Button className="btn-lg btn-primary custom-btn mb-3 mx-auto" href="cars">
          <i className="fa-solid fa-bag-shopping"></i> SHOP CARS
            </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1611396058741-1d570a4fcf95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Second slide"
        />

        <Carousel.Caption className='image-text'>
          <h3>CHOOSE FROM A LARGE SELECTION.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1604286677335-e7ee474062dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
          alt="Third slide"
        />

        <Carousel.Caption className='image-text text-light'>
          <h3>MAKES BUYING A JDM CAR EASY.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;