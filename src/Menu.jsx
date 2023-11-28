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
                numPizzas > 0 ? (
                        <>
                            <p>
                                Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all
                                organic, all delicious.
                            </p>

                            <ul className='pizzas'>
                                {pizzas.map((pizza) => (
                                    <Pizza key={pizza.photoName} pizzaObj={pizza}/>
                                ))}
                            </ul>
                        </>)
                    : (<p> We're still working on our menu. Please stay with us :)</p>)
            }
        </main>
    );
};

export default Menu;