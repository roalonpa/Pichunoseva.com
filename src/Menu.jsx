import { useState } from "react";
import './menu.css'
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

export default function Menu({ scrollTo, containersData }) {

    const [menuState, setMenuState] = useState(() => {return 'closed'});

    return (
        <div className="menu-container">
            <button className="menu-button" onClick={() => {setMenuState(menuState === 'open' ? 'closed' : 'open'); menuState === 'closed' ? window.scrollTo({top: 0, behavior: 'smooth'}) : null}}>
                {menuState === 'open' ? (
                    <IoClose size={35} />
                ) : (
                    <IoMenu size={35} />
                )}
            </button>
            <menu className={`menu ${menuState}`}>
                {containersData.map((data, index) => (
                    <button key={data.id} onClick={() => {scrollTo(data.id); setMenuState('closed')}} className="menu-item menu-button">{data.name}</button>
                ))}
            </menu>
        </div>
    )
}