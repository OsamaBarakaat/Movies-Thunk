import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, show } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import addFav from "../../store/action/actions";
import './MovieBox.css'
const API_IMG = "https://image.tmdb.org/t/p/w500/"
const MovieBox = ({ id, title, poster_path
    , vote_average, release_date, overview }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const favMovie = useSelector(state => state.movies)
    const navigate = useNavigate()
    function handleRoute(id) {
        navigate(`/MDetails/${id}`)
    }
    // const [color, setColor] = useState("black");

    // const handleColor = () => {
    //     setColor(color === "black" ? "red" : "black");
    // };

    const dispatch = useDispatch()
    const [movies, setMovies] = useState([])
    const handleFav = (movie) => {
        dispatch(addFav(movie))
    }


    return (
        <div className="card text-center m-3 ">
            <div className="card-body">
                <div id="divTitle"><h6>{title}</h6></div>
                <img className="card-img-top" src={API_IMG + poster_path} id="imgMovieBox" />
                <div className="card-body">
                    <button className="btn btn-dark" onClick={handleShow}>View More</button>

                    <Modal show={show} onHide={handleClose} className="text-center" >
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                            <ModalBody >
                                <h3 >{title}</h3>
                                <img className="card-img-top" id="modalImg" src={API_IMG + poster_path}></img>

                                <h4>IMDB: {vote_average}</h4>
                                <h5>Release Date: {release_date}</h5>
                                <br />

                                {/* <h4 id="titleHeart">add to favorite ?! <i id="heart" class="fa-solid fa-heart" ></i></h4> */}
                                <hr />
                                <h6>OverView:</h6>
                                <h6>{overview}</h6>
                            </ModalBody>
                        </Modal.Header>
                        <ModalFooter>
                            <Button className="btn btn-dark" onClick={() => { handleRoute(id) }}>Go To Movie</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </div >
    )
}

export default MovieBox;

// style={{ color: color }} onClick={() => { handleColor(); addToFav(id) }}