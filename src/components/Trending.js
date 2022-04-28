import { Card, Col, Container, Image, Row } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everything from "../assets/images/trending/everything.jpg";
import infinite from "../assets/images/trending/infinite.jpg";
import joker from "../assets/images/trending/joker.jpg";
import lightyear from "../assets/images/trending/lightyear.jpg";
import morbius from "../assets/images/trending/morbius.jpg";

const Trending = () => {
  return (
    <Container>
      <br />
      <h1 id="trending" className="text-white">
        TRENDING MOVIES
      </h1>
      <br />
      <Row>
        <Col md={4} className="movieWraper">
          <Card className="bg-dark movieImage">
            <Image src={duneImage} alt="Dune Movies" className="images" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Dune</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>

        <Col md={4} className="movieWraper">
          <Card className="bg-dark movieImage">
            <Image src={everything} alt="Everything Movies" className="images" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Everything</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>

        <Col md={4} className="movieWraper">
          <Card className="bg-dark movieImage">
            <Image src={infinite} alt="Infinite Movies" className="images" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Infinite</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>

        <Col md={4} className="movieWraper">
          <Card className="bg-dark movieImage">
            <Image src={joker} alt="Joker Movies" className="images" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Joker</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>

        <Col md={4} className="movieWraper">
          <Card className="bg-dark movieImage">
            <Image src={lightyear} alt="Lightyear Movies" className="images" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Lightyear</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>

        <Col md={4} className="movieWraper">
          <Card className="bg-dark movieImage">
            <Image src={morbius} alt="Morbius Movies" className="images" />
            <div className="p-2 m-1 text-white">
              <Card.Title className="text-center">Morbius</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Trending;
