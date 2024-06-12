import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';
import React, { useEffect, useRef } from 'react';
import logo from '../assets/images/logonew.png';
import Video from '../assets/images/HomePageVideo.mp4'
import image1 from '../assets/images/AP-Images/RD3_img_03.jpg'
import image2 from '../assets/images/AP-Images/RD3_img_06b.jpg'
import image3 from '../assets/images/AP-Images/RD3_img_vert_02_new.jpg'
import image4 from '../assets/images/AP-Images/vlcsnap-2024-02-28-16h54m49s856.png'
import image5video from '../assets/images/AP-Images/boucle _tourbillon.mp4'

const Home = () => {

    const videoRef = useRef()
    useEffect(()=>{
        // videoRef.current.playbackRate = 3.0;
    },[])
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
                        <span className="no-hover">CHRONO CORNER</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0 " style={{ maxHeight: '100px', marginLeft: '50px' }} navbarScroll>
                            <Nav.Link href="/" className="text-white">Home</Nav.Link>
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
            <div className='video-container'>
            <video className='VideoRolex' muted autoPlay loop>
                <source src={Video} type="video/mp4" />
            </video>
            <div className='overlay'>
                <h1 className='text-white'>Balancing Time's Contrasts</h1>
            </div>
            </div>
            <div className='image-collage'>
            <div className='Image-3'>
                    <img src={image3} alt="photo" />
                </div>
               
                <div className='Image-2'>
                    <img src={image2} alt="photo" />
                </div>
                
                <div className='Image-4 d-flex flex-column'>
                    <video playbackRate={2} className='VideoAP' muted autoPlay loop ref={videoRef} style={{height:'min-content'}}>
                        <source src={image5video} type="video/mp4" />
                    </video>
                    <img src={image4} alt="photo "className='flex-1' />
                </div>
            
            </div>


            <div className='bg-banner-image '>
                <h1 className='display-1 text-white'>NEW WATCHES 2024</h1>
                <h3 className='display-1 text-white'>THE HARMONY OF CONTRASTS</h3>
            </div>
        </div>
    );
}

export default Home;
