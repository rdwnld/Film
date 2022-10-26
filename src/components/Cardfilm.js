import './style.css'
import { Card } from 'react-bootstrap';


const Cardfilm = (props) => {
    return (
        <>
            <Card>
                <Card.Img className='imgcard' variant="top" src={props.gambar} />
                <Card.Body>
                    <Card.Title>{props.judul}</Card.Title>
                    <Card.Text>
                        <p className='mt-3'><b>GENRE</b></p>
                        <p>Laga, Cerita Seru, Film Komedi, Petualangan, Pahlawan Super, Perampokan, Fiksi Ilmiah</p>
                    </Card.Text>
                    <a href={props.judul} className="btn btn-primary">Watching {props.judul}</a>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cardfilm