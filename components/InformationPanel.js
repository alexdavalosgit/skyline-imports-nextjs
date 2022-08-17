import { Stack, Button, Container } from 'react-bootstrap';

function InformationPanel() {
        return (
            <Container fluid className='info-panel-container p-5'>
                <div className="text-center text-uppercase font-weight-bold mt-5 ">
                    <h1>Why Choose Us</h1>
                </div>

                <Stack direction="horizontal" gap={3} className="justify-content-center mt-5 p-5">
                <div className="">
                    <h4 className="text-uppercase font-weight-bold">Financing Made Easy</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, tempore modi. Perferendis consequatur tempora quae earum, nostrum magnam quidem odit fugiat sunt officiis possimus perspiciatis ipsa, deserunt quis esse delectus.</p>
                </div>
                <div className="">
                    <h4 className="text-uppercase font-weight-bold">Wide Range of Vehicles</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, tempore modi. Perferendis consequatur tempora quae earum, nostrum magnam quidem odit fugiat sunt officiis possimus perspiciatis ipsa, deserunt quis esse delectus.</p>
                </div>
                <div className="">
                    <h4 className="text-uppercase font-weight-bold">Internationl Experience</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, tempore modi. Perferendis consequatur tempora quae earum, nostrum magnam quidem odit fugiat sunt officiis possimus perspiciatis ipsa, deserunt quis esse delectus.</p>
                </div>
                </Stack>
                <div className="mt-2 text-center btn-panel-container">
                <a href="/cars">   <Button className="btn-danger btn-lg text-uppercase">shop all</Button> </a>
                <a href="/about">   <Button className="btn-danger btn-lg text-uppercase">learn more</Button> </a>
                </div>
            </Container>
          );
}

export default InformationPanel;