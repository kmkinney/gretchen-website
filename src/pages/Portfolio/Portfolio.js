import './Portfolio.css';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Sections } from './Sections';
import { Editing } from './Editing';

export default function Portfolio() {
    // const NortonPDF = process.env.PUBLIC_URL+'/assets/Norton-Pitch.pdf#toolbar=0';
    const NortonPDF = process.env.PUBLIC_URL + '/assets/Norton-Pitch.pdf#view=fitH';
    const NortonTitle = 'Norton Pitch'
    // const NortonPDF = process.env.PUBLIC_URL+'/assets/Norton-Pitch.pdf';

    return (
        <div className="page text-primary">
                {/* <Sidebar sections={Sections}/> */}
                <h1>My Portfolio</h1>
                <h2>Sample Articles</h2>
                <div className="section-buttons">
                    {Sections.map((sec, index) => {
                        return (
                            <a key={index} className={sec.italicized ? 'section-button em' : 'section-button'}
                                href={'#' + sec.tag}>{sec.title}</a>
                        )
                    })
                    }
                </div>
                <h2>Editing Samples</h2>
                <div className='section-buttons'>
                    {Editing.map((sec, index) => {
                        return (
                            <a key={index} className='section-button'
                               href={'#' + sec.tag}>{sec.title}</a>
                        )
                    })

                    }
                </div>
                {Sections.map((sec, index) => {
                    return (
                        <PortfolioSection key={index} section={sec} />
                    )
                })
                }
                {Editing.map((sec, index) => {
                    return (
                        <PortfolioSection key={index} section={sec} />
                    )
                })

                }
        </div>
    );
}