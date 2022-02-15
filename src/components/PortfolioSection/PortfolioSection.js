import { NavLink } from 'react-router-dom';
import './PortfolioSection.css';

export default function PortfolioSection(props) {
    const Section = props.item;
    return (
        <div>
            <h2 className='section-title' id={Section.tag}>
                <span className={Section.italicized ? 'em' : ''}>{Section.title}</span>
                {Section.description ? ' ' + Section.description : ''}
                <a className='top' href='#top'>Back to Top</a>
            </h2>
            {Section.items.map((item, index) => {
                return (
                    <div key={index} className='section-item container-fluid'>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <a href={item.link}>See Original</a>
                            </div>
                            <div className='col-md-6 col-12'>
                                <iframe className='pdf-preview' key={index} src={item.src + '#view=fitH'}></iframe>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
}