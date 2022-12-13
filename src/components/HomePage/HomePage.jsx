import React from 'react';
import "./HomePage.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Card>
    
  );
}



export default BasicExample;
// const HomePage = () => {
//     return (
        

//         // <div style={{ backgroundColor: "", height: "1000px", width: "100%" }}>
//         //     <div className='box1'>Я вам расскажу что такое програмистика <img src="https://i.pinimg.com/originals/0f/8b/28/0f8b2870896edcde8f6149fe2733faaf.jpg" alt="" height={300} /></div>
//         //     <div className='box2'>Я вам расскажу что такое програмистика</div>

//         // </div>
//     )
// };


// export default HomePage;