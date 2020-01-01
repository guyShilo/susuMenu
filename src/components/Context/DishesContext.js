import React from 'react';
import axios from 'axios'

let DishesContext = React.createContext({dishesStorage: returnArray()});

async function returnArray() {
    let dishes = [];
    await axios.get(`https://susu-menu.herokuapp.com/dishes`)
    .then(res => {
        dishes = res.data.data
    })
    return dishes
}

export const DishesProvider = DishesContext.Provider;
export const DishesConsumer = DishesContext.Consumer;

export default DishesContext