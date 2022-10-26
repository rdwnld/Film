import Cinema from '../assets/bg/cinema.png'


function Footer() {
    return (
        <div className="bg-dark p-5">
            <img src={Cinema} width="1200px"></img>
            <p className="text-light text-center mt-5">Copyright &copy; Rudio Winaldo - 2022</p>
        </div>
    )
}

export default Footer