import './BottomBar.css';
import React, { Component, useState } from 'react';

export default function BottomBar(props) {
    const location = props.to;
    const Sections = props.sections;
    const [isOpen, setOpen] = useState(true);

    const toggleBar = () => {
        isOpen ? setOpen(false) : setOpen(true);
    }

    return (
        <div className={isOpen ? 'bottom-bar' : 'bottom-bar hidden'} >
            <div onClick={toggleBar} className='hide'></div>
            <a className='bar-link' href={location}>Back To Top</a>
            <div className='bar-buttons'>
                {Sections[1].items.map((item, index) => {
                    return (
                        <a key={index} className='bar-button' href={'#' + item.tag}>{item.title}</a>
                    )
                })
                }
            </div>
        </div>
    )
}
