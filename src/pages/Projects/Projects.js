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
  const criterion = root + '/assets/Summary-of-Experience-Editing-for-Criterion.pdf';
  const chemistry = root + '/assets/Chemistry-of-Literary-Theory.pdf';

  return (
    <div className="page container-fluid bg-light text-primary">
      <div className="row justify-content-around">
        <div className="col-12 my-lg-2">
          <h1>Just-for-Fun Projects!</h1>
        </div>


        <div className="col-12">
          <h3><em>Cloud-9</em> Book</h3>
          <p>
            <em>A creative non-fiction book about how my husband and I met and fell in love.</em>
          </p>
        </div>
        <div className="col-4 text-center align-self-center">
          <a className="book-link" href={cloudNine} target="_blank">
            <img className="img w-50" src={bookCover} alt="" />
            <br />
            <h4>Click to view</h4>
          </a>
        </div>
        <div className="col-4">
          <img className="img-fluid" src={bookStack} alt="" />
        </div>
        <div className="col-4">
          <img className="img-fluid" src={bookRing} alt="" />
        </div>

        <div className="col-12">
          <div className="divider bg-secondary"></div>
        </div>

        <div className="col-12">
          <h3><em>Literary Misadventures</em></h3>
          <p><em>A text-based Choose-Your-Own-Adventure story based on the Divine Comedy, Bisclavret, Laustic,
            Lanval, Don Quixote, Antigone and the Ramayana.</em></p>
        </div>
        <div className="col-5">
          <img className="img-fluid" src={adventureHome} alt="" />
        </div>
        <div className="col-2 text-center align-self-center">
          <a className="book-link" href="https://kmkinney.github.io/gretchen-text-adventure/" target='_blank'>
            <h4>Click to play</h4>
          </a>
        </div>
        <div className="col-5">
          <img className="img-fluid" src={adventurePage} alt="" />
        </div>
        <div className='col-12 text-center text-secondary my-5'>
          <h2>More projects coming soon...</h2>
        </div>
      </div>


    </div>
  );
}
