import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import PM from "../assets/images/Pac-Man.PNG";
const MainPage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center my-5">
          <Col sm={6}>
            <Image style={{ height: "300px", width: "300px" }} src={PM} />
          </Col>
          <Col lg={6}>
            <Card bg="dark" >
              <Card.Body>
                <Card.Text className="text-light">
                  Pac-Man is a popular video game character that first appeared
                  in 1980. He is a yellow, circular creature with a voracious
                  appetite for pellets and power-ups. In the game, players guide
                  Pac-Man through a maze, eating pellets while avoiding ghosts.
                  When Pac-Man eats a power pellet, he gains the ability to eat
                  ghosts, temporarily rendering them vulnerable. Pac-Man has
                  since become an iconic figure in popular culture, appearing in
                  numerous video games, television shows, and merchandise.
                  Despite his simple appearance, Pac-Man has had a significant
                  impact on the video game industry and has helped to popularize
                  the gaming medium. Although Pac-Man is a fictional character,
                  he has become a beloved icon that continues to captivate new
                  generations of players.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
