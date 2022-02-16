import './Portfolio.css';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import { Sections } from './Sections';
import BottomBar from '../../components/BottomBar/BottomBar';

export default function Portfolio() {
    // const NortonPDF = process.env.PUBLIC_URL+'/assets/Norton-Pitch.pdf#toolbar=0';
    const NortonPDF = process.env.PUBLIC_URL + '/assets/Norton-Pitch.pdf#view=fitH';
    const NortonTitle = 'Norton Pitch'
    // const NortonPDF = process.env.PUBLIC_URL+'/assets/Norton-Pitch.pdf';

    return (
        <div className="page text-primary">
            {/* <Sidebar sections={Sections}/> */}
            <h1 className='text-center my-2'>Portfolio</h1>
            <SectionNav />
            <SectionContent />

            {/* <BottomBar to='#top' sections={Sections}>
            </BottomBar> */}
        </div>
    );
}

function SectionContent() {
    const allSectionItems = [];
    for (let section of Sections) {
        for (let item of section.items)
            allSectionItems.push(item)
    }
    return (
        <div>
            {allSectionItems.map((item, index) => {
                return (
                    <PortfolioSection key={index} item={item} />
                )
            })
            }
        </div>
    )
}

function SectionNav() {
    return (
        <div>
            {Sections.map((sec, index) => {
                return (
                    <SectionLinks key={index} name={sec.name} items={sec.items} />
                )
            })}
        </div>
    )
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