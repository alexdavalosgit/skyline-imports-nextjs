import { Stack, Button, Container } from 'react-bootstrap';

function Information() {
  return (

    <Container fluid className="p-0 mt-5 mx-auto">
      <Stack gap={4} className="p-5">
        <div className="info-panel p-5 d-flex gap-3">
              <i className="fa-solid fa-car fa-4x"></i>
              <div className='p-2'>
                <h2 className='info-heading'>What is JDM?</h2>
                <p className='info-text'>If you have a passion for collecting antique cars, you have probably heard of the term JDM. 
                JDM stands for Japanese Domestic Market and our classic car dealership in Virginia has a large inventory of JDM cars 
                for sale in the U.S., making it easy to find the Japanese Domestic Market car and JDM car parts you need. 
                Just shop our JDM cars for sale to see which model speaks best to you, and buy the authentic 
                JDM parts and accessories you need to help make it truly your own.</p>
              </div>
        </div>

        <div className="info-panel p-5 d-flex gap-3">
              <i className="fa-solid fa-1 fa-4x"></i>
              <div className='p-2'>
                <h2 className='info-heading'>The Best in JDM Imports!</h2>
                <p className='info-text'>When it comes to Japanese Domestic Market imports, it’s vital that you trust the source. That’s why, at Skyline Imports, we only deal in the best of the best.
                  We work tirelessly, scouring the Japanese Domestic Market for the highest quality vintage, premium, and classic right hand drive cars over 25 years old, and ship them to you in the best possible condition.
                  Our selection of JDM sports cars, daily drivers, and rugged 4x4s is always updating with the hottest low mileage vehicles.
                  We pride ourselves in delivering only the best quality cars, and with our sprawling team of experts on the ground in Japan, as well as years of personal knowledge within the industry, you can rest assured that the car you are buying is the best possible example of JDM style and craftsmanship. We are a trusted Japanese classics llc Company as JDM Sport Classics!</p>
              </div>
        </div>

        <div className="info-panel p-5 d-flex gap-3">
              <i className="fa-solid fa-flag fa-4x"></i>
              <div className='p-2'>
                  <h2 className='info-heading'>Taking the Trouble Out of Overseas Purchases!</h2>
                  <p className='info-text'>
                  Overseas purchases can be tedious and overcomplicated!
                    At Skyline Imports, we understand the difficulties involved with purchasing and importing a vehicle from outside the US, which is why we’ve dedicated ourselves to making it easier.

                    We make sure we know every last detail of each JDM vehicle we import, and we handle all the necessary paperwork. All you have to do is sign on the dotted line before you take ownership of your new right hand drive JDM sports car or daily driver.

                    From the initial search to the financing process, Skyline Imports has got you covered.

                    Check out our current stock, take a look at our incoming vehicles, and get in touch if you have any questions!

                    Our extensive inventory includes, but is certainly not limited to:
                  </p>
                  <div className="d-flex flex-column justify-content-center">
                    <ul className='info-ul'>
                        <li>Nissan Skyline</li>
                        <li>Subaru WRX</li>
                        <li>Mitsubishi Evolutions</li>
                        <li>Honda S2000</li>
                        <li>Mazda RX-7</li>
                        <li>R32 GTR</li>
                        <li>Honda Nsx</li>
                        <li>Nissan Silvia</li>
                        <li>Nissan 180sx</li>
                      </ul>
                      <a href="/cars">   <Button className=".btn-primary custom-btn  btn-lg text-uppercase">
                      <i className="fa-solid fa-bag-shopping"></i> shop all
                      </Button> </a>    
                  </div>
                   
              </div>
        </div>

      </Stack>
    </Container>
  );
}

export default Information;