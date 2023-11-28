import React from 'react';
import Order from "./Order";

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className='footer'>
            {
                isOpen ?
                    <Order  closeHours={closeHour} />
                    : (
                        <p> We're happy to welcome you between {openHour}:00 to {closeHour}:00. Please stay with us :)</p>
                    )
            }
        </footer>
    );
};

export default Footer;