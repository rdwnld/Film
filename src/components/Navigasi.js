import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigasi() {
    return (
        <>
            <Navbar className='fixed-top shadow' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">RPL Film</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#trending">Trending</Nav.Link>
                        <Nav.Link href="#superhero">SuperHero</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigasi