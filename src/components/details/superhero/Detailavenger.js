import { Container, Row, Col } from 'react-bootstrap'

import '../../style.css'

const Detailavenger = () => {
    return (
        <Container fluid className='bg-dark py-5 detail'>
            <Container>
                <h2 className='text-center text-light mt-5'>Avenger</h2>
                <Row className='mt-5'>
                    <Col className='bg-light p-3 rounded'><iframe width="560" height="315" src="https://www.youtube.com/embed/iKaruCq6ZY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>
                    <Col className='text-light'>
                        <p>Melanjutkan Avengers Infinity War, dimana kejadian setelah Thanos berhasil mendapatkan semua infinity stones dan memusnahkan 50% semua mahluk hidup di alam semesta. Akankah para Avengers berhasil mengalahkan Thanos?</p>
                        <hr></hr>
                        <p>Tanggal rilis: 24 April 2019 (Indonesia)
                            <br></br>
                            Sutradara: Anthony Russo, Joe Russo
                            <br></br>
                            Box office: 2,798 miliar USD
                            <br></br>
                            Produser: Kevin Feige
                            <br></br>
                            Penghargaan: MTV Movie & TV Award untuk Tokoh Antagonis Terbaik, LAINNYA
                            <br></br>
                            Nominasi: MTV Movie & TV Award untuk Tokoh Antagonis Terbaik, LAINNYA</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-light'>
                        <h3 className='mt-5'>SINOPSIS</h3>
                        <hr></hr>
                        <p>Melanjutkan Avengers Infinity War, dimana kejadian setelah Thanos berhasil mendapatkan semua infinity stones dan memusnahkan 50% semua mahluk hidup di alam semesta. Akankah para Avengers berhasil mengalahkan Thanos?</p>
                    </Col>
                </Row>
            </Container>
        </Container >
    )
}
export default Detailavenger