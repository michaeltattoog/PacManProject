import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import HugePacMan from "../assets/images/PacManHuge.gif";
import Blinky from "../assets/images/RedGhost.gif";
import Pinky from "../assets/images/PinkGhost.gif";
import Inky from "../assets/images/BlueGhost.gif";
import Clyde from "../assets/images/OrangeGhost.gif";

const CharacterInfo = () => {
  return (
    <>
      <Container>
        <Row className="px-4 my-5">
          <Col>
            <Image src={Blinky} />
          </Col>
          <Col>
            <p>
              The Red Ghost, also known as Blinky, is a character from the
              classic video game Pac-Man. Blinky is one of four colored ghosts
              that chase Pac-Man throughout the game's mazes. The Red Ghost's
              main objective is to catch and defeat Pac-Man, making it more
              difficult for players to achieve a high score. 

              In the game, the Red Ghost's behavior is predictable and can be used to the
              player's advantage. Blinky always follows a direct path towards
              Pac-Man, and will speed up if Pac-Man eats a power pellet.
              However, Blinky will slow down if he gets too close to Pac-Man,
              giving the player a chance to escape.

               Blinky's design features a red body with large, white eyes and a snarling expression. His
              appearance has become iconic in popular culture, and he is often
              recognized as one of the most recognizable video game characters
              of all time. 
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CharacterInfo;
