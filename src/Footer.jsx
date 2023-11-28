import React from 'react';

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className='footer'>
            {/*{new Date().toLocaleString()} We Are Currently {isOpen ? 'Open. Enjoy!' : 'Closed. Sorry'}.*/}
            {
                isOpen && (
                    <div className='order'>
                        <p> We're Open Until { closeHour }:00. Come visit us or Order Online.</p>
                        <button className='btn'>Order</button>
                    </div>
                )
            }
        </footer>
    );
};

export default Footer;