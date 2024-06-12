import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';
import logo from '../assets/images/logonew.png';

const About = () => {
    return (
        <div className="nav">
            <Navbar expand="lg" className="bg-black container-fluid">
                <Container fluid>
                    <Navbar.Brand href="#" className="text-white mx-auto d-flex align-items-center">
                        <img
                            src={logo}
                            alt="logo"
                            className='d-inline-block align-top'
                            style={{ height: '40px', marginRight: '10px', filter: 'invert(100%)' }}
                        />
                        <span>CHRONO CORNER</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0 " style={{ maxHeight: '100px', marginLeft: '50px' }} navbarScroll>
                            <Nav.Link href="/Home" className="text-white">Home</Nav.Link>
                            <Nav.Link href="/Products" className="text-white">Products</Nav.Link>
                            <Nav.Link href='/About' className='text-white'>About</Nav.Link>
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='bg-banner-about-image'>
                <Container className="mt-5">
                    <h2 className="text-center text-black mb-12 display-5">About Chrono Corner</h2>
                    <p className='text-white display-6'>
                        Chrono Corner is your ultimate destination for high-quality watches that combine
                        elegance, functionality, and durability. Our mission is to provide timepieces that
                        not only keep you punctual but also reflect your unique style and personality.
                    </p>
                    <p className='text-white display-6'>
                        With a passion for precision engineering and timeless design, we curate a collection
                        of watches from renowned brands and independent craftsmen around the globe. Whether
                        you're looking for a classic dress watch, a rugged sports watch, or a sleek
                        smartwatch, we have something for every occasion and taste.
                    </p>
                    <p className='text-white display-6'>
                        At Chrono Corner, we believe that a watch is more than just a timekeeping device —
                        it's a statement of who you are and what you value. Explore our collection today and
                        find the perfect timepiece to accompany you on your journey through life.
                    </p>
                </Container>
            </div>
        </div>
    );
}

export default About;
