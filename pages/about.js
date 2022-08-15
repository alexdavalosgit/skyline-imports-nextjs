import {Container} from 'react-bootstrap';

function About() {
  return (
    <>
         <div className='p-4 border'>
            <Container>
            <h1 className="text-uppercase text-center font-weight-bold">About Skyline Imports</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, adipisci consequuntur ut laboriosam eaque sed veritatis praesentium. Autem fugit doloribus, nesciunt aperiam iste non voluptatibus ducimus provident, sequi possimus accusamus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, cumque unde id obcaecati perspiciatis omnis et cum accusantium quibusdam. Earum corrupti perspiciatis mollitia rem dolorem suscipit vel saepe unde neque!</p>
            </Container>
          </div>
          <section>
            <img src="https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="img-fluid"
            ></img>
          </section>

    
  );
    </>
   
  )
    
}

export default About