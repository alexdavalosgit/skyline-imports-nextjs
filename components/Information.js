import Link from 'next/link';
import { Stack, Button, Container } from 'react-bootstrap';


function Information() {
  return (

    <Container fluid className="pt-5 pb-5">
      <Stack gap={4} className="p-sm-5">
        <div className="info-panel p-sm-5 p-2 d-flex gap-3">
              <i className="hide-icon d-xl-flex fa-solid fa-car fa-4x"></i>
              <div className='p-2'>
                <h2 className='fw-bold fs-1'>What is JDM?</h2>
                <p className='info-text'>If you have a passion for collecting antique cars, you have probably heard of the term JDM. 
                JDM stands for Japanese Domestic Market and our classic car dealership in Virginia has a large inventory of JDM cars 
                for sale in the U.S., making it easy to find the Japanese Domestic Market car and JDM car parts you need. 
                Just shop our JDM cars for sale to see which model speaks best to you, and buy the authentic 
                JDM parts and accessories you need to help make it truly your own.</p>
              </div>
        </div>

        <div className="info-panel p-5 d-flex gap-3">
              <i className="hide-icon d-xl-flex fa-solid fa-1 fa-4x"></i>
              <div className='p-2'>
                <h2 className='fw-bold fs-1'>The Best in JDM Imports!</h2>
                <p className='info-text'>When it comes to Japanese Domestic Market imports, it’s vital that you trust the source. That’s why, at Skyline Imports, we only deal in the best of the best.
                  We work tirelessly, scouring the Japanese Domestic Market for the highest quality vintage, premium, and classic right hand drive cars over 25 years old, and ship them to you in the best possible condition.
                  Our selection of JDM sports cars, daily drivers, and rugged 4x4s is always updating with the hottest low mileage vehicles.
                  We pride ourselves in delivering only the best quality cars, and with our sprawling team of experts on the ground in Japan, as well as years of personal knowledge within the industry, you can rest assured that the car you are buying is the best possible example of JDM style and craftsmanship. We are a trusted Japanese classics llc Company as JDM Sport Classics!</p>
              </div>
        </div>

        <div className="info-panel p-5 d-flex gap-3">
              <i className="hide-icon d-xl-flex fa-solid fa-flag fa-4x"></i>
              <div className='p-2'>
                  <h2 className='fw-bold fs-1'>Taking the Trouble Out of Overseas Purchases!</h2>
                  <p className='info-text'>
                    At Skyline Imports, we understand the difficulties involved with purchasing and importing a vehicle from outside the US, which is why we’ve dedicated ourselves to making it easier.
                    We make sure we know every last detail of each JDM vehicle we import, and we handle all the necessary paperwork. All you have to do is sign on the dotted line before you take ownership of your new right hand drive JDM sports car or daily driver.
                    Our extensive inventory includes, but is certainly not limited to:
                  </p>
                  <div className="d-flex flex-column justify-content-center align-items-start">
                    <ul className='info-ul fs-5'>
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
                      <Link href="/cars"><Button className=".btn-primary custom-btn  btn-lg text-uppercase">
                      <i className="fa-solid fa-bag-shopping"></i> shop all
                      </Button></Link>
                  </div>
                   
              </div>
        </div>

      </Stack>
    </Container>
  );
}

export default Information;