import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/images/logonew.png';
import image1 from '../assets/images/811AMr36qAL.webp'
import image2 from '../assets/images/tissot-t-classic-t137-407-11-041-00.webp'
import image3 from '../assets/images/71dSqpaHaxL.webp'
import image4 from '../assets/images/tissot-watches-tissot-pr516-chrono-quartz-40mm-ss-black-dial-mens-watch-t149.417.11.051.00__90706.1711009253.webp'
import image5 from '../assets/images/T137_410_11_091_00.webp'
import image6 from '../assets/images/w=400x400.jpg'
import image7 from '../assets/images/Used-Rolex-President-18238-Black-Onyx-Dial-SKU155213.webp'


const Products = () => {
    return (
        <div>
            <div className="nav">
                <Navbar expand="lg" className="bg-black container-fluid">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/" className="text-white mx-auto d-flex align-items-center">
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
                            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                <Nav.Link as={Link} to="/Home" className="text-white">Home</Nav.Link>
                                <Nav.Link as={Link} to="/products" className="text-white">Products</Nav.Link>
                                <Nav.Link href='/About' className='text-white'>About</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className='bg-banner-product-image'>

                <div className="">
                    <div className="products">
                        <div className="box position-relative">
                            <span className="notch bg-dark d-block position-absolute" style={{ height: 18, width: 18, borderRadius: '50%', left: 4, top: 4 }}></span>
                            <img src={image1} className="product-image" alt="Product 1" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <span className="bottom-bar bg-dark d-block position-absolute rounded" style={{ height: 3, width: 70, bottom: 5, right: '40%' }}></span>
                        </div>
                        <div className="box position-relative">
                            <span className="notch bg-dark d-block position-absolute" style={{ height: 18, width: 18, borderRadius: '50%', left: 4, top: 4 }}></span>
                            <img src={image2} className="product-image" alt="Product 2" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <span className="bottom-bar bg-dark d-block position-absolute rounded" style={{ height: 3, width: 70, bottom: 5, right: '40%' }}></span>
                        </div>
                        <div className="box position-relative">
                            <span className="notch bg-dark d-block position-absolute" style={{ height: 18, width: 18, borderRadius: '50%', left: 4, top: 4 }}></span>
                            <img src={image3} className="product-image" alt="Product 2" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <span className="bottom-bar bg-dark d-block position-absolute rounded" style={{ height: 3, width: 70, bottom: 5, right: '40%' }}></span>
                        </div>
                        <div className="box position-relative">
                            <span className="notch bg-dark d-block position-absolute" style={{ height: 18, width: 18, borderRadius: '50%', left: 4, top: 4 }}></span>
                            <img src={image4} className="product-image" alt="Product 2" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <span className="bottom-bar bg-dark d-block position-absolute rounded" style={{ height: 3, width: 70, bottom: 5, right: '40%' }}></span>
                        </div>
                        <div className="box position-relative">
                            <span className="notch bg-dark d-block position-absolute" style={{ height: 18, width: 18, borderRadius: '50%', left: 4, top: 4 }}></span>
                            <img src={image5} className="product-image" alt="Product 2" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <span className="bottom-bar bg-dark d-block position-absolute rounded" style={{ height: 3, width: 70, bottom: 5, right: '40%' }}></span>
                        </div>

                        <div className="box position-relative">
                            <span className="notch bg-dark d-block position-absolute" style={{ height: 18, width: 18, borderRadius: '50%', left: 4, top: 4 }}></span>
                            <img src={image7} className="product-image" alt="Product 2" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            <span className="bottom-bar bg-dark d-block position-absolute rounded" style={{ height: 3, width: 70, bottom: 5, right: '40%' }}></span>
                        </div>

                        <div className="box position-relative">
                            <span className="notch bg-dark d-block position-absolute" style={{ height: 18, width: 18, borderRadius: '50%', left: 4, top: 4 }}></span>
                            <img src={image6} className="product-image" alt="Product 2" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Products;
