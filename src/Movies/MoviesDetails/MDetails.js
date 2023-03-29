import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const API_IMG = "https://image.tmdb.org/t/p/w500/"

const MDetails = () => {
    const params = useParams()
    console.log(params.id);
    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=07ffd2ef2877d3ff5a6c4e3450ea8177`).then((res) => {
            setMovie(res.data)
            console.log(movie);
        }).catch((err) => {
            console.log(err);
        })
    })
    return (
        <div className="row">
            {/* <h1> movies details {params.id}</h1> */}
            <div >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={API_IMG + movie.poster_path} style={{ height: '200px' }} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <p>
                            {movie.description}
                        </p >
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default MDetails