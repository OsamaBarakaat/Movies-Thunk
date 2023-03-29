import React, { useEffect, useState } from "react";
import './Movies.css'
import { Button, Card, Col, Container, Modal, ModalBody, ModalFooter, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import addFav from "../../store/action/actions";
import setmovies from "../../store/action/setmovie";
const API_IMG = "https://image.tmdb.org/t/p/w500/"
// const API_URL = "/3/movie/popular?"
const Movies = () => {

    const favMovie = useSelector(state => state.thunkMovies)

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const dispatch = useDispatch() // inside use effect
    const [page, setPage] = useState(1)

    useEffect(() => {


        dispatch(setmovies(page))
    },)
    const previous = () => {
        setPage(page - 1);
    }
    const next = () => {
        setPage(page + 1)
    }

    const handleFav = (movie) => {
        dispatch(addFav(movie))
    }
    function handleRoute(id) {
        Navigate(`/MDetails/${id}`)
    }
    return (


        <div className="container" id="moviesContainer">
            {/* <div className="grid" id="moviesContainerGrid">
                {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)}
            </div> */}

            <>
                <div className="d-flex flex-wrap">
                    {favMovie.map(function (movie) {
                        return <div key={movie.id}>
                            <Card className="m-5" style={{ width: "15rem" }}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Text>{favMovie.overview}</Card.Text>
                                    <Card.Title><Link to={`/details/${movie.id}`}>{movie.title}</Link> </Card.Title>
                                    <button className="btn btn-dark" onClick={handleShow}>View More</button>

                                    <Modal show={show} onHide={handleClose} className="text-center" >
                                        <Modal.Header closeButton>
                                            <Modal.Title></Modal.Title>
                                            <ModalBody >
                                                <h3 >{movie.title}</h3>
                                                <img className="card-img-top" id="modalImg" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>

                                                <h4>IMDB: {movie.vote_average}</h4>
                                                <h5>Release Date: {movie.release_date}</h5>
                                                <br />

                                                {/* <h4 id="titleHeart">add to favorite ?! <i id="heart" class="fa-solid fa-heart" ></i></h4> */}
                                                <hr />
                                                <h6>OverView:</h6>
                                                <h6>{movie.overview}</h6>
                                            </ModalBody>
                                        </Modal.Header>
                                        <ModalFooter>
                                            <Button className="btn btn-dark" onClick={() => { handleRoute(movie.id) }}>Go To Movie</Button>
                                        </ModalFooter>
                                    </Modal>

                                </Card.Body>

                                <label>Add to favorite?</label>
                                <button className="btn btn-dark" onClick={() => handleFav(movie)} style={{
                                    color: favMovie.find((item) => {
                                        return item.id === movie.id;
                                    }) ? "white" : "",
                                }}><i class="fa-solid fa-heart"></i></button>
                            </Card>
                        </div>
                    })}
                </div>
                <Container>
                    <Row>
                        <Col><Button disabled={page === 1} onClick={() => previous()} className='btn btn-dark'>previous</Button></Col>
                        <Col xs={4}>..</Col>
                        <Col><Button disabled={page === 20} onClick={() => next()} className='btn btn-dark'>next</Button></Col>
                    </Row>
                </Container>
            </>

        </div>

    );
}

export default Movies;