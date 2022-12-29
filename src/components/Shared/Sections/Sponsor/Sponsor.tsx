import React from 'react';
import { Card } from 'react-bootstrap';
import logo1 from '../../../../assets/images/SharedImages/BannerLogo1.png';
import logo2 from '../../../../assets/images/SharedImages/BannerLogo2.png';
import logo3 from '../../../../assets/images/SharedImages/BannerLogo3.png';
import logo4 from '../../../../assets/images/SharedImages/BannerLogo4.png';
import './Sponsor.css';


const Sponsor = () => {
    return (
        <div className="clientLogo">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-12">
                        <Card>
                            <Card.Img variant="top" src={logo1} />
                        </Card>
                    </div>
                    <div className="col-xl-3 col-lg-12">
                        <Card>
                            <Card.Img variant="top" src={logo2} />
                        </Card>
                    </div>
                    <div className="col-xl-3 col-lg-12">
                        <Card>
                            <Card.Img variant="top" src={logo3} />
                        </Card>
                    </div>
                    <div className="col-xl-3 col-lg-12">
                        <Card>
                            <Card.Img variant="top" src={logo4} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsor;