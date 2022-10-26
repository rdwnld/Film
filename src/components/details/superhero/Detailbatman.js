import { Container, Row, Col } from 'react-bootstrap'

import '../../style.css'

const Detailbatman = () => {
    return (
        <Container fluid className='bg-dark py-5 detail'>
            <Container>
                <h2 className='text-center text-light mt-5'>Batman</h2>
                <Row className='mt-5'>
                    <Col className='bg-light p-3 rounded'><iframe width="560" height="315" src="https://www.youtube.com/embed/EXeTwQWrcwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                    <Col className='text-light'>
                        <p>The Dark Knight adalah film superhero 2008 yang disutradarai, diproduksi, dan ditulis bersama oleh Christopher Nolan.</p>
                        <hr></hr>
                        <p>Tanggal rilis: 18 Juli 2008 (Indonesia)
                            <br></br>
                            Sutradara: Christopher Nolan<br></br>
                            Box office: 1,006 miliar USD<br></br>
                            Serial film: Trilogi The Dark Knight<br></br>
                            Anggaran: 180 juta USD, 185 juta USD<br></br>
                            Nominasi: MTV Movie & TV Award untuk Tokoh Antagonis Terbaik, LAINNYA</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-light'>
                        <h3 className='mt-5'>SINOPSIS</h3>
                        <hr></hr>
                        <p>Batman memiliki musuh baru, Joker, otak kriminal yang berambisi menghancurkan Gotham City. Bersama Gordon dan Harvey Dent, Batman harus berjuang untuk menghentikannya sebelum semuanya terlambat.</p>
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}
export default Detailbatman