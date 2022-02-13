import './Projects.css'

export default function Projects() {
    /* Images */
    const bookCover = require('../../images/book-cover.png');
    const bookStack = require('../../images/book-stack.jpg');
    const bookRing = require('../../images/ring.jpg');
    const adventureHome = require('../../images/adventures.png');
    const adventurePage = require('../../images/adventure2.png');

    /* PDFs */
    const root = process.env.PUBLIC_URL;
    const norton = root + '/assets/Norton-Pitch.pdf';
    const cloudNine = root + '/assets/Cloud9.pdf';
    const criterion = root + '/assets/Summary-of-Editing-for-Criterion.pdf';
    const chemistry = root + '/assets/Chemistry-of-Literary-Theory.pdf';

    return (
        <div class="page-container container-fluid bg-light text-primary">
            <div class="row justify-content-around">
                <div class="col-12 my-lg-2">
                    <h1>Just-for-Fun Projects!</h1>
                </div>

                <div class="col-12 bg-secondary text-light">
                    <h3>Academic</h3>
                </div>
                <div class="col-12">
                    <a class="article-link" href={norton} target="_blank">
                        <h3>Norton Pitch<i class="bi bi-download ml-2"></i></h3>
                    </a>
                    <p>A pretend pitch to the <em>Norton Anthology</em>
                        arguing for the inclusion of Salman Rushdie's
                        <em>Midnight's Children</em>
                        in the <em>Modernist Norton.</em>
                    </p>
                </div>

                <div class="col-12">
                    <a class="article-link" href={chemistry} target="_blank">
                        <h3>Chemistry of Literary Theory<i class="bi bi-download ml-2"></i></h3>
                    </a>
                    <p>
                        A creative project comparing eight literary theoretical lenses to eight chemistry concepts.
                    </p>
                </div>

                <div class="col-12">
                    <a class="article-link" href={criterion} target="_blank">
                        <h3>Summary of Editing Experience in Criterion<i class="bi bi-download ml-2"></i></h3>
                    </a>
                    <p>
                        A summary of my experience editing for the BYU journal Criterion for the first time.                </p>
                </div>

                <div class="col-12 bg-secondary text-light mb-2">
                    <h3>Creative</h3>
                </div>
                <div class="col-12">
                    <h3><em>Cloud-9</em> Book</h3>
                    <p>
                        <em>A creative non-fiction book about how my husband and I met and fell in love.</em>
                    </p>
                </div>
                <div class="col-4 text-center align-self-center">
                    <a class="book-link" href={cloudNine} target="_blank">
                        <img class="img w-50" src={bookCover} alt=""/>
                            <br/>
                                <h4>Click to view</h4>
                            </a>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid" src={bookStack} alt="" />
                        </div>
                        <div class="col-4">
                            <img class="img-fluid" src={bookRing} alt="" />
                        </div>

                        <div class="col-12">
                            <div class="divider bg-secondary"></div>
                        </div>

                        <div class="col-12">
                            <h3><em>Literary Misadventures</em></h3>
                            <p><em>A text-based Choose-Your-Own-Adventure story based on the Divine Comedy, Bisclavret, Laustic,
                                Lanval, Don Quixote, Antigone and the Ramayana.</em></p>
                        </div>
                        <div class="col-5">
                            <img class="img-fluid" src={adventureHome} alt="" />
                        </div>
                        <div class="col-2 text-center align-self-center">
                            <a class="book-link" href="https://adventure.gretchenpickles.com/">
                                <h4>Click to play</h4>
                            </a>
                        </div>
                        <div class="col-5">
                            <img class="img-fluid" src={adventurePage} alt="" />
                        </div>
                </div>


            </div>
    );
}