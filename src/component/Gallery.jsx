import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

function App() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=12')
      .then((response) => response.json())
      .then((data) => setImage(data));
  }, []);
  return (   
    <div className="container-fluid mt-5"> 
    <center><h2 className='bg-primary py-3' style={{marginTop:'100px'}}>.... Color Picker ....</h2></center>
    <Container>
       <Row>
        {image.map((picture)=>(
        <Col xs={12} md={6} lg={3} key={picture.id}>
          <div>
           <Accordion className='mt-5 mb-3'>
      <Accordion.Item eventKey="0" >
        <Accordion.Header><img src={picture.url} alt={picture.thumbnailUrl} style={{width: 200}}/></Accordion.Header>
        <Accordion.Body>
          <h4>Title : {picture.title}</h4>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>
        </Col>
        ))}
      </Row>
    </Container> 
    </div>
  );
}

export default App;
