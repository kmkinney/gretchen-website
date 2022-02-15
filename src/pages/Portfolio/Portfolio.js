import './Portfolio.css';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Sections } from './Sections';

export default function Portfolio() {
    // const NortonPDF = process.env.PUBLIC_URL+'/assets/Norton-Pitch.pdf#toolbar=0';
    const NortonPDF = process.env.PUBLIC_URL + '/assets/Norton-Pitch.pdf#view=fitH';
    const NortonTitle = 'Norton Pitch'
    // const NortonPDF = process.env.PUBLIC_URL+'/assets/Norton-Pitch.pdf';
    const allSectionItems = [];
    for(let section of Sections){
        for(let item of section.items)
            allSectionItems.push(item)
    }

    return (
        <div className="page text-primary">
            {/* <Sidebar sections={Sections}/> */}
            <h1>My Portfolio</h1>
            {Sections.map((sec, index) => {
                return (
                    <SectionLinks key={index} name={sec.name} items={sec.items} />
                )
            })}
            {allSectionItems.map((item, index) => {
                return (
                    <PortfolioSection key={index} item={item} />
                )
            })
            }

            {/* <h2>Sample Articles</h2>
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
                </div> */}
            {/* {Sections.map((sec, index) => {
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

            } */}
        </div>
    );
}

function SectionLinks(props) {
    const sectionName = props.name;
    const sectionItems = props.items;
    return (
        <div>
            <h2>{sectionName}</h2>
            <div className='section-buttons'>
                {sectionItems.map((item, index) => {
                    return (
                        <a key={index} className={item.italicized ? 'section-button em' : 'section-button'}
                            href={'#' + item.tag}>{item.title}</a>
                    )
                })
                }
            </div>
        </div>
    )
}