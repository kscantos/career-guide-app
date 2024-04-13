import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutusPage.css';
import logo from '../img/logoWW1.png'; 

function AboutPage() {
    return (
        <div>
            <div className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 mx-auto text-center">
                            <h2 className="about-heading">About Us</h2>
                            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed commodo urna vel nisi tristique, 
                            vel suscipit purus fermentum. Mauris id mi eget libero vulputate scelerisque. 
                            Vivamus vitae nunc sit amet orci lacinia feugiat. 
                            Ut ultricies commodo ex, nec tincidunt justo ullamcorper nec.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                            Aenean id ligula lorem. Aliquam nec tincidunt velit, eget luctus justo. 
                            Cras condimentum pharetra turpis vel vehicula. 
                            Sed bibendum ipsum vel lacinia rhoncus. Nam tincidunt gravida turpis, 
                            ut euismod neque facilisis nec.</p>
                            <p className="about-text">Fusce suscipit ultrices magna, id sollicitudin mi iaculis ac. 
                            Null nec feugiat justo. Donec dapibus fringilla ante, at dignissim ex congue sit amet. 
                            Aliquam aliquet dolor vel malesuada lobortis. Nulla facilisi. In hac habitasse platea dictumst. 
                            Nulla efficitur interdum neque ac dictum. Vivamus nec nisi quam. 
                            Nulla nec tortor vel tortor consequat consequat sit amet eu odio.</p>
                            <a href="contact.html" className="btn btn-primary">Contact Us</a>
                        </div>
                        <div className="col-md-4 mx-auto text-center">
                            <img src={logo} alt="Image" className="img-fluid about-img" /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;

