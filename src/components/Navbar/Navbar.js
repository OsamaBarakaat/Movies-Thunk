import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import "./style.css"

function NavBar() {
    const favMovie = useSelector(state => state.movies)


    return (
        <Navbar id='navbar' variant="dark" className="justify-content-center">
            <Container className="justify-content-center">
                <Navbar.Brand href="#" id='navTitle'>T M D B </Navbar.Brand>
                <Nav className="m-auto " id='nav' >
                    <Link to="/" id='navLink'>Home</Link>
                    <Link to="/Movies" id='navLink'>Movies</Link>
                    <Link to="/Favorites" id='navLink'>Favorites</Link>
                    <Link to="/MDetails" id='navLink'>Movies Details</Link>
                    <Link to="/Test" id='navLink'>Test</Link>
                    <Link to="/Login" id='navLink'>Login/Register</Link>
                    <Link to="/contactUs" id='navLink'>Contact Us</Link>
                </Nav>
                <div id='search' className='m-3'>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-3"
                            aria-label="Search"
                            name=""
                        ></Form.Control>
                        <Button variant='secondary' type='submit' >Search</Button>

                    </Form>
                </div>
                <Navbar.Brand href="#home" > Favourites: {favMovie.length}</Navbar.Brand>
            </Container>
        </Navbar>
    );
}


export default NavBar;