import React from 'react';
import Pizza from "./Pizza";
import data from "./data";


const Menu = () => {
    const pizzas = data;
    const numPizzas = pizzas.length;
    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            {
                numPizzas > 0 && (<ul className='pizzas'>
                    {pizzas.map((pizza) => (
                        <Pizza key={pizza.photoName} pizzaObj={pizza}/>
                    ))}
                </ul>)
            }
        </main>
    );
};

export default Menu;