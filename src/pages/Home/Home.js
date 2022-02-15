import './Home.css';
import { AboutContent } from './AboutContent';

export default function Home() {
    const portraitImage = require('../../images/gretchen.jpg')
    return (
        <div className="page container-fluid bg-light text-primary">
            <div className="row">
                <div className="col-12 mt-2 mt-lg-4 mb-lg-2 p-lg-0">
                    <h2 className="">
                        Hi, I'm Gretchen! 
                        <i className="bi bi-emoji-smile"></i>
                        <a className='resume-link' href='/portfolio#resume'>See My Resume</a>
                    </h2>
                </div>
                <div className="col-md-4 col-12 m-md-0 p-md-0 mb-3 order-md-1">
                    <img className="img-fluid" src={portraitImage} alt="" />
                </div>

                <AboutSection />

                <div className="col-12 bg-primary text-light text-center order-md-4 mt-lg-4">
                    <div className="banner-title">Contact Me</div>
                </div>
                <div className="col-12 bg-light text-center order-md-5 my-2 my-lg-4">
                    <h4>email: <a className="email-link" href="mailto:gretchenpickles@gmail.com">gretchenpickles@gmail.com</a>
                    </h4>
                    <h4>phone: 469-412-6742</h4>
                </div>


            </div>
        </div>
    );
}


function AboutSection() {
    return (
        <div className="col-md-8 col-12 order-md-2 px-md-2 pl-lg-3 p-0 m-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-light bg-secondary">
                        <div className="banner-title">About Me</div>
                    </div>
                    <div className="col-12 text-primary bg-light">
                        <p>{AboutContent.about}</p>
                    </div>
                    <div className="col-12 text-light bg-secondary">
                        <div className="banner-title">Skills</div>
                    </div>
                    <div className="col-12 text-primary bg-light ml-3">
                        <ul>
                            {AboutContent.skills.map((skill, index) => {
                                return (
                                    <li key={index}>{skill}</li>
                                )
                            })
                            }
                        </ul>
                    </div>
                    <div className="col-12 text-light bg-secondary">
                        <div className="banner-title">Interests</div>
                    </div>
                    <div className="col-12 text-primary bg-light ml-3">
                        <ul>
                            {AboutContent.interests.map((interest, index) => {
                                return (
                                    <li key={index}>{interest}</li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}