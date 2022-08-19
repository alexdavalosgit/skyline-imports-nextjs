import { Stack, Button, Container } from 'react-bootstrap';

function InformationPanel() {
        return (
            <Container fluid className='info-panel-container p-5'>
                <div className="text-center text-uppercase font-weight-bold mt-5">
                    <h1 className='pb-4 fw-bolder fs-1'>Why Choose Skyline Imports?</h1>
                </div>

                <Stack direction="horizontal" gap={3} className="flex-column flex-lg-row justify-content-center align-items-start mt-5">
                <div className="d-flex gap-3">
                    <i className="fa-solid fa-tags fa-3x"></i>
                    <div>
                        <h4 className="text-uppercase fw-bold fs-3">Financing Made Easy</h4>
                        <p>Our stress-free finance department that can find financial solutions to save you money.
                            We promise to make your next vehicle purchase with integrity and professionalism.</p>
                    </div>
                    
                </div>
                <div className="d-flex gap-3">
                    <i className="fa-solid fa-arrow-up-wide-short fa-3x"></i>
                    <div>
                        <h4 className="text-uppercase fw-bold fs-3">Wide Range of Vehicles</h4>
                        <p>With a robust selection of popular JDM vehicles we are offering the best service to our customers.
                            Customers can also put in special request and we will do our best to find the vehicle for you.</p>
                    </div>
                </div>
                <div className="d-flex gap-3">
                    <i className="fa-solid fa-globe fa-3x"></i>
                    <div>
                        <h4 className="text-uppercase fw-bold fs-3">Global Experience</h4>
                        <p>Here at Skyline Imports, our core values consist of honesty, integrity, and the pursuit of quality. 
                            We have excellent relationships with suppliers, traders, and auto body shops all around the globe.</p>
                    </div>
                  
                </div>
                </Stack>
                <div className="mt-5 text-center btn-panel-container">
                <a href="/about">   <Button className=".btn-primary custom-btn  btn-lg text-uppercase">
                <i className="fa-solid fa-chalkboard-user"></i> learn more</Button> </a>
                </div>
            </Container>
          );
}

export default InformationPanel;