import { NavLink } from 'react-router-dom';
import './PortfolioSection.css';

export default function PortfolioSection(props) {
    const Section = props.item;
    return (
        <div>
            <h2 className='section-title' id={Section.tag}>
                <span className={Section.italicized ? 'em' : ''}>{Section.title}</span>
                {Section.description ? ' ' + Section.description : ''}
            </h2>
            {Section.items.map((item, index) => {
                return (
                    <PortfolioItem key={index} item={item} />
                )
            })
            }
        </div>
    );
}

function PortfolioItem(props) {
    const item = props.item;
    if (!item.src) {
        return (
            <div className='section-item container-fluid'>
                <div className='row'>
                    <div className='col-md-4 col-12'>
                        <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                        <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    </div>
                    <div className='col-md-8 col-12'>
                        <a className='drive-link' href={item.link} target='_blank'>
                            {item.linktext}
                            <i className='ml-2 bi bi-download'></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='section-item container-fluid'>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                </div>
                <div className='col-md-6 col-12'>
                    <a className='pdf-link' href={item.link} target="_blank">{item.linktext}</a>
                    <iframe className='pdf-preview' src={item.src + '#view=fitH'}></iframe>
                </div>
            </div>
        </div>
    )
}