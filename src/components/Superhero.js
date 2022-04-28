import { Card, Col, Container, Image, Row } from "react-bootstrap";
import antman from "../assets/images/superhero/antman.jpg";
import avenger from "../assets/images/superhero/avenger.jpg";
import batman from "../assets/images/superhero/batman.jpg";
import robinhood from "../assets/images/superhero/robinhood.jpg";
import spiderman from "../assets/images/superhero/spiderman-cover.jpg";
import superman from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <Container>
      <br />
      <h1 className="text-white">SUPERHERO MOVIES</h1>
      <br />
      <Row>
        <Col md={4} className="movieWraper">
          <Card className="bg-dark movieImage">
            <Image src={antman} alt="Dune Movies" className="images" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Dune</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>

        <Col md={4} className="movieWraper">
          <Card className="bg-dark movieImage">
            <Image src={avenger} alt="Everything Movies" className="images" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Dune</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>

        <Col md={4} className="movieWraper">
          <Card className="bg-dark movieImage">
            <Image src={batman} alt="Infinite Movies" className="images" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Dune</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>

        <Col md={4} className="movieWraper">
          <Card className="bg-dark movieImage">
            <Image src={robinhood} alt="Joker Movies" className="images" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Dune</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>

        <Col md={4} className="movieWraper">
          <Card className="bg-dark movieImage">
            <Image src={spiderman} alt="Lightyear Movies" className="images" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Dune</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>

        <Col md={4} className="movieWraper">
          <Card className="bg-dark movieImage">
            <Image src={superman} alt="Morbius Movies" className="images" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Dune</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Superhero;
